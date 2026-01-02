import { createUser } from "../user/index.js";

const signUp = async (userPayload) => {
  return await createUser(userPayload);
};

export default signUp;
