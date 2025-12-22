import { ErrorCodes } from "../constants/index.js";
import httpErrors from "http-errors";

const serverErrorHandlerMiddleware = (err, req, res) => {
  if (httpErrors.isHttpError(err)) {
    err.statusCode = err.statusCode || 500;
    err.errorCode = err.name || "INTERNAL_SERVER_ERROR";

    const response = {
      success: false,
      status: err.statusCode,
      errorCode: err.errorCode,
      message: err.message || "Server Error",
    };

    res.status(err.statusCode).json(response);
  }
};

export default serverErrorHandlerMiddleware;
