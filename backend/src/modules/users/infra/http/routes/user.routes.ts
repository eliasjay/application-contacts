import { Router } from "express";

import UserController from "../controllers/UserController";

const userRouter = Router()
const userController = new UserController()

userRouter.post('/', () => {console.log('create')}, userController.create)
userRouter.patch('/', () => {console.log('update')}, userController.update)
userRouter.get('/', () => {console.log('show')}, userController.show)

export default userRouter