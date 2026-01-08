const createAppError = (error_code, ...message) => {
  const error = new Error(message.join(" "));
  console.error(error);
  return {
    success: false,
    status: error_code.status,
    error: {
      status: error_code.status,
      code: error_code.code,
      message: message,
      stack: process.env.NODE_ENV === "development" ? error.stack : undefined,
    },
  };
};

export default createAppError;
