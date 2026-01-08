import Session from "../../db/models/session.model.js";
import { Times, ERROR_CODES } from "../../constants/index.js";
import { createAppError, createCryptoToken } from "../../utils/index.js";

import deleteSession from "./delete-session.service.js";

/**
 * Creates a new session for a user with access and refresh tokens.
 * Deletes any existing sessions for the user before creating a new one.
 *
 * @param {string} userId - The unique identifier of the user
 * @returns {Promise<Object>} A promise that resolves to the newly created session object
 * @throws {Error} If session creation fails
 */
const createSession = async (userId) => {
  if (
    !userId 
  ) {
    throw createAppError(
      ERROR_CODES.VALIDATION.INVALID_ID,
      "❌ | Create Session Service | Invalid user ID"
    );
  }
  // accessToken ve refreshToken oluştur
  const accessToken = createCryptoToken();
  const refreshToken = createCryptoToken();

  // Access ve Refresh token geçerlilik sürelerini ayarla
  const accessTokenVaildUntil = new Date(Date.now() + Times.FIFTEEN_MINUTES);
  const refreshTokenVaildUntil = new Date(Date.now() + Times.ONE_WEEK);

  await deleteSession(userId);

  const newSession = Session.create({
    userId,
    accessToken,
    refreshToken,
    accessTokenVaildUntil,
    refreshTokenVaildUntil,
  });

  return newSession;
};

export default createSession;
