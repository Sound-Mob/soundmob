import { Hono } from "hono";

export type Env = {
  ASSETS: Fetcher;
  YOUTUBE_DATA_API_KEY: string;
};

const HERO = {
  src: "/images/hero-1.jpg",
  width: 2752,
  height: 1536,
} as const;

function landingHtml(): string {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>SoundMob</title>
    <meta name="description" content="SoundMob — live sound, rebuilt." />
    <link rel="preload" href="${HERO.src}" as="image" type="image/jpeg" />
    <style>
      :root {
        color-scheme: dark;
        --bg: #0a0a0b;
        --ink: #f4f0e8;
        --gold: #e8a849;
      }
      * { box-sizing: border-box; margin: 0; }
      html { scroll-behavior: smooth; }
      body {
        min-height: 100svh;
        background: var(--bg);
        color: var(--ink);
        font-family: system-ui, -apple-system, Segoe UI, sans-serif;
      }
      .hero {
        position: relative;
        min-height: 100svh;
        overflow: hidden;
        background: #000;
      }
      .hero img {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center 42%;
      }
      .hero::after {
        content: "";
        position: absolute;
        inset: 0;
        background: linear-gradient(
          to top,
          rgba(10, 10, 11, 0.88) 0%,
          rgba(10, 10, 11, 0.35) 42%,
          rgba(10, 10, 11, 0.15) 100%
        );
        pointer-events: none;
      }
      .hero-inner {
        position: relative;
        z-index: 1;
        min-height: 100svh;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        padding: 1.5rem 1.25rem 2rem;
      }
      @media (min-width: 768px) {
        .hero-inner { padding: 2rem 2.5rem 2.5rem; }
      }
      .eyebrow {
        font-size: 0.65rem;
        letter-spacing: 0.24em;
        text-transform: uppercase;
        color: var(--gold);
        margin-bottom: 0.75rem;
      }
      h1 {
        font-size: clamp(2rem, 5vw, 3.25rem);
        line-height: 1.05;
        letter-spacing: -0.02em;
        max-width: 14ch;
      }
      .tagline {
        margin-top: 1rem;
        max-width: 28rem;
        line-height: 1.55;
        color: rgba(244, 240, 232, 0.72);
        font-size: 1rem;
      }
      .mark {
        position: absolute;
        right: 1.5rem;
        bottom: 1.75rem;
        z-index: 2;
        font-size: 0.7rem;
        font-weight: 600;
        letter-spacing: 0.24em;
        text-transform: uppercase;
        color: rgba(244, 240, 232, 0.92);
        text-shadow: 0 1px 18px rgba(0, 0, 0, 0.45);
      }
      @media (min-width: 768px) {
        .mark { right: 2.5rem; bottom: 2.25rem; font-size: 0.8rem; }
      }
      @media (prefers-reduced-motion: reduce) {
        html { scroll-behavior: auto; }
      }
    </style>
  </head>
  <body>
    <main class="hero" aria-label="SoundMob">
      <img
        src="${HERO.src}"
        alt=""
        width="${HERO.width}"
        height="${HERO.height}"
        decoding="sync"
        fetchpriority="high"
      />
      <div class="hero-inner">
        <p class="eyebrow">SoundMob</p>
        <h1>Live sound, rebuilt.</h1>
        <p class="tagline">The mob is coming back. New stack, same energy.</p>
      </div>
      <p class="mark">SoundMob</p>
    </main>
  </body>
</html>`;
}

const app = new Hono<{ Bindings: Env }>();

app.get("/health", (c) => c.json({ ok: true, service: "soundmob" }));

app.get("/api/youtube/status", (c) => {
  const configured = Boolean(c.env.YOUTUBE_DATA_API_KEY?.length);
  return c.json({ configured });
});

app.get("/", (c) => c.html(landingHtml()));

app.all("*", async (c) => {
  const asset = await c.env.ASSETS.fetch(c.req.raw);
  if (asset.status !== 404) return asset;
  return c.notFound();
});

export default app;
