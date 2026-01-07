import createError from "http-errors";

import Session from "../db/models/session.model.js";

const authenticateMiddleware = (req, res, next) => {
  console.log("Inside authenticateMiddleware");
  try {
    // Authentication logic here
    if (!req.headers.authorization) {
      throw createError(
        401,
        "❌ | Authenticate Middleware | Authorization header missing"
      );
    }

    if (!req.headers.authorization.startsWith("Bearer ")) {
      throw createError(
        401,
        "Authenticate Middleware",
        "Invalid authorization format"
      );
    }

    const token = req.headers.authorization.split(" ")[1];

    if (!token) {
      throw createError(401, "❌ | Authenticate Middleware | Token missing");
    }

    console.log("✅ | Authentication successful");
    
    next();
  } catch (error) {
    next(error);
  }
};

export default authenticateMiddleware;
