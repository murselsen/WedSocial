import { Router } from "express";

import {
  signInController,
  signOutController,
  signUpController,
} from "../controllers/auth/index.js";

const authRouter = Router();

// User Sign-In Route
authRouter.post("/signin", signInController);

// User Sign-Up Route
authRouter.post("/signup", signUpController);

// User Sign-Out Route
authRouter.post("/signout", signOutController);

// // Send Verification Code Route
// authRouter.post("/send-verification-code");

// // Verify Account Route
// authRouter.post("/verify-account");

// // Password Reset Route
// authRouter.post("/reset-password");

// // Token Refresh Route
// authRouter.post("/refresh-token");

// // User Get Profile Route
// authRouter.get("/profile");

export default authRouter;
