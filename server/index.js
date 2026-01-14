// Uygulama giriş noktası
import { initServer } from "./src/server.js";
import initMongoDbConnection from "./src/db/init-mongo-db-connection.js";
import ServerlessHttp from "serverless-http";

console.clear();

const startServer = async () => {
  await initMongoDbConnection();
  const server = await initServer();
  return ServerlessHttp(server);
};

try {
  await startServer();
} catch (error) {
  console.error("Error initializing server:", error);
}
