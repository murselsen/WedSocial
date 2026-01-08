import crypto from "crypto";

import createAppError from "./create-app-error.util.js";
import { ERROR_CODES } from "../constants/index.js";

const createCryptoToken = () => {
  const length = 30;
  const charset = "base64";

  const codeToken = crypto.randomBytes(length).toString(charset);
  if (!codeToken) {
    throw createAppError(
      ERROR_CODES.UTIL.INVALID_TOKEN_GENERATION,
      "Failed to generate crypto token"
    );
  }
  return codeToken;
};

export default createCryptoToken;
