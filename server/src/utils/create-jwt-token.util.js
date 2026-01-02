import jwt from "jsonwebtoken";

import env from "./env.js";

import createError from "http-errors";

const createJwtToken = (payload, expiresIn = "1h") => {
  const token = jwt.sign(payload, env("JWT_SECRET"), {
    expiresIn: expiresIn,
  });

  if (!token) {
    throw createError(401, "Create Token failed: Unable to generate token");
  }

  return token;
};

export default createJwtToken;
