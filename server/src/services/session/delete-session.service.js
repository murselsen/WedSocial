import { isValidObjectId } from "mongoose";

import Session from "../../db/models/session.model.js";

import { createAppError } from "../../utils/index.js";
import { ERROR_CODES } from "../../constants/index.js";
/**
 * Deletes a session from the database by its ID.
 * @async
 * @param {string} sessionId - The unique identifier of the session to delete.
 * @throws {Error} Throws a 400 error if sessionId is not provided or invalid.
 * @returns {Promise<void>} Resolves when the session is successfully deleted.
 */
const deleteSession = async (sessionId) => {
  if (!sessionId) {
    throw createAppError(
      ERROR_CODES.VALIDATION.INVALID_ID,
      "❌ | Session Delete Service | Invalid session ID"
    );
  }
  if (!isValidObjectId(sessionId)) {
    throw createAppError(
      ERROR_CODES.VALIDATION.INVALID_ID,
      "❌ | Session Delete Service | Invalid session ID format"
    );
  }
  await Session.findByIdAndDelete(sessionId);

  console.log(
    `✅ | Session Delete Service | Session ${sessionId} deleted successfully.`
  );
  return Promise.resolve(true);
};

export default deleteSession;
