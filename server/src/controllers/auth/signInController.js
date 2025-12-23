const signInController = async (req, res, next) => {
  try {
    // Sign-in logic here
    res.status(200).json({ message: "User signed in successfully" });
  } catch (error) {
    next(error);
  }
};

export default signInController;
