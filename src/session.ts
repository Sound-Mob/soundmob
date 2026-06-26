import type { SessionUser } from "./types";

const COOKIE = "sm_session";
const TTL_SEC = 60 * 60 * 24 * 7;

export async function createSession(
  kv: KVNamespace,
  user: SessionUser,
): Promise<string> {
  const id = crypto.randomUUID();
  await kv.put(`session:${id}`, JSON.stringify(user), {
    expirationTtl: TTL_SEC,
  });
  return id;
}

export async function getSession(
  kv: KVNamespace,
  sessionId: string | undefined,
): Promise<SessionUser | null> {
  if (!sessionId) return null;
  const raw = await kv.get(`session:${sessionId}`);
  if (!raw) return null;
  return JSON.parse(raw) as SessionUser;
}

export function sessionCookie(id: string): string {
  return `${COOKIE}=${id}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=${TTL_SEC}`;
}

export function clearSessionCookie(): string {
  return `${COOKIE}=; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=0`;
}

export function readSessionId(cookieHeader: string | undefined): string | undefined {
  if (!cookieHeader) return undefined;
  const match = cookieHeader.match(new RegExp(`${COOKIE}=([^;]+)`));
  return match?.[1];
}
