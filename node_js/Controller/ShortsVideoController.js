import { ShortsModel } from "../Model/ShortsModel.js";

export const PostShortsVideoData = async (req, res) => {
    try {
        const { VideoUrl, Title, Description, ChannelLogo, ChannelName, Likes,Shares, Comments } = req.body;
        const newVideo = new ShortsModel({
            VideoUrl,
            Title,
            Description,
            ChannelLogo,
            ChannelName,
            Likes,
            Shares,
            Comments
        });
        // await newVideo.save()
        // res.status(200).json({ newVideo: newVideo, message: "New Video Is Inserted" })
        ShortsModel.insertMany(req.body);
        res.send(req.body)
    }
    catch (err) {
        res.status(500).json({ err: err, message: "Failed to insert Data serve error !" })
    }

}

export const GetAllShortsVideos = async (req, res) => {
    try {
        const Videos = await ShortsModel.find({});
        res.status(200).json({ message: "Successfuly Fetched", Success: true, Videos: Videos })
    }
    catch (err) {
        res.status(500).json({ err: err, message: "Failed to Fetch Data serve error !" })
    }
}