import express from 'express'
import { PostVideoData , GetAllVideos} from '../Controller/VideosController.js';

const VideoRouter = new express.Router();

VideoRouter.post('/video', PostVideoData)
VideoRouter.get('/videos', GetAllVideos)

export default VideoRouter