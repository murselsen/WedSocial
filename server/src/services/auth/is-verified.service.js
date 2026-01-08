import { ERROR_CODES } from "../../constants/index.js";
import { createAppError } from "../../utils/index.js";

const isVerified = (user) => {
  if (!user)
    throw createAppError(
      ERROR_CODES.VALIDATION.MISSING_FIELDS,
      "User object is required"
    );

  const result = user.isVerified;
  if (!result)
    throw createAppError(ERROR_CODES.AUTH.NOT_VERIFIED, "User is not verified");

  console.log("✅ | User is verified:", user.uid);
  return true;
};
export default isVerified;
