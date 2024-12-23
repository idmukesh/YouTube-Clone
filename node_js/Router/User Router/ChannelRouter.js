import express from 'express'
import { CreateChannel, GetAllChannels } from "../../Controller/User Controller/ChannelController.js";
import { verifyToken } from "../../Middleware/VerifyJwtMiddleware.js"

const ChannelRouter = new express.Router();
ChannelRouter.post('/channel', verifyToken, CreateChannel)
ChannelRouter.get('/channels', GetAllChannels)

export default ChannelRouter