import crypto from "crypto";
import createError from "http-errors";
const createCryptoToken = () => {
  const length = 30;
  const charset = "base64";

  const codeToken = crypto.randomBytes(length).toString(charset);
  if (!codeToken) {
    throw createError(401, "Failed to generate crypto token");
  }
  return codeToken;
};

export default createCryptoToken;
