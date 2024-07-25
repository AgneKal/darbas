import express from "express";
import { UserController } from "../contollers/user.contoller";



const userRouter = express.Router();

userRouter.get('/', UserController.getAll);
userRouter.get('/:id', UserController.getUser);
userRouter.put('/:id',UserController.update);
userRouter.delete('/:id', UserController.delete);

export { userRouter }