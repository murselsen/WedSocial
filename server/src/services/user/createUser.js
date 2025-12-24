import User from "../../db/models/user.js";
// Contants
import { ErrorCodes } from "../../constants/index.js";

// Errors
import createError from "http-errors";

// User Services
import isEmailTaken from "./isEmailTaken.js";
import isUsernameTaken from "./isUsernameTaken.js";

// Utils
import { passwordHash } from "../../utils/index.js";

// Sign up - create user services

/**
 * Creates a new user with the provided payload.
 * @async
 * @function createUser
 * @param {Object} payload - The user data for creating a new user
 * @param {string} payload.email - The email address of the user
 * @returns {Promise<Object>} The newly created user object
 * @throws {Error} 409 - If a user with the provided email already exists
 * @throws {Error} 500 - If there is an error creating the user in the database
 */
const createUser = async (payload) => {
  const { email, username } = payload;
  const existsByEmail = await isEmailTaken(email);
  if (existsByEmail)
    throw createError(
      ErrorCodes.HTTP_STATUS_CODES.CONFLICT,
      "Email is already in use"
    );

  const existsByUsername = await isUsernameTaken(username);
  if (existsByUsername)
    throw createError(
      ErrorCodes.HTTP_STATUS_CODES.CONFLICT,
      "Username is already in use"
    );

  const hashedPassword = await passwordHash(payload.password);
  if (!hashedPassword) throw createError(500, "Error hashing password");

  payload.password = hashedPassword;

  const newUser = await User.create(payload);
  if (!newUser) throw createError(500, "Error creating user");

  return newUser;
};

export default createUser;
