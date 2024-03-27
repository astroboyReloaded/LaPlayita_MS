// redux store
import { configureStore } from '@reduxjs/toolkit';
import staffReducer from './slices/staffSlice';

const store = configureStore({
  reducer: {
    staff: staffReducer,
  },
});

export default store;
