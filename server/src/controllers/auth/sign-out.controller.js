import { signOut } from "../../services/auth/index.js";
const signOutController = async (req, res, next) => {
  console.log("Inside Sign-Out Controller");
  try {
    if (req.cookies.sessionId) {
      await signOut(req.cookies.sessionId);
    }
    res.clearCookie("sessionId");

    res.clearCookie("refreshToken");

    res.status(204).send();
    console.log("✅ | Sign Out Controller | User signed out successfully.");
  } catch (error) {
    console.error("Error during sign-out:", error);
    next(error);
  }
};
export default signOutController;
