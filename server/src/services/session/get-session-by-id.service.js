import Session from "../../db/models/session.model.js";

import createError from "http-errors";

const getSessionById = async (_id) => {
  // Simulated database call to get session by ID
  if (!_id) {
    throw createError(
      400,
      "❌ | Session Get By ID Service | Invalid session ID"
    );
  }
  console.log("✅ | Session Get By ID Service | ID:", _id);

  const session = await Session.findById(_id).lean();

  console.log("✅ | Session Get By ID Service | Session found:", session);

  if (!session) {
    throw createError(
      404,
      "❌ | Session Get By ID Service | Session not found"
    );
  }

  return session;
};

export default getSessionById;
