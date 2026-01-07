import { HttpError } from "http-errors";

const serverErrorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof HttpError) {
    console.log("❌ | Error: ", err);
    res.status(err.status).json({
      status: err.status,
      data: {
        errorCode: err.name,
        errorMessage: err.message,
      },
    });
  }
};

export default serverErrorHandlerMiddleware;
