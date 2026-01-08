import { isRefreshTokenActive } from "../../services/session/index.js";
import reloadSession from "../../services/session/reload-session.service.js";

/**
 * Handles refresh token validation and session activity check.
 * @async
 * @function refreshTokenController
 * @param {import('express').Request} req - Express request object containing cookies with sessionId and refreshToken.
 * @param {import('express').Response} res - Express response object.
 * @param {import('express').NextFunction} next - Express next middleware function.
 * @returns {Promise<void>} Returns a JSON response indicating whether the refresh token is active.
 * @throws {Error} Passes any errors to the next middleware for handling.
 */
const refreshTokenController = async (req, res, next) => {
  try {
    const { sessionId, refreshToken } = req.cookies;

    const isActive = await reloadSession(sessionId);

    const code = isActive ? 200 : 401;

    res.status(code).json({
      success: isActive,
      statusCode: code,
      message: "Refresh Token Controller reached successfully",
    });
  } catch (error) {
    console.error("Error in Refresh Token Controller:", error);
    next(error);
  } finally {
    console.log("⚠️ | Inside Refresh Token Controller");
  }
};

export default refreshTokenController;
