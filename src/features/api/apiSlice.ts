import { createApi,fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseUrl="https://dummyjson.com";

export const  apiSlice = createApi({
    reducerPath:"apiSlice",
    tagTypes:["Categories", "CastMembers"],
    endpoints:(builder) =>({}),
    baseQuery:fetchBaseQuery({baseUrl}),
})