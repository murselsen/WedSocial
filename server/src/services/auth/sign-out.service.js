import { getSessionById, deleteSession } from "../session/index.js";

import { isValidObjectId } from "mongoose";

import { createAppError } from "../../utils/index.js";
import { ERROR_CODES } from "../../constants/index.js";

const signOut = async (sessionId) => {
  if (!sessionId || !isValidObjectId(sessionId)) {
    throw createAppError(ERROR_CODES.VALIDATION.INVALID_ID, "❌ | Sign Out Service | Invalid session ID ");
  }

  const session = await getSessionById(sessionId);

  await deleteSession(session._id);

  console.log("✅ | Sign Out Service | Session deleted successfully.");

  return Promise.resolve(true);
};

export default signOut;
