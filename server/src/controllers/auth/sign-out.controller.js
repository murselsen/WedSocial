import { signOut } from "../../services/auth/index.js";
const signOutController = async (req, res, next) => {
  try {
    if (req.cookies.sessionId) {
      console.log(
        "✅ | Sign Out Controller | Signing out session ID:",
        req.cookies.sessionId
      );
      await signOut(req.cookies.sessionId);
    }

    res.clearCookie("sessionId");
    console.log("✅ | Sign Out Controller | Session cookie cleared.");

    res.clearCookie("refreshToken");
    console.log("✅ | Sign Out Controller | Refresh token cookie cleared.");

    console.log("✅ | Sign Out Controller | User signed out successfully.");

    res.status(204).send();
  } catch (error) {
    console.error("Error during sign-out:", error);
    next(error);
  }
};
export default signOutController;
