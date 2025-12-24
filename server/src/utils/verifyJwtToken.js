import jwt from "jsonwebtoken";
import env from "./env.js";
import createError from "http-errors";
const verifyToken = (token) => {
  const isVerified = jwt.verify(token, env("JWT_SECRET"));

  if (!isVerified) {
    throw createError(401, "Verify Token failed: Invalid token");
  }

  return isVerified;
};

export default verifyToken;
