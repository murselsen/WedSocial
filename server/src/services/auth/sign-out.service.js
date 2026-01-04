import { getSessionById, deleteSession } from "../session/index.js";

import { isValidObjectId } from "mongoose";

import createError from "http-errors";
const signOut = async (sessionId) => {
  if (!sessionId) {
    throw createError(400, "❌ | Sign Out Service | Invalid session ID");
  }

  if (!isValidObjectId(sessionId)) {
    throw createError(400, "❌ | Sign Out Service | Invalid session ID format");
  }

  const session = await getSessionById(sessionId);

  await deleteSession(session._id);

  if (!sessionId) {
    throw createError(400, "Invalid session ID");
  }

  const checkSession = await getSessionById(sessionId);
  if (!checkSession) {
    // Silinme başarısız olduysa hata fırlat
    throw createError(
      500,
      "❌ | Sign Out Service | The session deletion process failed."
    );
  }

  console.log("✅ | Sign Out Service | Session deleted successfully.");

  return Promise.resolve(true);
};

export default signOut;
