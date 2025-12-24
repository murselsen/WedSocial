import { signIn } from "../../services/auth/index.js";

const signInController = async (req, res, next) => {
  console.log("Inside Sign-In Controller");
  try {
    console.log("Request Body:", req.body);
    const { email, password } = req.body;
    const result = await signIn(email, password);
    // Sign-in logic here
    res.status(200).json({ message: "User signed in successfully" });
  } catch (error) {
    next(error);
  }
};

export default signInController;
