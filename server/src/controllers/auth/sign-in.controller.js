import { signIn } from "../../services/auth/index.js";

import { createCookie } from "../../utils/index.js";

const signInController = async (req, res, next) => {
  console.log("Inside Sign-In Controller");
  try {
    const { email, password } = req.body;
    const result = await signIn(email, password);

    await createCookie(
      res,
      "refreshToken",
      result.stsTokenManager.refreshToken
    );

    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "User signed in successfully",
      data: result,
    });
  } catch (error) {
    console.error("Error in Sign-In Controller:", error);
    next(error);
  }
};

export default signInController;
