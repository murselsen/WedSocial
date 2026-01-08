// import createError from "http-errors";
import { ERROR_CODES } from "../constants/res-code.constant.js";
import Session from "../db/models/session.model.js";
import User from "../db/models/user.model.js";

import { createAppError } from "../utils/index.js";

const authenticateMiddleware = async (req, res, next) => {
  console.log("⚠️ | Inside authenticateMiddleware");
  try {
    // Authentication logic here
    if (!req.headers.authorization) {
      throw createAppError(
        ERROR_CODES.AUTH.AUTHORIZATION_HEADER_MISSING,
        "❌ | Authenticate Middleware | Authorization header missing"
      );
    }

    if (!req.headers.authorization.startsWith("Bearer ")) {
      throw createAppError(
        ERROR_CODES.AUTH.AUTHORIZATION_HEADER_FORMAT_INVALID,
        "Authenticate Middleware | Invalid authorization format"
      );
    }

    const token = req.headers.authorization.split(" ")[1];

    if (!token) {
      throw createAppError(
        ERROR_CODES.AUTH.TOKEN_MISSING,
        "Authenticate Middleware | Token missing"
      );
    }

    const session = await Session.findOne({
      accessToken: token,
    }).lean();

    if (!session) {
      throw createAppError(
        ERROR_CODES.AUTH.TOKEN_INVALID,
        "Authenticate Middleware | Invalid token"
      );
    }

    const isAccessTokenExpired =
      new Date() > new Date(session.accessTokenVaildUntil);

    if (isAccessTokenExpired) {
      throw createAppError(
        ERROR_CODES.AUTH.TOKEN_EXPIRED,
        "Authenticate Middleware | Token expired"
      );
    }

    const user = await User.findById(session.userId).lean();

    if (!user) {
      throw createAppError(401, "Authenticate Middleware | User not found");
    }

    console.log("✅ | Authentication Middleware | Successful");

    req.user = user;
    console.log("User:", req.user);
    req.session = session;
    console.log("Session:", req.session);

    next();
  } catch (error) {
    console.error("❌ | Error in Authenticate Middleware:\n", error);
    next(error);
  }
};

export default authenticateMiddleware;
