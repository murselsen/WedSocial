// Services
import { isEmailTaken, getUserByEmail } from "../user/index.js";

// Utils
import { passwordCompare, passwordHash } from "../../utils/index.js";
import createError from "http-errors";

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
    throw createError(401, "Authentication failed: Email not found.");
  }
  console.log("✅ Email exists. Proceeding with password verification...");
  const user = await getUserByEmail(email);

  const isPasswordValid = passwordCompare(password, user.password);
  if (!isPasswordValid)
    throw createError(401, "Authentication failed: Incorrect password.");

  console.log("✅ Password verified successfully.");
  return true;
};
export default signIn;
