import express from "express";
import { AuthController } from "../contollers/auth.controller";



const authRouter = express.Router();

authRouter.post('/signin', AuthController.signin)
authRouter.post('/login', AuthController.login)

export { authRouter }