import mongoose from 'mongoose'

// Comment schema for storing user comments on a video
const commentSchema = new mongoose.Schema({
    channelLogo: { type: String, required: true }, 
    channelName: { type: String, required: true }, 
    comment: { type: String, required: true }
});


const shortsSchema = new mongoose.Schema({
    VideoUrl: { type: String, required: true }, 
    Title:{type:String,required:true},
    ChannelLogo: { type: String, required: true }, 
    ChannelName: { type: String, required: true }, 
    Description: { type: String, required: true }, 
    Comments: [commentSchema],
    Likes: { type: Number, default: 0 }, 
    Shares: { type: Number, default: 0 }, 
    liked: { type: Boolean, default: false } 
});

// Create and export the Shorts model
export const ShortsModel = mongoose.model('Shorts', shortsSchema); 
