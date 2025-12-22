import dotenv from "dotenv";

dotenv.config();

const env = (key, defaultValue = "") => {
  const value = process.env[key];

  if (value) return value;

  if (defaultValue) return defaultValue;

  throw new Error("Missing : process.env[" + key + "] must be a string");
};

export default env;
