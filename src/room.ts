import type {
  PlaybackState,
  QueueItem,
  RoomSnapshot,
  WsClientMessage,
  WsServerMessage,
} from "./types";

export type RoomEnv = {
  SESSION_SECRET: string;
};

type StoredRoom = {
  code: string;
  passcode: string;
  hostId: string;
  hostName: string;
  playback: PlaybackState;
  queue: QueueItem[];
};

const emptyPlayback = (): PlaybackState => ({
  videoId: null,
  title: "",
  thumbnail: "",
  playing: false,
  positionSec: 0,
  updatedAt: Date.now(),
});

export class Room implements DurableObject {
  private room: StoredRoom | null = null;
  private sockets = new Map<WebSocket, "host" | "listener">();

  constructor(
    private state: DurableObjectState,
    private env: RoomEnv,
  ) {}

  async fetch(request: Request): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === "/init" && request.method === "POST") {
      return this.handleInit(request);
    }

    if (url.pathname === "/snapshot" && request.method === "GET") {
      return Response.json(this.snapshot());
    }

    if (
      request.headers.get("Upgrade")?.toLowerCase() === "websocket" ||
      url.pathname === "/ws"
    ) {
      return this.handleWebSocket(request, url);
    }

    return new Response("not found", { status: 404 });
  }

  private async handleInit(request: Request): Promise<Response> {
    if (!this.verifyInternal(request)) {
      return new Response("forbidden", { status: 403 });
    }

    const body = (await request.json()) as StoredRoom;
    this.room = {
      ...body,
      playback: body.playback ?? emptyPlayback(),
      queue: body.queue ?? [],
    };
    await this.state.storage.put("room", this.room);
    return Response.json({ ok: true });
  }

  private async handleWebSocket(
    request: Request,
    url: URL,
  ): Promise<Response> {
    await this.loadRoom();

    if (!this.room) {
      return new Response("room not found", { status: 404 });
    }

    const role = url.searchParams.get("role");
    const passcode = url.searchParams.get("passcode") ?? "";
    const hostId = request.headers.get("X-Host-Id") ?? "";

    if (role === "host") {
      if (hostId !== this.room.hostId) {
        return new Response("forbidden", { status: 403 });
      }
    } else if (role === "listener") {
      if (passcode !== this.room.passcode) {
        return new Response("forbidden", { status: 403 });
      }
    } else {
      return new Response("bad role", { status: 400 });
    }

    const pair = new WebSocketPair();
    const [client, server] = Object.values(pair);
    server.accept();

    const socketRole = role as "host" | "listener";
    this.sockets.set(server, socketRole);

    server.send(JSON.stringify(this.stateMessage()));

    server.addEventListener("message", (event) => {
      this.onMessage(server, event.data);
    });

    server.addEventListener("close", () => {
      this.sockets.delete(server);
      this.broadcastState();
    });

    server.addEventListener("error", () => {
      this.sockets.delete(server);
    });

    return new Response(null, { status: 101, webSocket: client });
  }

  private async loadRoom(): Promise<void> {
    if (this.room) return;
    this.room = (await this.state.storage.get<StoredRoom>("room")) ?? null;
  }

  private verifyInternal(request: Request): boolean {
    const token = request.headers.get("X-Soundmob-Internal");
    return Boolean(token && token === this.env.SESSION_SECRET);
  }

  private snapshot(): RoomSnapshot | { error: string } {
    if (!this.room) return { error: "not_initialized" };
    let listeners = 0;
    for (const role of this.sockets.values()) {
      if (role === "listener") listeners += 1;
    }
    return {
      code: this.room.code,
      hostName: this.room.hostName,
      playback: this.room.playback,
      queue: this.room.queue,
      listeners,
    };
  }

  private stateMessage(): WsServerMessage {
    const snap = this.snapshot();
    if ("error" in snap) {
      return { type: "error", message: snap.error };
    }
    return { type: "state", room: snap };
  }

  private broadcast(message: WsServerMessage, except?: WebSocket): void {
    const payload = JSON.stringify(message);
    for (const [socket] of this.sockets) {
      if (socket === except) continue;
      try {
        socket.send(payload);
      } catch {
        this.sockets.delete(socket);
      }
    }
  }

  private broadcastState(): void {
    this.broadcast(this.stateMessage());
  }

  private onMessage(socket: WebSocket, raw: unknown): void {
    if (!this.room) return;

    let message: WsClientMessage;
    try {
      message = JSON.parse(String(raw)) as WsClientMessage;
    } catch {
      return;
    }

    const role = this.sockets.get(socket);
    if (!role) return;

    if (message.type === "ping") {
      socket.send(JSON.stringify({ type: "pong" } satisfies WsServerMessage));
      return;
    }

    if (message.type === "chat") {
      const text = message.text.trim().slice(0, 500);
      const name = message.name.trim().slice(0, 64) || "anon";
      if (!text) return;
      this.broadcast({
        type: "chat",
        text,
        name,
        at: Date.now(),
      });
      return;
    }

    if (role !== "host") return;

    if (message.type === "playback") {
      this.room.playback = message.playback;
      void this.state.storage.put("room", this.room);
      this.broadcast(this.stateMessage(), socket);
      return;
    }

    if (message.type === "queue") {
      this.room.queue = message.queue.slice(0, 50);
      void this.state.storage.put("room", this.room);
      this.broadcast(this.stateMessage(), socket);
    }
  }
}
