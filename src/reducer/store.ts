import {
  configureStore,
  combineReducers
} from '@reduxjs/toolkit';

import { persistReducer } from 'react-native-redux-persist2';
import surahReducer from './surahSlice';
import ayahAllReducer from './ayahAllSlice';
import ayahReducer from './ayahSlice';

const rootReducer = combineReducers({
  surah: surahReducer,
  ayahAll: ayahAllReducer,
  ayah: ayahReducer
});

const persistedReducer = persistReducer(rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== "production",
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
        immutableCheck: false
      })
});

export const persistConfig = {
  key: "root",
  storage: { type: "AsyncStorage" as const }
};

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

