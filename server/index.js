// Uygulama giriş noktası
import { initServer } from "./src/server.js";
import initMongoDbConnection from "./src/db/initMongoDbConnection.js";
console.clear();
const startServer = async () => {
  await initMongoDbConnection();
  await initServer();
};
try {
} catch (error) {
  console.error("Error initializing server:", error);
}
