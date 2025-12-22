// Express sunucu tanımlaması
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import createHttpError from "http-errors";

// Middlewares
import {
  loggerMiddleware,
  notFoundMiddleware,
  serverErrorHandlerMiddleware,
} from "./middlewares/index.js";

// Utils
import { env } from "./utils/index.js";
import { create } from "domain";

const PORT = env("PORT", 3000);

export const initServer = async () => {
  const app = express();

  app.use(express.json());
  app.use(cors());
  app.use(cookieParser());

  app.get("/", (req, res, next) => {
    try {
      console.log("✅ | Root endpoint accessed");

      res.status(200).json({
        success: true,
        status: 200,
        message: "Server is running...",
      });
    } catch (error) {
      next(error);
    }
  });

  app.use(loggerMiddleware);
  app.use(notFoundMiddleware);
  app.use(serverErrorHandlerMiddleware);

  app.listen(PORT, (err) => {
    if (err) {
      console.error("Failed to start server:", err);
    } else {
      console.log(`✅ | Server is running on url http://localhost:${PORT}`);
    }
  });

  return app;
};
