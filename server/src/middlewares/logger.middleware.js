import morgan from "morgan";

import fs from "fs";
import path from "path";

const loggerMiddleware = (req, res, next) => {
  const logger = morgan("combined", {
    stream: fs.createWriteStream(
      path.join(process.cwd(), "src", "logs", "server.log"),
      { flags: "a", encoding: "utf8" }
    ),
  });
  logger(req, res, next);
};

export default loggerMiddleware;
