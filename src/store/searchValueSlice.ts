import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getAllCharacters } from 'api/Api';
import { BASE_URL } from 'api/constants';
import { Character } from 'interfaces';
import { RootState } from 'store';

export const fetchCharacters = createAsyncThunk<
  Character[],
  undefined,
  { state: RootState }
>(
  'searchValue/getAllCharacters',
  async function (_, { rejectWithValue, getState }) {
    try {
      const { currentPage } = getState().search;
      return await getAllCharacters(BASE_URL, currentPage);
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue('error');
    }
  }
);
type searchValueState = {
  search: string;
  characters: Character[];
  currentPage: number;
  loading: boolean;
};

const initialState: searchValueState = {
  search: '',
  characters: [],
  currentPage: 1,
  loading: false,
};

const searchValueSlice = createSlice({
  name: 'searchValue',
  initialState,
  reducers: {
    handleSearchValue(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
    nextPage(state) {
      state.currentPage += 1;
    },
    perPage(state) {
      state.currentPage -= 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCharacters.fulfilled, (state, action) => {
      state.loading = false;
      state.characters = action.payload;
    });
    builder.addCase(fetchCharacters.pending, (state) => {
      state.loading = true;
    });
  },
});

export const { handleSearchValue, nextPage, perPage } =
  searchValueSlice.actions;
export default searchValueSlice.reducer;
