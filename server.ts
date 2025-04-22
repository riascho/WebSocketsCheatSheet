import WebSocket, { WebSocketServer } from "ws"; // https://www.npmjs.com/package/ws

const wss = new WebSocketServer({ port: 8080 });
console.log("Websocket server started on http://127.0.0.1:3000/client.html");

wss.on("connection", (ws: WebSocket) => {
  console.log("Client connected"); // logging in node.js console
  ws.send("Websocket was opened!");

  ws.on("message", (message: WebSocket.RawData) => {
    console.log("Received message from client:", message.toString());
    ws.send("Server says ok.");
  });

  ws.on("close", () => {
    console.log("Client disconnected");
    // wss.close(); // closes entire websocket (when one client disconnects!)
  });
});
