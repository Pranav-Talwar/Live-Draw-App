// server.js
import { WebSocketServer } from "ws";

// Start WebSocket server on port 8080
const wss = new WebSocketServer({ port: 8081 });
console.log("✅ WebSocket server started on ws://localhost:8080");

wss.on("connection", (ws) => {
  console.log("🔗 New client connected");

  // Send a welcome message to the client
  ws.send("Welcome to the WebSocket server!");

  // When client sends a message
  ws.on("message", (data) => {
    console.log(`📩 Received: ${data}`);
    ws.send(`Echo: ${data}`);
  });

  // Handle client disconnect
  ws.on("close", () => {
    console.log("❌ Client disconnected");
  });
});
