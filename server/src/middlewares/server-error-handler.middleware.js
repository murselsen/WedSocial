// import { HttpError } from "http-errors";

const serverErrorHandlerMiddleware = (err, req, res, next) => {
  console.error("❌ | Server Error Handler Middleware:\n", err);

  res.status(500).json(err);
};

export default serverErrorHandlerMiddleware;
