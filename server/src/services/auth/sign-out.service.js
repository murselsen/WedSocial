import { getSessionById, deleteSession } from "../session/index.js";

import { isValidObjectId } from "mongoose";

import createError from "http-errors";
const signOut = async (sessionId) => {
  if (!sessionId || !isValidObjectId(sessionId)) {
    throw createError(400, "❌ | Sign Out Service | Invalid session ID ");
  }

  const session = await getSessionById(sessionId);

  await deleteSession(session._id);

  if (!sessionId) {
    throw createError(400, "Invalid session ID");
  }

  console.log("✅ | Sign Out Service | Session deleted successfully.");

  return Promise.resolve(true);
};

export default signOut;
