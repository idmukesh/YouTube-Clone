import mongoose from 'mongoose'
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true, lowercase: true },
  password: { type: String, required: true, minlength: 6,},
  username: { type: String, required: true, unique: true },
});

export const RegisterationModel = new mongoose.model('users', userSchema)