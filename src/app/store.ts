import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import { apiSlice } from '../features/api/apiSlice';
import {castMembersApiSlice} from '../features/cast/CastMembersSlice'; 



const rootReducer = combineReducers({ 
    counter: counterReducer,
   
    [apiSlice.reducerPath]:apiSlice.reducer,
    castMembers:castMembersApiSlice.reducer
  
})


 const setupStore = () =>{

  return  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  })

}




export  type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore["dispatch"]
export type RootState = ReturnType<typeof rootReducer>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;



export default setupStore;