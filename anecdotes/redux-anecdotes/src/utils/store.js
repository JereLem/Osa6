import { configureStore } from '@reduxjs/toolkit';

import anecdoteFilterReducer from '../reducers/filterReducer';
import anecdoteReducer from '../reducers/anecdoteReducer';
import notificationReducer from '../reducers/notificationReducer';

const store = configureStore({
  reducer: {
    anecdotes: anecdoteReducer,
    anecdoteFilter: anecdoteFilterReducer,
    notification: notificationReducer,
  },
});

export default store;