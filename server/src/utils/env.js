import dotenv from "dotenv";

dotenv.config();

const env = (key, defaultValue) => {
  const processValue = process.env[key];

  if (processValue) return processValue;

  if (defaultValue) return defaultValue;

  throw new Error("Missing : process.env[" + key + "] must be a string");
};

export default env;
