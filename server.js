import { WebSocketServer, WebSocket } from "ws";

// Initializing the simple WebSocket Server
const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", (socket, request) => {
  const ip = request.socket.remoteAddress;

  socket.on("message", (rawData) => {
    const message = rawData.toString();
    console.log({ rawData });

    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN)
        client.send(`Server BroadCast: ${message}`);
    });
  });

  socket.on("error", (error) => {
    console.error(`Error: ${error}: ${ip}`);
  });

  socket.on("close", () => {
    console.log("Client Disconnected");
  });
});

console.log("WebSocket Server is live on: ws://localhost:8080");
