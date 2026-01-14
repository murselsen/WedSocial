import { Router } from "express";
import authRouter from "./auth.router.js";

const appRouter = Router();

appRouter.use("/auth", authRouter);

export default appRouter;
