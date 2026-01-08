import Session from "../../db/models/session.model.js";
import { createAppError } from "../../utils/index.js";
import { ERROR_CODES } from "../../constants/index.js";

const isRefreshTokenActive = async (sessionId) => {
  if (!sessionId) {
    throw createAppError(
      ERROR_CODES.VALIDATION.INVALID_ID,
      "❌ | Is Refresh Token Active Service | Invalid session ID"
    );
  }

  const session = await Session.findById(sessionId);

  if (!session) {
    throw createAppError(
      ERROR_CODES.SESSION.NOT_FOUND,
      "❌ | Is Refresh Token Active Service | Session not found"
    );
  }
  const now = new Date();
  const isActive = session.refreshTokenVaildUntil > now;

  console.log(
    `${isActive ? "✅" : "❌"} | Is Refresh Token Active Service | Token is ${
      isActive ? "active" : "expired"
    }`
  );

  return isActive;
};

export default isRefreshTokenActive;
