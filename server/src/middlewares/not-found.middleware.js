const notFoundMiddleware = (req, res, next) => {
  const statusCode = 404;

  const response = {
    success: false,
    status: statusCode,
    errorCode: "NOT_FOUND",
    message: "Not Found",
  };

  res.status(response.status).json(response);
};

export default notFoundMiddleware;
