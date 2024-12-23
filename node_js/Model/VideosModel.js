import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    ChannelLogo: { type: String, required: true },
    ChannelName: { type: String, required: true },
    Comment: { type: String, required: true }
});

// Define the main video schema
const videoSchema = new mongoose.Schema({
    Thumbnails: { type: String, required: true },
    VideoUrl: { type: String, required: true },
    Title: { type: String, required: true },
    Description: { type: String, required: true },
    ChannelLogo: { type: String, required: true },
    ChannelName: { type: String, required: true },
    Views: { type: Number, required: true },
    TimeStamp: { type: Date, required: true },
    Likes: { type: Number, required: true },
    Dislikes: { type: Number, required: true },
    Shares: { type: Number, required: true },
    Comments: [commentSchema], // Array of comments
    Category:{type:String, required:true}
});

export const VideosModel = mongoose.model('Videos',videoSchema)