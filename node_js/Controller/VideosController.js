import { VideosModel } from '../Model/VideosModel.js';

export const PostVideoData = async (req, res) => {
    try {
        const { Thumbnails, VideoUrl, Title, Description, ChannelLogo, ChannelName,Category, Views, TimeStamp, Likes, Dislikes, Shares, Comments } = req.body;
        const newVideo = new VideosModel({
            Thumbnails,
            VideoUrl,
            Title,
            Description,
            ChannelLogo,
            ChannelName,
            Views,
            TimeStamp,
            Likes,
            Dislikes,
            Shares,
            Comments,
            Category
        });
        // await newVideo.save()
        // res.status(200).json({ newVideo: newVideo, message: "New Video Is Inserted" })
        VideosModel.insertMany(req.body);
        res.send(req.body)
    }
    catch (err) {
        res.status(500).json({ err: err, message: "Failed to insert Data serve error !" })
    }

}

export const GetAllVideos = async (req, res) => {
    try {
        const Videos = await VideosModel.find({});
        res.status(200).json({ message: "Successfuly Fetched", Success: true, Videos: Videos })
    }
    catch (err) {
        res.status(500).json({ err: err, message: "Failed to Fetch Data serve error !" })
    }
}