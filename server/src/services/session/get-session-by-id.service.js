import Session from "../../db/models/session.model.js";

import createError from "http-errors";

const getSessionById = async (id) => {
  // Simulated database call to get session by ID
  if (!id) {
    throw createError(
      400,
      "❌ | Session Get By ID Service | Invalid session ID"
    );
  }
  console.log("✅ | Session Get By ID Service | ID:", id);

  const session = await Session.findById(id);

  if (!session) {
    throw createError(
      404,
      "❌ | Session Get By ID Service | Session not found"
    );
  }
  console.log("✅ | Session Get By ID Service | Session found:", session);

  return session;
};

export default getSessionById;
