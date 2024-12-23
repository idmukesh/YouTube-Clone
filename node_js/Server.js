import express from 'express'
import mongoose from 'mongoose'
import VideoRouter from './Router/VideosRouter.js';
import ShortsRouter from './Router/ShortsVideoRouter.js';
import cors from 'cors'
import UserRouter from './Router/User Router/UserRouter.js';
import ChannelRouter from './Router/User Router/ChannelRouter.js';

const app = new express();
mongoose.connect("mongodb+srv://kmtmukesh1:Mk12kmt12@youtubecluster.lfrp1.mongodb.net/Youtube_DB").then(() => console.log("You are now connected to Mongo DB")).catch((err) => console.log("Failled to connect with mongo db", err))
app.use(cors())
app.use(express.json());
app.use(VideoRouter,ShortsRouter,UserRouter,ChannelRouter);
app.listen("5100", () => {
    console.log("You are now running on port no 5100")
})

