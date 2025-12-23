// Models
import User from "../../db/models/user.js";

const isUsernameTaken = async (payload) => {
  const { username } = payload;

  const existingUser = await User.findOne({
    username: username,
  });
  if (existingUser) {
    console.log(`Username "${username}" is already taken.`);
    return true;
  } else {
    console.log(`Username "${username}" is available.`);
    return false;
  }
};

export default isUsernameTaken;
// Compare this snippet from server/src/services/user/createUser.js:
