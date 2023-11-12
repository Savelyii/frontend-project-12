import { selectors as channelsSelectors } from './slices/channelsSlice.js';
import { selectors as messagesSelectors } from './slices/messagesSlice.js';

export const getAllChannels = (state) => channelsSelectors.selectAll(state);

export const getCurrentChannelId = (state) => state.channels.currentChannelId;

export const getCurrentChannel = (state) => {
  const currentChannelId = getCurrentChannelId(state);
  return channelsSelectors.selectById(state, currentChannelId);
};

export const getAllMessages = (state) => messagesSelectors.selectAll(state);
