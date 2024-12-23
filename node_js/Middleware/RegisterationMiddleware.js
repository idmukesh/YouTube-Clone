import { RegisterationModel } from "../Model/User Model/RegistrationModel.js";
export const checkUserRegisteration = async(req, res, next) => {
    const { email,username } = req.body;
    const alreadyExistUser = await RegisterationModel.findOne({ email: email });
    const alreadyExistUserWithUsername = await RegisterationModel.findOne({ username: username });
    if (alreadyExistUser) {
        return res.status(409).json({ message: "User already exists." });
    }
    if(alreadyExistUserWithUsername){
        return res.status(409).json({ message: "User already exists with this usename" });
    }
    next();
}