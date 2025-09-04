import { createApi,fetchBaseQuery } from '@reduxjs/toolkit/query/react'

 export const baseUrl="https://dummyjson.com/users";

export const  apiSlice = createApi({
    reducerPath:"apiSlice",
    tagTypes:["Categories", "CastMembers", "Genres"],
    endpoints:(builder) =>({}),
    baseQuery:fetchBaseQuery({baseUrl}),
})