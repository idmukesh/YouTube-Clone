import { configureStore } from '@reduxjs/toolkit';
import toggleReducer from './toggleSlice';
import searchReducer from './searchSlice'
import channelReducer from './ChannelSlice'

const appStore = configureStore({
  reducer: {
    toggleSlice: toggleReducer,
    searchSlice: searchReducer,
    channelSlice: channelReducer,
  }
});

export default appStore;
