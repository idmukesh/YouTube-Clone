import { channelModel } from "../../Model/User Model/ChannelsModel.js";

export const CreateChannel = async (req, res) => {
    const { name, headline, email } = req.body;

    try {
        // Check if the channel name already exists
        const existingChannel = await channelModel.findOne({ name });
        const existingChannelWithEmail = await channelModel.findOne({email})
        if (existingChannel) {
            return res.status(409).json({ message: "Channel name already exists" });
        }
        if (existingChannelWithEmail) {
            return res.status(409).json({ message: "Channel already exists with this email" });
        }
        // Create a new channel
        const newChannel = new channelModel({ name, headline, email });
        await newChannel.save();

        return res.status(201).json({ message: "Channel created successfully", channel: newChannel });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

export const GetAllChannels = async (req, res) => {
    try {
        const Channels = await channelModel.find({});
        res.status(200).json({ message: "Successfuly Fetched", Success: true, Channels: Channels })
    }
    catch (err) {
        res.status(500).json({ err: err, message: "Failed to Fetch Data serve error !" })
    }
}