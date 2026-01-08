// Services
import { isEmailTaken, getUserByEmail } from "../user/index.js";
import { createSession } from "../session/index.js";
// Utils
import { passwordCompare } from "../../utils/index.js";

import { createAppError } from "../../utils/index.js";
import { ERROR_CODES } from "../../constants/index.js";
/**
 * Authenticates a user by verifying their email and password credentials.
 * @async
 * @function signIn
 * @param {string} email - The user's email address
 * @param {string} password - The user's password
 * @returns {Promise<Object>} A promise that resolves with the authenticated user object or authentication token
 * @throws {Error} If authentication fails or credentials are invalid
 * @example
 * const result = await signIn('user@example.com', 'password123');
 */
const signIn = async (email, password) => {
  console.log(`Signing in user with email: ${email}`);
  const emailExists = await isEmailTaken(email);
  if (!emailExists) {
    throw createAppError(
      ERROR_CODES.AUTH.LOGIN_FAILED,
      "Authentication failed: Email not found."
    );
  }
  const user = await getUserByEmail(email);

  const isPasswordValid = passwordCompare(password, user.password);
  if (!isPasswordValid)
    throw createAppError(
      ERROR_CODES.AUTH.LOGIN_FAILED,
      "Authentication failed: Incorrect password."
    );

  const session = await createSession(user._id);

  await user.updateOne({
    lastLoginAt: Date.now(),
  });

  return {
    uid: user._id.toString(),
    username: user.username,
    email: user.email,
    isVerified: user.isVerified,
    providerData: user,
    stsTokenManager: {
      sessionId: session._id.toString(),
      accessToken: session.accessToken,
      refreshToken: session.refreshToken,
      expirationTime: session.accessTokenVaildUntil,
    },
    lastLoginAt: user.lastLoginAt,
    createdAt: session.createdAt,
  };
};
export default signIn;
