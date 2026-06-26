import { Hono } from "hono";
import { exchangeGoogleCode, googleAuthUrl, refreshAccessToken } from "./auth";
import { hostPage, landingPage, listenPage } from "./html";
import { randomCode } from "./html";
import { Room } from "./room";
import {
  clearSessionCookie,
  createSession,
  getSession,
  readSessionId,
  sessionCookie,
} from "./session";
import { searchVideos } from "./youtube";
import type { PlaybackState, SessionUser } from "./types";

export type Env = {
  ASSETS: Fetcher;
  SESSIONS: KVNamespace;
  ROOM: DurableObjectNamespace;
  YOUTUBE_DATA_API_KEY: string;
  SESSION_SECRET: string;
  GOOGLE_OAUTH_CLIENT_ID?: string;
  GOOGLE_OAUTH_CLIENT_SECRET?: string;
};

const app = new Hono<{ Bindings: Env }>();

function origin(c: { req: { url: string } }): string {
  return new URL(c.req.url).origin;
}

function redirectUri(originUrl: string): string {
  return `${originUrl}/auth/google/callback`;
}

async function requireUser(c: {
  env: Env;
  req: { header: (name: string) => string | undefined };
}): Promise<SessionUser | null> {
  const sessionId = readSessionId(c.req.header("Cookie"));
  let user = await getSession(c.env.SESSIONS, sessionId);
  if (!user) return null;

  user = await refreshAccessToken(
    user,
    c.env.GOOGLE_OAUTH_CLIENT_ID ?? "",
    c.env.GOOGLE_OAUTH_CLIENT_SECRET ?? "",
  );

  if (sessionId) {
    await c.env.SESSIONS.put(`session:${sessionId}`, JSON.stringify(user), {
      expirationTtl: 60 * 60 * 24 * 7,
    });
  }

  return user;
}

app.get("/health", (c) => c.json({ ok: true, service: "soundmob" }));

app.get("/api/youtube/status", (c) => {
  const configured = Boolean(c.env.YOUTUBE_DATA_API_KEY?.length);
  const oauth = Boolean(
    c.env.GOOGLE_OAUTH_CLIENT_ID?.length &&
      c.env.GOOGLE_OAUTH_CLIENT_SECRET?.length,
  );
  return c.json({ configured, oauth });
});

app.get("/", (c) => c.html(landingPage(origin(c))));

app.get("/listen", (c) => {
  const code = c.req.query("code")?.toUpperCase() ?? "";
  return c.html(listenPage(code));
});

app.get("/host", async (c) => {
  const user = await requireUser(c);
  if (!user) return c.redirect("/");
  return c.html(hostPage(user.name, user.picture));
});

app.get("/api/me", async (c) => {
  const user = await requireUser(c);
  if (!user) return c.json({ authenticated: false }, 401);
  return c.json({
    authenticated: true,
    name: user.name,
    picture: user.picture,
    email: user.email,
  });
});

app.get("/auth/google", (c) => {
  if (!c.env.GOOGLE_OAUTH_CLIENT_ID || !c.env.GOOGLE_OAUTH_CLIENT_SECRET) {
    return c.html(
      `<!DOCTYPE html><html><body style="font-family:system-ui;background:#0a0a0b;color:#f4f0e8;padding:2rem"><h1>soundmob</h1><p>google oauth is not configured yet.</p><p>add <code>GOOGLE_OAUTH_CLIENT_ID</code> and <code>GOOGLE_OAUTH_CLIENT_SECRET</code> to the ged vault, uncomment the oauth bindings in <code>wrangler.toml</code>, and redeploy.</p><p><a href="/">back</a></p></body></html>`,
      503,
    );
  }
  const state = crypto.randomUUID();
  const url = googleAuthUrl(
    c.env.GOOGLE_OAUTH_CLIENT_ID,
    redirectUri(origin(c)),
    state,
  );
  return c.redirect(url);
});

app.get("/auth/google/callback", async (c) => {
  const code = c.req.query("code");
  if (!code) return c.text("missing code", 400);

  try {
    const user = await exchangeGoogleCode(
      code,
      c.env.GOOGLE_OAUTH_CLIENT_ID ?? "",
      c.env.GOOGLE_OAUTH_CLIENT_SECRET ?? "",
      redirectUri(origin(c)),
    );
    const sessionId = await createSession(c.env.SESSIONS, user);
    c.header("Set-Cookie", sessionCookie(sessionId));
    return c.redirect("/host");
  } catch {
    return c.text("authentication failed", 500);
  }
});

app.get("/auth/logout", async (c) => {
  const sessionId = readSessionId(c.req.header("Cookie"));
  if (sessionId) await c.env.SESSIONS.delete(`session:${sessionId}`);
  c.header("Set-Cookie", clearSessionCookie());
  return c.redirect("/");
});

app.get("/api/youtube/search", async (c) => {
  const user = await requireUser(c);
  if (!user) return c.json({ error: "unauthorized" }, 401);

  const q = c.req.query("q")?.trim();
  if (!q) return c.json({ items: [] });

  try {
    const items = await searchVideos(c.env.YOUTUBE_DATA_API_KEY, q);
    return c.json({ items });
  } catch {
    return c.json({ error: "search_failed" }, 502);
  }
});

app.post("/api/rooms", async (c) => {
  const user = await requireUser(c);
  if (!user) return c.json({ error: "unauthorized" }, 401);

  const code = randomCode(6);
  const passcode = randomCode(8);
  const playback: PlaybackState = {
    videoId: null,
    title: "",
    thumbnail: "",
    playing: false,
    positionSec: 0,
    updatedAt: Date.now(),
  };

  const stub = c.env.ROOM.get(c.env.ROOM.idFromName(code));
  const initRes = await stub.fetch("https://do/init", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Soundmob-Internal": c.env.SESSION_SECRET,
    },
    body: JSON.stringify({
      code,
      passcode,
      hostId: user.id,
      hostName: user.name,
      playback,
      queue: [],
    }),
  });

  if (!initRes.ok) {
    return c.json({ error: "room_create_failed" }, 500);
  }

  const joinUrl = `${origin(c)}/listen?code=${code}`;
  return c.json({ code, passcode, joinUrl });
});

app.get("/room/:code/ws", async (c) => {
  const code = c.req.param("code").toUpperCase();
  const role = c.req.query("role");

  const headers = new Headers(c.req.raw.headers);
  if (role === "host") {
    const user = await requireUser(c);
    if (!user) return c.text("unauthorized", 401);
    headers.set("X-Host-Id", user.id);
  }

  const url = new URL(c.req.url);
  url.pathname = "/ws";

  const stub = c.env.ROOM.get(c.env.ROOM.idFromName(code));
  return stub.fetch(new Request(url.toString(), { headers, method: "GET" }));
});

app.all("*", async (c) => {
  const asset = await c.env.ASSETS.fetch(c.req.raw);
  if (asset.status !== 404) return asset;
  return c.notFound();
});

export { Room };
export default app;
