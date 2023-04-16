import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Character } from 'interfaces';

type CharacterState = {
  search: string;
  character: Character;
};

const searchValueSlice = createSlice({
  name: 'searchValue',
  initialState: {
    search: '',
    character: [],
  },
  reducers: {
    handleSearchValue(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
  },
});

export const { handleSearchValue } = searchValueSlice.actions;
export default searchValueSlice.reducer;
