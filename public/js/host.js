import {
  appendChat,
  connectRoom,
  createSyncedPlayer,
} from "./player.js";

const setup = document.getElementById("setup");
const live = document.getElementById("live");
const createBtn = document.getElementById("create-room");
const roomCode = document.getElementById("room-code");
const roomPass = document.getElementById("room-pass");
const joinLink = document.getElementById("join-link");
const listenerCount = document.getElementById("listener-count");
const results = document.getElementById("results");
const queueEl = document.getElementById("queue");
const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");
const chat = document.getElementById("chat");
const chatForm = document.getElementById("chat-form");
const chatInput = document.getElementById("chat-input");
const playerContainer = document.getElementById("player");

/** @type {Array<{videoId:string,title:string,thumbnail:string}>} */
let queue = [];
let room = null;
let player = null;
let socket = null;
let displayName = "host";

createBtn?.addEventListener("click", async () => {
  createBtn.disabled = true;
  const res = await fetch("/api/rooms", { method: "POST" });
  if (!res.ok) {
    createBtn.disabled = false;
    alert("could not create room");
    return;
  }
  const data = await res.json();
  startRoom(data);
});

async function startRoom({ code, passcode, joinUrl }) {
  setup.hidden = true;
  live.hidden = false;
  roomCode.textContent = code;
  roomPass.textContent = passcode;
  joinLink.href = joinUrl;
  joinLink.textContent = joinUrl;

  player = await createSyncedPlayer(playerContainer, {
    onTick: (playback) => {
      socket?.send({ type: "playback", playback });
    },
  });

  socket = connectRoom({
    code,
    role: "host",
    onMessage: (msg) => {
      if (msg.type === "state") {
        room = msg.room;
        listenerCount.textContent = String(msg.room.listeners);
        renderQueue();
      }
      if (msg.type === "chat") {
        appendChat(chat, msg);
      }
    },
  });

  setInterval(() => player?.tick(), 1000);
}

searchForm?.addEventListener("submit", async (event) => {
  event.preventDefault();
  const q = searchInput.value.trim();
  if (!q) return;
  const res = await fetch(`/api/youtube/search?q=${encodeURIComponent(q)}`);
  const data = await res.json();
  results.innerHTML = "";
  for (const item of data.items ?? []) {
    const row = document.createElement("button");
    row.type = "button";
    row.className = "result";
    row.innerHTML = `<img src="${item.thumbnail}" alt="" /><span>${item.title}</span><span class="tag">play</span>`;
    row.addEventListener("click", () => playItem(item));
    results.appendChild(row);
  }
});

function playItem(item) {
  queue = [item, ...queue.filter((q) => q.videoId !== item.videoId)].slice(
    0,
    20,
  );
  renderQueue();
  player?.play(item);
  socket?.send({ type: "queue", queue });
}

function renderQueue() {
  queueEl.innerHTML = "";
  for (const item of queue) {
    const row = document.createElement("div");
    row.className = "result";
    row.innerHTML = `<img src="${item.thumbnail}" alt="" /><span>${item.title}</span>`;
    row.addEventListener("click", () => playItem(item));
    queueEl.appendChild(row);
  }
}

chatForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const text = chatInput.value.trim();
  if (!text) return;
  socket?.send({ type: "chat", text, name: displayName });
  appendChat(chat, { name: displayName, text });
  chatInput.value = "";
});
