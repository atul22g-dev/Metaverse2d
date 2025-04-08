import { WebSocketServer } from "ws";
import { User } from "./User";

const PORT = 3002;
const wss = new WebSocketServer({ port: PORT });

console.log(`WebSocket server running on port ${PORT}`);

wss.on("connection", function connection(ws) {
  let user = new User(ws);
  ws.on("error", console.error);

  ws.on("close", () => {
    user?.destroy();
  });
});
