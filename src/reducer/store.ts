import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from "redux-persist";
import storage from "@react-native-async-storage/async-storage";
import surahReducer from './surahSlice';
import ayahReducer from './ayahSlice';
import ayahAllReducer from './ayahAllSlice';


const persistConfig = {
    key: "root",
    storage,
  };

const rootReducer = combineReducers({ 
    surah: surahReducer,
    ayah: ayahReducer,
    ayahAll: ayahAllReducer
  })
  
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== "production",
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
        },
    }),
});

export const persistor = persistStore(store);
