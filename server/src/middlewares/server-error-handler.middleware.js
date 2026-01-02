import { ErrorCodes } from "../constants/index.js";
import { HttpError } from "http-errors";

const serverErrorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof HttpError) {
    res.status(err.status).json({
      status: err.status,
      message: err.name,
      data: err,
    });
  }
};

export default serverErrorHandlerMiddleware;
