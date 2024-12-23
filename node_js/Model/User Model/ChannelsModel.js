import mongoose from "mongoose";

const channelSchema = new mongoose.Schema({
  email: { type: String, required: true },
  name: { type: String, required: true },
  headline: { type: String, required: true },
  profilePhoto: { type: String, default: "https://images.unsplash.com/photo-1640960543409-dbe56ccc30e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" },
  videos: {
    type: Array,
    default: [
      {
        videoUrl: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Sample Video 1",
        views: "500K",
        uploaded: "1 year ago",
      },
      {
        videoUrl: "https://images.unsplash.com/photo-1518235506717-e1ed3306a89b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Sample Video 2",
        views: "1M",
        uploaded: "6 months ago",
      },
      {
        videoUrl: "https://plus.unsplash.com/premium_photo-1714051660720-888e8454a021?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Sample Video 3",
        views: "2M",
        uploaded: "3 months ago",
      },
    ],
  },
  createdAt: { type: Date, default: Date.now }
});

export const channelModel = mongoose.model('Channel', channelSchema);

