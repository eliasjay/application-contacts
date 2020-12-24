import { Router } from "express";

import UserController from "../controllers/UserController";

const userRouter = Router()
const userController = new UserController()

userRouter.post('/', userController.create)
userRouter.patch('/', userController.update)
userRouter.get('/', userController.show)

export default userRouter