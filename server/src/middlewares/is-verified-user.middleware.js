const isVerifiedUserMiddleware = (req, res, next) => {
  console.log("Inside isVerifiedUserMiddleware");
    try {
      
  } catch (error) {
    next(error);
  }
};

export default isVerifiedUserMiddleware;
