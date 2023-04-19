import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Card } from 'pages/forms/interface';
import { RootState } from 'store';

const initialState: Card[] = [];

const formSlice = createSlice({
  name: 'formSlice',
  initialState,
  reducers: {
    addCard(state, action: PayloadAction<Card>) {
      state.push(action.payload);
    },
  },
});

export const { addCard } = formSlice.actions;
export default formSlice.reducer;
export const selectCards = (state: RootState) => state.form;
