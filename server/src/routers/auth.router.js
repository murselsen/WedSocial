import { Router } from "express";

import {
  signInController,
  signOutController,
  signUpController,
  meController,
  refreshTokenController,
} from "../controllers/auth/index.js";

import { authenticateMiddleware } from "../middlewares/index.js";

const authRouter = Router();

// User Sign-In Route
authRouter.post("/sign-in", signInController);

// User Sign-Up Route
authRouter.post("/sign-up", signUpController);

// User Sign-Out Route
authRouter.post("/sign-out", signOutController);

// User Get Profile Route
authRouter.get("/me", authenticateMiddleware, meController);
// // Send Verification Code Route
// authRouter.post("/send-verification-code");

// // Verify Account Route
// authRouter.post("/verify-account");

// // Password Reset Route
// authRouter.post("/reset-password");

// Token Refresh Route
authRouter.post("/refresh-token", refreshTokenController);

// Delete Account Route
// authRouter.delete("/delete-account/:id");
export default authRouter;
