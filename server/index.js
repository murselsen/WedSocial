// Uygulama giriş noktası
import { initServer } from "./src/server.js";
console.clear();
try {
  console.log("Server is starting...");
  initServer();
} catch (error) {
  console.error("Error initializing server:", error);
}
