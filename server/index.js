// Uygulama giriş noktası
import { initServer } from "./src/server.js";
import initMongoDbConnection from "./src/db/init-mongo-db-connection.js";
console.clear();

const startServer = async () => {
  await initMongoDbConnection();
  await initServer();
};

try {
  await startServer();
} catch (error) {
  console.error("Error initializing server:", error);
}
