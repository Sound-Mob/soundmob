import {
  appendChat,
  connectRoom,
  createSyncedPlayer,
} from "./player.js";

const joinForm = document.getElementById("join-form");
const joinError = document.getElementById("join-error");
const roomSection = document.getElementById("room");
const hostName = document.getElementById("host-name");
const listenerCount = document.getElementById("listener-count");
const nowPlaying = document.getElementById("now-playing");
const playerContainer = document.getElementById("player");
const chat = document.getElementById("chat");
const chatForm = document.getElementById("chat-form");
const chatInput = document.getElementById("chat-input");

let socket = null;
let player = null;
let displayName = "listener";

joinForm?.addEventListener("submit", async (event) => {
  event.preventDefault();
  joinError.hidden = true;

  const code = document.getElementById("code").value.trim().toUpperCase();
  const passcode = document.getElementById("passcode").value.trim();
  displayName =
    document.getElementById("name").value.trim() || `listener-${code.slice(-3)}`;

  player = await createSyncedPlayer(playerContainer, {});

  socket = connectRoom({
    code,
    role: "listener",
    passcode,
    onMessage: (msg) => {
      if (msg.type === "error") {
        joinError.textContent = msg.message;
        joinError.hidden = false;
        return;
      }
      if (msg.type === "state") {
        joinForm.hidden = true;
        roomSection.hidden = false;
        hostName.textContent = msg.room.hostName;
        listenerCount.textContent = String(msg.room.listeners);
        if (msg.room.playback.videoId) {
          nowPlaying.textContent = msg.room.playback.title || msg.room.playback.videoId;
          player.apply(msg.room.playback);
        }
      }
      if (msg.type === "chat") {
        appendChat(chat, msg);
      }
    },
  });

  socket.ws.addEventListener("close", () => {
    joinError.textContent = "disconnected";
    joinError.hidden = false;
  });

  socket.ws.addEventListener("error", () => {
    joinError.textContent = "could not connect — check code and passcode";
    joinError.hidden = false;
  });
});

chatForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const text = chatInput.value.trim();
  if (!text) return;
  socket?.send({ type: "chat", text, name: displayName });
  chatInput.value = "";
});
