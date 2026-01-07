import createError from "http-errors";

import Session from "../db/models/session.model.js";
import User from "../db/models/user.model.js";

const authenticateMiddleware = async (req, res, next) => {
  console.log("⚠️ | Inside authenticateMiddleware");
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
      throw createError(401, "Authenticate Middleware | Token missing");
    }

    const session = await Session.findOne({
      accessToken: token,
    }).lean();

    if (!session) {
      throw createError(401, "Authenticate Middleware | Invalid token");
    }

    const isAccessTokenExpired =
      new Date(session.refreshTokenVaildUntil) < new Date();

    if (isAccessTokenExpired) {
      throw createError(401, "Authenticate Middleware | Token expired");
    }

    const user = await User.findById(session.userId).lean();

    if (!user) {
      throw createError(401, "Authenticate Middleware | User not found");
    }

    console.log("✅ | Authentication Middleware | Successful");

    req.user = user;
    console.log("User:", req.user);
    req.session = session;
    console.log("Session:", req.session);

    next();
  } catch (error) {
    console.error("❌ | Error in Authenticate Middleware:", error);
    next(error);
  }
};

export default authenticateMiddleware;
