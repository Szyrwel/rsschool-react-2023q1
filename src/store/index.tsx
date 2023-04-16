import { configureStore } from '@reduxjs/toolkit';
import searchValueReducer from './searchValueSlice';

export default configureStore({
  reducer: {
    search: searchValueReducer,
  },
});
