# soundmob

Synced listening rooms — one host controls the YouTube queue; listeners join with a private code.

## Live

**https://soundmob.jvalamis.workers.dev**

## Stack

- [Hono](https://hono.dev) on Cloudflare Workers
- **Durable Objects** — per-room WebSocket sync (playback state + chat)
- **KV** — host sessions (Google OAuth tokens)
- Workers Assets for static files
- Secrets via ged vault → Cloudflare Secrets Store

## MVP flow

1. **Host** — open the site → **host with youtube** → Google OAuth → **create room**
2. Share **room code** + **passcode** with listeners (unlisted; no public room directory)
3. **Listeners** — `/listen` → enter code + passcode → playback syncs to the host
4. Host searches YouTube, plays tracks; listeners follow via synced iframe player

## Develop

```bash
npm install
npm run dev
```

## Deploy

```bash
npm run deploy
```

Requires `CLOUDFLARE_API_TOKEN` or `wrangler login`.

## Secrets (ged vault)

| Secret | Purpose |
|--------|---------|
| `YOUTUBE_DATA_API_KEY` | Server-side YouTube search |
| `GOOGLE_OAUTH_CLIENT_ID` | Host sign-in |
| `GOOGLE_OAUTH_CLIENT_SECRET` | Host sign-in |
| `SESSION_SECRET` | Room init + session signing |

Push from ged meta repo (never commit values):

```bash
# one-time file with the four keys, then:
cd ../ged && npm run ged:vault -- --push --from-env /path/to/soundmob-secrets.env
```

### Google OAuth setup

1. [Google Cloud Console](https://console.cloud.google.com/) → APIs & Services → **Credentials**
2. Enable **YouTube Data API v3** on the project (same project as your API key is fine)
3. **Create credentials** → OAuth client ID → **Web application**
4. **Authorized redirect URI:**  
   `https://soundmob.jvalamis.workers.dev/auth/google/callback`  
   (add `http://localhost:8787/auth/google/callback` for `wrangler dev`)
5. Copy client ID + secret into vault as `GOOGLE_OAUTH_CLIENT_ID` / `GOOGLE_OAUTH_CLIENT_SECRET`

Generate `SESSION_SECRET` (any long random string):

```bash
openssl rand -base64 32
```

## API

| Route | Description |
|-------|-------------|
| `GET /` | Landing |
| `GET /host` | Host dashboard (auth required) |
| `GET /listen` | Listener join |
| `GET /auth/google` | Start Google OAuth |
| `POST /api/rooms` | Create private room (auth required) |
| `GET /api/youtube/search?q=` | Search videos (auth required) |
| `GET /room/:code/ws` | WebSocket sync (role=host\|listener) |
| `GET /health` | Liveness |

## Branch policy

`master` is protected — merge via PR only.

## History

Legacy Angular 6 + Express + Socket.io app removed in 2026 rebuild. See git history before `070ae23`.
