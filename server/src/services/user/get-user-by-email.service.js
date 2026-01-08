import User from "../../db/models/user.model.js";

// Errors
import { createAppError } from "../../utils/index.js";
import { ERROR_CODES } from "../../constants/index.js";

const getUserByEmail = async (email) => {
  const user = await User.findOne({
    email: email,
  });
  if (!user) {
    throw createAppError(
      ERROR_CODES.USER.NOT_FOUND,
      "User not found with the provided email."
    );
  }

  return user;
};

export default getUserByEmail;
