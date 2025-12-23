"use strict";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

// Middlewares
import {
  loggerMiddleware,
  notFoundMiddleware,
  serverErrorHandlerMiddleware,
} from "./middlewares/index.js";

// Routers
import { authRouter } from "./routers/index.js";

// Utils
import { env } from "./utils/index.js";

const PORT = env("PORT", 3000);

export const initServer = async () => {
  const app = express();

  app.use(express.json());
  app.use(cors());
  app.use(cookieParser());

  app.get("/", (req, res, next) => {
    try {
      res.status(200).json({
        success: true,
        status: 200,
        message: "Server is running...",
      });
    } catch (error) {
      next(error);
    }
  });

  app.use("/auth", authRouter);

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
