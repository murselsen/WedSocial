import { ERROR_CODES } from "../../constants/res-code.constant.js";
import { isRefreshTokenActive } from "../../services/session/index.js";
import reloadSession from "../../services/session/reload-session.service.js";
import createAppError from "../../utils/create-app-error.util.js";
import createCookie from "../../utils/create-cookie.util.js";

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

    const newSession = await reloadSession(sessionId);

    if (!newSession) {
      res.clearCookie("sessionId");
      res.clearCookie("refreshToken");
      throw createAppError(
        ERROR_CODES.AUTH.REFRESH_INVALID,
        "❌ | Refresh Token Controller | Refresh token is invalid or session could not be reloaded"
      );
    }
    await createCookie(res, "sessionId", newSession._id);
    await createCookie(res, "refreshToken", newSession.refreshToken);
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Refresh Token Controller reached successfully",
      data: {
        accessToken: newSession.accessToken,
        accessTokenVaildUntil: newSession.accessTokenVaildUntil,
      },
    });
  } catch (error) {
    console.error("Error in Refresh Token Controller:", error);
    next(error);
  } finally {
    console.log("⚠️ | Inside Refresh Token Controller");
  }
};

export default refreshTokenController;
