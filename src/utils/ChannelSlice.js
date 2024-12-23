import { createSlice } from "@reduxjs/toolkit";

const channelSlice = createSlice({
  name: "channelSlice",
  initialState: {
    channelDetails: null,
  },
  reducers: {
    setChannelDetails: (state, action) => {
      state.channelDetails = action.payload;
    },
    deleteVideo: (state, action) => {
      const videoId = action.payload;
      state.channelDetails.videos = state.channelDetails.videos.filter(
        (video) => video._id !== videoId
      );
    },

  },
});

export const { setChannelDetails, deleteVideo } = channelSlice.actions;
export default channelSlice.reducer;
