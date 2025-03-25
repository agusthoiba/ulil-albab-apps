import { 
  configureStore, 
  combineReducers
} from '@reduxjs/toolkit';

import { 
  persistStore, 
  persistReducer,
} from "redux-persist";
import storage from "@react-native-async-storage/async-storage";
import surahReducer from './surahSlice';
import ayahAllReducer from './ayahAllSlice';
import ayahReducer from './ayahSlice';

const persistConfig = {
    key: "root",
    version: 3,
    storage,
  };

const rootReducer = combineReducers({ 
  surah: surahReducer,
  ayahAll: ayahAllReducer,
  ayah: ayahReducer
})
  
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== "production",
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
        immutableCheck: false
      })
});

export let persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

