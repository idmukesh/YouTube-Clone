import { loginUser, registerUser } from "../../Controller/User Controller/UserController.js";
import { checkUserRegisteration } from "../../Middleware/RegisterationMiddleware.js";
import express from 'express'

const UserRouter = new express();

UserRouter.post('/signup',checkUserRegisteration,registerUser)
UserRouter.post('/login',loginUser)

export default UserRouter