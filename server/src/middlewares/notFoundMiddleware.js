const notFoundMiddleware = (req, res, next) => {
  console.log(`❗ | 404 Not Found: ${req.originalUrl}`);
  const statusCode = 404;
  res.status(statusCode).json({
    status: "Error",
    code: statusCode,
    message: "Not Found",
    data: null,
  });
};

export default notFoundMiddleware;
