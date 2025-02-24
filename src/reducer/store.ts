import { configureStore } from '@reduxjs/toolkit';
import ayahReducer from './ayahSlice';

const store = configureStore({
    reducer: {
        ayah: ayahReducer,
    },
});

export default store;
