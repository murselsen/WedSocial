import User from "../../db/models/user.js";

// Http Errors
import createError from "http-errors";

// Auth Services
import { signUp } from "../../services/auth/index.js";

// Utils
import { passwordHash, passwordCompare } from "../../utils/index.js";

const signUpController = async (req, res, next) => {
  console.log("Inside Sign-Up Controller");
  try {
    // Sign-up logic here
    const userPayload = req.body;

    const newUser = await signUp(userPayload);

    res.status(200).json({
      message: "User signed up successfully",
      data: { newUser },
    });
  } catch (error) {
    console.error("❌ | Error in sign-up controller:\n", error);
    next(error);
  }
};

export default signUpController;
