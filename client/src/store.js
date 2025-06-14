// redux store
import { configureStore } from '@reduxjs/toolkit';
import staffReducer from './components/staff/staffSlice';

const store = configureStore({
  reducer: {
    staff: staffReducer,
  },
});

export default store;
