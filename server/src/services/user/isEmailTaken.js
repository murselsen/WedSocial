// Models
import User from "../../db/models/user.js";

const isEmailTaken = async (payload) => {
  const { email } = payload;

  const existingUser = await User.findOne({
    email: email,
  });
  if (existingUser) {
    console.log(`Email "${email}" is already taken.`);
    return true;
  } else {
    console.log(`Email "${email}" is available.`);
    return false;
  }
};

export default isEmailTaken;
// Compare this snippet from server/src/services/user/createUser.js:
