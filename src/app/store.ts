import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import categoriesReducer from '../features/categories/categorySlice';
import { apiSlice } from '../features/api/apiSlice';
import {castMembersApiSlice} from '../features/cast/CastMembersSlice';


const rootReducer = combineReducers({ 
    counter: counterReducer,
    categories:categoriesReducer,
    [apiSlice.reducerPath]:apiSlice.reducer,
    castMembers:castMembersApiSlice.reducer
  
})


export const store = configureStore({
  reducer:rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
