# SoundMob

Live sound platform — **rebuilt** on Cloudflare Workers + Hono.

## Live

**https://soundmob.jvalamis.workers.dev**

## Stack

- [Hono](https://hono.dev) on Cloudflare Workers
- Static assets (`public/`) via Workers Assets
- `YOUTUBE_DATA_API_KEY` from Cloudflare Secrets Store (ged vault)

## Develop

```bash
npm install
npm run dev
```

## Deploy

```bash
npm run deploy
```

Requires `CLOUDFLARE_API_TOKEN` or `wrangler login`. Secrets bind via `wrangler.toml` → `default_secrets_store`.

## API

| Route | Description |
|-------|-------------|
| `GET /` | Landing (cinematic hero) |
| `GET /health` | Liveness |
| `GET /api/youtube/status` | Whether YouTube API key is bound |

## Repo history

Legacy Angular 6 + Express app was removed in the 2026 gut-and-rebuild. See git history before this commit for the original SoundMob codebase.
