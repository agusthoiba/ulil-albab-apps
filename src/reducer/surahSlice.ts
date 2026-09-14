//userSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import SurahRest from '../rest/Surah.rest';

export const getSurahAsync = createAsyncThunk(
  'surah/getSurah',
  async () => {
    const surahObj = new SurahRest(process.env.EXPO_PUBLIC_API_URL);
    const response = await surahObj.get();
    return response;
  }
);

const surahSlice = createSlice({
  name: 'surah',
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {
    addSurah: (state, action) => {
      state.data.push(action.payload);
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSurahAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getSurahAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getSurahAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { addSurah } = surahSlice.actions;

export default surahSlice.reducer;
