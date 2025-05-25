// src/redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import {counterSlice } from '../features/counter/counterSlice';
import categoriesSlice from '../features/categories/categorySlice'


export const store=configureStore({
  reducer:{
    counter: counterSlice.reducer,
    categories: categoriesSlice
  }, // We'll add reducers here later
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;