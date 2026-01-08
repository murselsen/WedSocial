import User from "../../db/models/user.model.js";

// Errors
import { createAppError } from "../../utils/index.js";
import { ERROR_CODES } from "../../constants/index.js";

// User Services
import isEmailTaken from "./is-email-taken.service.js";
import isUsernameTaken from "./is-username-taken.service.js";

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
    throw createAppError(
      ERROR_CODES.USER.ALREADY_EXISTS,
      "Email is already in use"
    );

  const existsByUsername = await isUsernameTaken(username);
  if (existsByUsername)
    throw createAppError(
      ERROR_CODES.USER.ALREADY_EXISTS,
      "Username is already in use"
    );

  const hashedPassword = await passwordHash(payload.password);
  if (!hashedPassword)
    throw createAppError(
      ERROR_CODES.USER.HASHING_FAILED,
      "Error hashing password"
    );

  payload.password = hashedPassword;

  const newUser = await User.create(payload);
  if (!newUser)
    throw createAppError(ERROR_CODES.USER.CREATE_FAILED, "Error creating user");

  return newUser;
};

export default createUser;
