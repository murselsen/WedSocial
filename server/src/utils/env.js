import dotenv from "dotenv";
import createAppError from "./create-app-error.util.js";
import { ERROR_CODES } from "../constants/index.js";
dotenv.config();

/**
 * Retrieves an environment variable value by key, with optional default value.
 *
 * @param {string} key - The name of the environment variable to retrieve
 * @param {string} [defaultValue=""] - The default value to return if the environment variable is not set
 * @returns {string} The value of the environment variable, or the default value if not found
 * @throws {Error} Throws an error if the environment variable is not set and no default value is provided
 * @example
 * // Returns the value of PORT or throws an error
 * const port = env('PORT');
 *
 * @example
 * // Returns the value of PORT or '3000' if not set
 * const port = env('PORT', '3000');
 */
const env = (key, defaultValue = "") => {
  const value = process.env[key];

  if (value) return value;

  if (defaultValue) return defaultValue;

  throw new Error("Missing : process.env[" + key + "] must be a string");
};

export default env;
