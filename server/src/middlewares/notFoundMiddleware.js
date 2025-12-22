const notFoundMiddleware = (req, res, next) => {
  console.log(`❗ | 404 Not Found: ${req.originalUrl}`);
  const statusCode = 404;

  const response = {
    success: false,
    status: 404,
    errorCode: "NOT_FOUND",
    message: "Not Found",
  };

  res.status(response.status).json(response);
};

export default notFoundMiddleware;
