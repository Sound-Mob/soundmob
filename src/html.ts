const CODE_CHARS = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

export function randomCode(length: number): string {
  const bytes = crypto.getRandomValues(new Uint8Array(length));
  return Array.from(bytes, (b) => CODE_CHARS[b % CODE_CHARS.length]).join("");
}

export const BRAND = "soundmob";

export const TOKENS = {
  bg: "#0a0a0b",
  ink: "#f4f0e8",
  gold: "#e8a849",
  pink: "#ff4d8d",
  muted: "rgba(244, 240, 232, 0.72)",
} as const;

export function baseStyles(): string {
  return `
    :root {
      color-scheme: dark;
      --bg: ${TOKENS.bg};
      --ink: ${TOKENS.ink};
      --gold: ${TOKENS.gold};
      --pink: ${TOKENS.pink};
      --muted: ${TOKENS.muted};
    }
    * { box-sizing: border-box; margin: 0; }
    body {
      min-height: 100svh;
      background: var(--bg);
      color: var(--ink);
      font-family: system-ui, -apple-system, Segoe UI, sans-serif;
      line-height: 1.5;
    }
    a { color: var(--gold); }
    .wrap { max-width: 56rem; margin: 0 auto; padding: 1.25rem; }
    .eyebrow {
      font-size: 0.65rem;
      letter-spacing: 0.24em;
      text-transform: lowercase;
      color: var(--gold);
      margin-bottom: 0.5rem;
    }
    h1 {
      font-size: clamp(1.75rem, 4vw, 2.5rem);
      letter-spacing: -0.02em;
      margin-bottom: 0.75rem;
    }
    p.lead { color: var(--muted); max-width: 36rem; margin-bottom: 1.5rem; }
    .btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      padding: 0.7rem 1.1rem;
      border-radius: 999px;
      border: 1px solid rgba(232, 168, 73, 0.45);
      background: rgba(232, 168, 73, 0.12);
      color: var(--ink);
      text-decoration: none;
      font-weight: 600;
      cursor: pointer;
    }
    .btn:hover { background: rgba(232, 168, 73, 0.22); }
    .btn.secondary {
      border-color: rgba(244, 240, 232, 0.2);
      background: rgba(244, 240, 232, 0.06);
    }
    .panel {
      border: 1px solid rgba(244, 240, 232, 0.12);
      border-radius: 1rem;
      padding: 1rem;
      background: rgba(255, 255, 255, 0.03);
    }
    input, textarea {
      width: 100%;
      padding: 0.65rem 0.8rem;
      border-radius: 0.6rem;
      border: 1px solid rgba(244, 240, 232, 0.18);
      background: rgba(0, 0, 0, 0.35);
      color: var(--ink);
    }
    label { display: block; font-size: 0.85rem; color: var(--muted); margin-bottom: 0.35rem; }
    .stack { display: grid; gap: 0.75rem; }
    .row { display: flex; flex-wrap: wrap; gap: 0.75rem; align-items: center; }
    .tag {
      font-size: 0.75rem;
      letter-spacing: 0.12em;
      text-transform: lowercase;
      color: var(--pink);
    }
  `;
}

