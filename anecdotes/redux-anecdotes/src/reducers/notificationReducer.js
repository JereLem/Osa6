import { createSlice } from '@reduxjs/toolkit';

const notificationSlice = createSlice({
  name: 'notification',
  initialState: null,
  reducers: {
    createNotification(_state, action) {
      return action.payload;
    },
    removeNotification() {
      return null;
    },
  },
});

let timer;
export const timedMessage = (dispatch, content, timeout = 5000) => {clearTimeout(timer);
  dispatch(createNotification(content));
  timer = setTimeout(() => dispatch(removeNotification()), timeout);
};

export const { createNotification, removeNotification } = notificationSlice.actions;
export default notificationSlice.reducer;