import { isRefreshTokenActive } from "../../services/session/index.js";

const refreshTokenController = async (req, res, next) => {
  try {
    const { sessionId, refreshToken } = req.cookies;

    const isActive = await isRefreshTokenActive(sessionId);

    console.log(`Refresh Token Active Status: ${isActive}`);
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
