/** @typedef {{ videoId: string, title: string, thumbnail: string }} QueueItem */
/** @typedef {{ videoId: string|null, title: string, thumbnail: string, playing: boolean, positionSec: number, updatedAt: number }} PlaybackState */

let ytReady;
const ytReadyPromise = new Promise((resolve) => {
  ytReady = resolve;
});
window.onYouTubeIframeAPIReady = () => ytReady();

/**
 * @param {HTMLElement} container
 * @param {{ onTick?: (playback: PlaybackState) => void }} opts
 */
export async function createSyncedPlayer(container, opts = {}) {
  await ytReadyPromise;

  /** @type {import('https://www.youtube.com/iframe_api').YT.Player | null} */
  let player = null;
  let suppressEvents = false;
  let lastSent = 0;

  /** @type {PlaybackState} */
  let local = {
    videoId: null,
    title: "",
    thumbnail: "",
    playing: false,
    positionSec: 0,
    updatedAt: Date.now(),
  };

  function ensurePlayer(videoId) {
    if (player && local.videoId === videoId) return;
    local.videoId = videoId;
    container.innerHTML = "";
    player = new YT.Player(container, {
      height: "100%",
      width: "100%",
      videoId,
      playerVars: { autoplay: 1, rel: 0, modestbranding: 1 },
      events: {
        onStateChange: (event) => {
          if (suppressEvents || !opts.onTick) return;
          const playing = event.data === YT.PlayerState.PLAYING;
          const positionSec = player?.getCurrentTime?.() ?? local.positionSec;
          local = {
            ...local,
            playing,
            positionSec,
            updatedAt: Date.now(),
          };
          opts.onTick(local);
        },
      },
    });
  }

  return {
    /** @param {PlaybackState} remote */
    apply(remote) {
      if (!remote.videoId) return;
      suppressEvents = true;
      ensurePlayer(remote.videoId);
      const target =
        remote.positionSec +
        (remote.playing
          ? Math.max(0, (Date.now() - remote.updatedAt) / 1000)
          : 0);

      const applySeek = () => {
        if (!player?.getCurrentTime) return;
        const drift = Math.abs(player.getCurrentTime() - target);
        if (drift > 1.2) player.seekTo(target, true);
        if (remote.playing) player.playVideo();
        else player.pauseVideo();
        suppressEvents = false;
      };

      if (player?.getPlayerState) {
        applySeek();
      } else {
        setTimeout(applySeek, 500);
      }

      local = { ...remote };
    },

    tick() {
      if (!opts.onTick || !player?.getCurrentTime) return;
      const now = Date.now();
      if (now - lastSent < 2000) return;
      lastSent = now;
      const playing = player.getPlayerState() === YT.PlayerState.PLAYING;
      local = {
        ...local,
        playing,
        positionSec: player.getCurrentTime(),
        updatedAt: now,
      };
      opts.onTick(local);
    },

    /** @param {QueueItem} item */
    play(item) {
      local = {
        videoId: item.videoId,
        title: item.title,
        thumbnail: item.thumbnail,
        playing: true,
        positionSec: 0,
        updatedAt: Date.now(),
      };
      suppressEvents = true;
      ensurePlayer(item.videoId);
      setTimeout(() => {
        player?.playVideo?.();
        suppressEvents = false;
        opts.onTick?.(local);
      }, 400);
    },
  };
}

export function connectRoom({ code, role, passcode, onMessage }) {
  const proto = location.protocol === "https:" ? "wss" : "ws";
  const params = new URLSearchParams({ role });
  if (passcode) params.set("passcode", passcode);
  const ws = new WebSocket(
    `${proto}://${location.host}/room/${code}/ws?${params}`,
  );

  ws.addEventListener("message", (event) => {
    try {
      onMessage(JSON.parse(event.data));
    } catch {
      /* ignore */
    }
  });

  return {
    ws,
    send(payload) {
      if (ws.readyState === WebSocket.OPEN) {
        ws.send(JSON.stringify(payload));
      }
    },
  };
}

export function appendChat(container, { name, text }) {
  const line = document.createElement("div");
  line.className = "chat-line";
  line.textContent = `${name}: ${text}`;
  container.appendChild(line);
  container.scrollTop = container.scrollHeight;
}
