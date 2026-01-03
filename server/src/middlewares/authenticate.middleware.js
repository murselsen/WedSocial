const authenticateMiddleware = (req, res, next) => {
  console.log("Inside authenticateMiddleware");
  try {
    // Authentication logic here

    



    next();
  } catch (error) {
    next(error);
  }
};

export default authenticateMiddleware;
