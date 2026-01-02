import createError from "http-errors";
import { Times } from "../constants/index.js";

/**
 * Creates an HTTP cookie with the specified key-value pair and security settings.
 *
 * @async
 * @param {Object} res - Express response object used to set the cookie
 * @param {string} key - The name of the cookie
 * @param {*} value - The value to be stored in the cookie
 * @returns {Promise<Object>} The response object with the cookie set
 * @throws {Error} Logs error to console if cookie creation fails
 *
 * @description
 * Sets a cookie with the following characteristics:
 * - httpOnly: true (prevents client-side JavaScript access)
 * - expires: 24 hours from creation time
 * - secure: enabled in production environment only
 */
const createCookie = async (res, key, value) => {
  console.log(
    `✅ Cookie key: "${key}" with value: "${value}" created successfully.`
  );
  return res.cookie(key, value, {
    httpOnly: true,
    expires: new Date(Date.now() + Times.ONE_DAY),
    secure: process.env.NODE_ENV === "production",
  });
};
export default createCookie;
