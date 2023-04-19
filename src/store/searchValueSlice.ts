import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getAllCharacters } from 'api/Api';
import { BASE_URL } from 'api/constants';
import { Character, ResponseModel } from 'interfaces';
import { RootState } from 'store';

export const fetchCharacters = createAsyncThunk<
  ResponseModel,
  undefined,
  { state: RootState }
>(
  'searchValue/getAllCharacters',
  async function (_, { rejectWithValue, getState }) {
    const { currentPage } = getState().search;
    try {
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
  totalPages: number;
};

const initialState: searchValueState = {
  search: '',
  characters: [],
  currentPage: 1,
  loading: false,
  totalPages: 149,
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
    startPage(state) {
      state.currentPage = 1;
    },
    lastPage(state) {
      if (state.totalPages) state.currentPage = state.totalPages;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCharacters.fulfilled, (state, action) => {
      state.loading = false;
      state.characters = action.payload.data;
    });
    builder.addCase(fetchCharacters.pending, (state) => {
      state.loading = true;
    });
  },
});

export const { handleSearchValue, nextPage, perPage, startPage, lastPage } =
  searchValueSlice.actions;
export default searchValueSlice.reducer;
