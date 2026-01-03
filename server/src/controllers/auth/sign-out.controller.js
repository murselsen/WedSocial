import { signOut } from "../../services/auth/index.js";
const signOutController = async (req, res, next) => {
  try {
    if (req.cookies.sessionId) {
      await signOut(req.cookies.sessionId);
    }

    console.log("✅ | User signed out successfully.");
    res.status(204).send();
  } catch (error) {
    console.error("Error during sign-out:", error);
    next(error);
  }
};
export default signOutController;
