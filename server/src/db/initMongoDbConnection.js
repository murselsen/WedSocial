import { connect } from "mongoose";

import { env } from "../utils/index.js";

const initMongoDbConnection = async (req, res, next) => {
  const dbConfiguration = {
    MONGO_USER: env("MONGO_USER"),
    MONGO_PASSWORD: env("MONGO_PASSWORD"),
    MONGO_URL: env("MONGO_URL"),
    MONGO_DB: env("MONGO_DB"),
  };
  const mongoDbUri = `mongodb+srv://${dbConfiguration.MONGO_USER}:${dbConfiguration.MONGO_PASSWORD}@${dbConfiguration.MONGO_URL}/${dbConfiguration.MONGO_DB}?retryWrites=true&w=majority`;

  try {
    await connect(mongoDbUri);
    console.log("✅ | MongoDB connection established successfully");
  } catch (error) {
    console.error("❌ | Failed to connect to MongoDB:", error);
  }
};

export default initMongoDbConnection;
