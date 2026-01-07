import { Router } from "express";

import {
  signInController,
  signOutController,
  signUpController,
  meController,
} from "../controllers/auth/index.js";

import { authenticateMiddleware } from "../middlewares/index.js";

const authRouter = Router();

// User Sign-In Route
authRouter.post("/signin", signInController);

// User Sign-Up Route
authRouter.post("/signup", signUpController);

// User Sign-Out Route
authRouter.post("/signout", signOutController);

// User Get Profile Route
authRouter.get("/me", authenticateMiddleware, meController);
// // Send Verification Code Route
// authRouter.post("/send-verification-code");

// // Verify Account Route
// authRouter.post("/verify-account");

// // Password Reset Route
// authRouter.post("/reset-password");

// // Token Refresh Route
// authRouter.post("/refresh-token");

export default authRouter;
