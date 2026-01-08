import { ERROR_CODES } from "../constants/index.js";
import { createAppError } from "../utils/index.js";
const notFoundMiddleware = (req, res, next) => {
  const statusCode = 404;

  const response = createAppError(
    ERROR_CODES.ROUTE.NOT_FOUND,
    `❌ | Not Found Middleware | Cannot find ${req.originalUrl} on this server`
  );

  res.status(statusCode).json(response);
};

export default notFoundMiddleware;
