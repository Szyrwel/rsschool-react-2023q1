import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Character } from 'interfaces';

type searchValueState = {
  search: string;
  character: Character[];
};

const initialState: searchValueState = {
  search: '',
  character: [],
};

const searchValueSlice = createSlice({
  name: 'searchValue',
  initialState,
  reducers: {
    handleSearchValue(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
  },
});

export const { handleSearchValue } = searchValueSlice.actions;
export default searchValueSlice.reducer;
