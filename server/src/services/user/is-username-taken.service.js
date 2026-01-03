// Models
import User from "../../db/models/user.model.js";

/**
 * Checks if a username is already taken in the database.
 * @async
 * @param {string} username - The username to check for availability
 * @returns {Promise<boolean>} Returns true if the username is taken, false if available
 * @throws {Error} May throw an error if the database query fails
 * @example
 * const isTaken = await isUsernameTaken('john_doe');
 * if (isTaken) {
 *   console.log('Username is already in use');
 * }
 */
const isUsernameTaken = async (username) => {
  const payload = username;
  const existingUser = await User.findOne({
    username: payload,
  });
  if (existingUser) {
    console.log(`Username "${payload}" is already taken.`);
    return true;
  } else {
    console.log(`Username "${payload}" is available.`);
    return false;
  }
};

export default isUsernameTaken;
// Compare this snippet from server/src/services/user/createUser.js:
