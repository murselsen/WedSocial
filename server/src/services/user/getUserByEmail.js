import createError from "http-errors";
import User from "../../db/models/user.js";

const getUserByEmail = async (email) => {
  console.log(`Fetching user by email: ${email}`);

  const user = await User.findOne({
    email: email,
  });
  if (!user) {
    throw createError(404, "User not found with the provided email.");
  }

  return user;
};

export default getUserByEmail;
