import jwt from "jsonwebtoken";
import env from "./env.js";

import createAppError from "./create-app-error.util.js";
import { ERROR_CODES } from "../constants/index.js";

const verifyToken = (token) => {
  const isVerified = jwt.verify(token, env("JWT_SECRET"));

  if (!isVerified) {
    throw createAppError(
      ERROR_CODES.UTIL.INVALID_TOKEN_VERIFICATION,
      "Verify Token failed: Invalid token"
    );
  }

  return isVerified;
};

export default verifyToken;
