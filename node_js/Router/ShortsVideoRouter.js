import express from 'express'
import { GetAllShortsVideos,PostShortsVideoData } from '../Controller/ShortsVideoController.js';
const ShortsRouter = new express.Router();

ShortsRouter.post('/shortvideo',PostShortsVideoData)
ShortsRouter.get('/shortvideos',GetAllShortsVideos)

export default ShortsRouter