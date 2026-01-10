import User from "../../db//models/user.model.js";

import { createAppError } from "../../utils/index.js";
import { ERROR_CODES } from "../../constants/index.js";

const deleteUser = async (id) => {
  if (!id) {
    throw createAppError(
      ERROR_CODES.VALIDATION.INVALID_ID,
      "❌ | Delete User Service | Invalid user ID"
    );
  }

  await User.findByIdAndDelete(id);
};
export default deleteUser;
