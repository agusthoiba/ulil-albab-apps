//userSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import SurahRest from '../rest/Surah.rest';

export const getAllAyahAsync = createAsyncThunk(
  'surah/getAllAyah',
  async () => {
    const surahObj = new SurahRest(process.env.EXPO_PUBLIC_API_URL);
    const response = await surahObj.getAllAyah();
    return response;
  }
);

const ayahAllSlice = createSlice({
  name: 'ayahAll',
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {
    addAyah: (state, action) => {
      state.data.push(action.payload);
    },
    removeAyah: (state, action) => {
      state.data = state.data.filter(data => data.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllAyahAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllAyahAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getAllAyahAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { addAyah, removeAyah } = ayahAllSlice.actions;

export default ayahAllSlice.reducer;
