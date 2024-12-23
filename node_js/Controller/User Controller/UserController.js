import { RegisterationModel } from "../../Model/User Model/RegistrationModel.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
export const registerUser = async (req, res) => {
    try {
        const { email, password, username } = req.body
        const encryptedPass = await bcrypt.hash(password, 10);
        const user = new RegisterationModel({
            email,
            password: encryptedPass,
            username
        })

        await user.save()
        res.status(200).json({ success: true, message: "User Successfuly registerd " ,username:username})
    }
    catch (err) {
        res.status(500).json({ success: false, message: "Failed to register Server error!", err: err })
    }
}

export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await RegisterationModel.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: "Invalid email or password." });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid email or password." });
        }

        const accessToken = jwt.sign({ email: user.email, id: user._id }, "secretKey");
        const username = user.username
        res.status(200).json({ message: "Login successful", accessToken: accessToken, email: email,username:username });


    }
    catch {
        res.status(500).json({ message: "Internal server error." });
    }
}