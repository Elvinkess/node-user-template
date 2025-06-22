import { Router } from "express";
import { userLogic } from "../programs";
import { UserController } from "../controllers/user_controller";
import { Validator } from "../middlewares/field_validator";



let userRoute = Router();
let validator = new Validator()
let userController = new UserController(userLogic)
userRoute.post("/create",validator.signValidation,validator.validate, userController.create)
userRoute.post("/signin", userController.signin)
userRoute.post("/resetpassword", userController.resetPassword)
userRoute.post("/verifyAndSet", userController.verifyAndResetPassowrd)


export default userRoute;