export function landingPage(origin: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${BRAND}</title>
  <meta name="description" content="${BRAND} — synced listening rooms." />
  <link rel="preload" href="/images/hero-1.jpg" as="image" type="image/jpeg" />
  <style>
    ${baseStyles()}
    .hero {
      position: relative;
      min-height: 100svh;
      overflow: hidden;
      background: #000;
    }
    .hero img {
      position: absolute; inset: 0; width: 100%; height: 100%;
      object-fit: cover; object-position: center 42%;
    }
    .hero::after {
      content: ""; position: absolute; inset: 0;
      background: linear-gradient(to top, rgba(10,10,11,.92), rgba(10,10,11,.2));
      pointer-events: none;
    }
    .hero-inner {
      position: relative; z-index: 1; min-height: 100svh;
      display: flex; flex-direction: column; justify-content: flex-end;
      padding: 1.5rem 1.25rem 2rem;
    }
    .actions { display: flex; flex-wrap: wrap; gap: 0.75rem; margin-top: 1.25rem; }
    .mark {
      position: absolute; right: 1.5rem; bottom: 1.75rem; z-index: 2;
      font-size: 0.7rem; font-weight: 600; letter-spacing: 0.24em;
      text-transform: lowercase; color: rgba(244,240,232,.92);
    }
  </style>
</head>
<body>
  <main class="hero">
    <img src="/images/hero-1.jpg" alt="" width="2752" height="1536" decoding="async" />
    <div class="hero-inner wrap">
      <p class="eyebrow">${BRAND}</p>
      <h1>synced listening, host-controlled.</h1>
      <p class="lead">one dj drives the queue. listeners join with a room code — not a public directory.</p>
      <div class="actions">
        <a class="btn" href="/auth/google">host with youtube</a>
        <a class="btn secondary" href="/listen">join a room</a>
      </div>
    </div>
    <p class="mark">${BRAND}</p>
  </main>
</body>
</html>`;
}

export function listenPage(code = ""): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${BRAND} · listen</title>
  <style>${baseStyles()}
    #player { aspect-ratio: 16/9; background: #000; border-radius: 0.75rem; overflow: hidden; }
    #chat { max-height: 12rem; overflow: auto; font-size: 0.9rem; }
    .chat-line { padding: 0.25rem 0; border-bottom: 1px solid rgba(255,255,255,.06); }
    .meta { font-size: 0.85rem; color: var(--muted); }
  </style>
  <script src="https://www.youtube.com/iframe_api" async></script>
</head>
<body>
  <div class="wrap stack">
    <p class="eyebrow">${BRAND} · listen</p>
    <h1>join the room</h1>
    <p class="lead">enter the code and passcode from your host. rooms are unlisted.</p>

    <form id="join-form" class="panel stack">
      <div>
        <label for="code">room code</label>
        <input id="code" name="code" value="${escapeHtml(code)}" placeholder="e.g. K7P2M9" autocapitalize="characters" required />
      </div>
      <div>
        <label for="passcode">passcode</label>
        <input id="passcode" name="passcode" type="password" placeholder="from host" required />
      </div>
      <div>
        <label for="name">display name</label>
        <input id="name" name="name" placeholder="optional" maxlength="64" />
      </div>
      <button class="btn" type="submit">connect</button>
      <p id="join-error" class="tag" hidden></p>
    </form>

    <section id="room" class="stack" hidden>
      <p class="meta">listening with <strong id="host-name">host</strong> · <span id="listener-count">0</span> listeners</p>
      <div id="player"></div>
      <p id="now-playing" class="meta"></p>
      <div class="panel stack">
        <div id="chat"></div>
        <form id="chat-form" class="row">
          <input id="chat-input" placeholder="say something…" maxlength="500" style="flex:1" />
          <button class="btn secondary" type="submit">send</button>
        </form>
      </div>
    </section>
  </div>
  <script src="/js/listen.js" type="module"></script>
</body>
</html>`;
}

export function hostPage(userName: string, userPicture: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${BRAND} · host</title>
  <style>${baseStyles()}
    .profile { display: flex; align-items: center; gap: 0.75rem; }
    .profile img { width: 2.5rem; height: 2.5rem; border-radius: 999px; }
    #player { aspect-ratio: 16/9; background: #000; border-radius: 0.75rem; overflow: hidden; }
    .results { display: grid; gap: 0.5rem; }
    .result {
      display: grid; grid-template-columns: 4.5rem 1fr auto; gap: 0.75rem; align-items: center;
      padding: 0.5rem; border-radius: 0.6rem; border: 1px solid rgba(255,255,255,.08);
      cursor: pointer;
    }
    .result img { width: 4.5rem; height: 2.6rem; object-fit: cover; border-radius: 0.35rem; }
    .share code { font-size: 1.1rem; letter-spacing: 0.14em; }
    #chat { max-height: 10rem; overflow: auto; font-size: 0.9rem; }
  </style>
  <script src="https://www.youtube.com/iframe_api" async></script>
</head>
<body>
  <div class="wrap stack">
    <div class="row" style="justify-content: space-between">
      <div>
        <p class="eyebrow">${BRAND} · host</p>
        <h1>your session</h1>
      </div>
      <div class="profile">
        <img src="${escapeHtml(userPicture)}" alt="" />
        <div>
          <div>${escapeHtml(userName)}</div>
          <a href="/auth/logout">sign out</a>
        </div>
      </div>
    </div>

    <section id="setup" class="panel stack">
      <p class="lead" style="margin:0">start a private room. share the code + passcode with listeners only.</p>
      <button id="create-room" class="btn" type="button">create room</button>
    </section>

    <section id="live" class="stack" hidden>
      <div class="panel share stack">
        <p class="tag">share with listeners</p>
        <p>code: <code id="room-code"></code></p>
        <p>passcode: <code id="room-pass"></code></p>
        <p class="meta">join link: <a id="join-link" href="/listen"></a></p>
        <p class="meta"><span id="listener-count">0</span> listeners connected</p>
      </div>

      <div id="player"></div>

      <form id="search-form" class="row">
        <input id="search-input" placeholder="search youtube…" style="flex:1" />
        <button class="btn secondary" type="submit">search</button>
      </form>
      <div id="results" class="results"></div>

      <div class="panel stack">
        <p class="tag">queue</p>
        <div id="queue"></div>
      </div>

      <div class="panel stack">
        <div id="chat"></div>
        <form id="chat-form" class="row">
          <input id="chat-input" placeholder="chat to the room…" maxlength="500" style="flex:1" />
          <button class="btn secondary" type="submit">send</button>
        </form>
      </div>
    </section>
  </div>
  <script src="/js/host.js" type="module"></script>
</body>
</html>`;
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}
