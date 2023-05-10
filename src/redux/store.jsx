import { configureStore } from '@reduxjs/toolkit';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'
  import storage from 'redux-persist/lib/storage'
import shopitReducer from "./shopitSlice";

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
  };
  const persistedReducer = persistReducer(persistConfig, shopitReducer)

export const store = configureStore (
    {
        reducer:{
            shopit : persistedReducer
        }, persistedReducer,
        middleware: (getDefaultMiddleware) =>
          getDefaultMiddleware({
            serializableCheck: {
              ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
          }),
    }
)

export let persistor = persistStore(store)