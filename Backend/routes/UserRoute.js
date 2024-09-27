import express from "express";
import { loginUser, SignUpUser } from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.post("/signup",SignUpUser)
userRouter.post("/login",loginUser)

export default userRouter;
