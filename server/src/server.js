// Express sunucu tanımlaması
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

// Middlewares
import {
  notFoundMiddleware,
  serverErrorHandlerMiddleware,
} from "./middlewares/index.js";

// Utils
import { env } from "./utils/index.js";

const PORT = env("PORT", 3000);

export const initServer = () => {
  const app = express();
  app.use(express.json());
  app.use(cors());
  app.use(cookieParser());

  app.use((req, res, next) => {
    console.log(req.statusCode);
    console.log(`[${req.method}] - [${req.headers.statusCode}]: ${req.url}`);
    next();
  });
  app.get("/", (req, res, next) => {
    res.status(200).json({
      success: true,
      status: 200,

      message: "Server is running...",
    });
  });

  app.use(notFoundMiddleware);
  app.use(serverErrorHandlerMiddleware);

  app.listen(PORT, (err) => {
    if (err) {
      console.error("Failed to start server:", err);
    } else {
      console.log(`✅ | Server is running on url http://localhost:${PORT}`);
    }
  });
};
