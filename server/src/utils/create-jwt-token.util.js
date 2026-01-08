import jwt from "jsonwebtoken";

import env from "./env.js";

import createAppError from "./create-app-error.util.js";
import { ERROR_CODES } from "../constants/index.js";

const createJwtToken = (payload, expiresIn = "1h") => {
  const token = jwt.sign(payload, env("JWT_SECRET"), {
    expiresIn: expiresIn,
  });

  if (!token) {
    throw createAppError(
      ERROR_CODES.UTIL.INVALID_TOKEN_GENERATION,
      "Create Token failed: Unable to generate token"
    );
  }

  return token;
};

export default createJwtToken;
