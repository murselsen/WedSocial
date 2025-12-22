// Express sunucu tanımlaması
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import Error from "http-errors";

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

  app.get("/", (req, res, next) => {
    console.log("Server is running...");
    next(
      new Error(
        501,
        "❌ | Server is not running... " + "Message 2 " + "Message 3"
      )
    );
    res.status(200).json({
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
