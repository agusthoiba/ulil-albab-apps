import { configureStore } from '@reduxjs/toolkit';
import ayahReducer from './ayahSlice';
import surahReducer from './surahSlice';

const store = configureStore({
    reducer: {
        ayah: ayahReducer,
        surah: surahReducer,
    },
});

export default store;
