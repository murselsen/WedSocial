// Models
import User from "../../db/models/user.model.js";

/**
 * Checks if an email address is already taken in the database.
 * @async
 * @param {string} email - The email address to check.
 * @returns {Promise<boolean>} Returns true if the email is already taken, false if it's available.
 */
const isEmailTaken = async (email) => {
  const payload = email;
  const existingUser = await User.findOne({
    email: payload,
  });
  if (existingUser) {
    console.log(`Email "${payload}" is already taken.`);
    return true;
  } else {
    console.log(`Email "${payload}" is available.`);
    return false;
  }
};

export default isEmailTaken;
