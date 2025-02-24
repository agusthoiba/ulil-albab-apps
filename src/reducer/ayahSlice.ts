//userSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import SurahRest from '../rest/Surah.rest';

export const getAyahAsync = createAsyncThunk(
  'surah/getAyahBySurahId',
  async (surahId: number) => {
    const surahObj = new SurahRest(process.env.EXPO_PUBLIC_API_URL);
    const response = await surahObj.getAyahBySuraId(surahId);
    return response;
  }
);

const ayahSlice = createSlice({
  name: 'ayah',
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {
    addUser: (state, action) => {
      state.data.push(action.payload);
    },
    removeUser: (state, action) => {
      state.data = state.data.filter(data => data.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAyahAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAyahAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getAyahAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { addUser, removeUser } = ayahSlice.actions;

export default ayahSlice.reducer;
