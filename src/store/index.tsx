import { configureStore } from '@reduxjs/toolkit';
import searchValueReducer from './searchValueSlice';
import formSliceReducer from './formSlice';

const store = configureStore({
  reducer: {
    search: searchValueReducer,
    form: formSliceReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
