// src/redux/store.ts
import { configureStore } from '@reduxjs/toolkit';



export const store = configureStore({
  reducer: {}, // We'll add reducers here later
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;