// Modules
import { isValidObjectId } from "mongoose";

// Errors
import { ERROR_CODES } from "../../constants/index.js";
import { createAppError } from "../../utils/index.js";

// Services
import isRefreshTokenActive from "./is-refresh-token-active.service.js";
import deleteSession from "./delete-session.service.js";
import getSessionById from "./get-session-by-id.service.js";
import createSession from "./create-session.service.js";

const reloadSession = async (sessionId) => {
  if (
    !sessionId ||
    typeof sessionId !== "string" ||
    !isValidObjectId(sessionId)
  ) {
    throw createAppError(
      ERROR_CODES.VALIDATION.INVALID_ID,
      "❌ | Reload Session Service | Invalid session ID"
    );
  }

  const isActive = await isRefreshTokenActive(sessionId);

  if (!isActive) {
    return Promise.resolve(false);
  }

  const sessionData = await getSessionById(sessionId);

  const userId = sessionData.userId;

  await deleteSession(sessionId);

  const newSession = await createSession(userId);

  return Promise.resolve(newSession);
};

export default reloadSession;
