import Session from "../../db/models/session.model.js";

import { createAppError } from "../../utils/index.js";
import { ERROR_CODES } from "../../constants/index.js";

/**
 * Retrieves a session from the database by its unique identifier.
 * @async
 * @function getSessionById
 * @param {string} id - The unique identifier of the session to retrieve.
 * @returns {Promise<Object>} The session object if found.
 * @throws {AppError} Throws VALIDATION.INVALID_ID error if the id is not provided.
 * @throws {AppError} Throws SESSION.NOT_FOUND error if no session exists with the given id.
 */
const getSessionById = async (id) => {
  // Simulated database call to get session by ID
  if (!id) {
    throw createAppError(
      ERROR_CODES.VALIDATION.INVALID_ID,
      "❌ | Session Get By ID Service | Invalid session ID"
    );
  }
  console.log("✅ | Session Get By ID Service | ID:", id);

  const session = await Session.findById(id);

  if (!session) {
    throw createAppError(
      ERROR_CODES.SESSION.NOT_FOUND,
      "❌ | Session Get By ID Service | Session not found"
    );
  }
  console.log("✅ | Session Get By ID Service | Session found:", session);

  return session;
};

export default getSessionById;
