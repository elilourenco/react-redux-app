
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../redux/store";
import { CastMemberParams, Results ,CastMember} from "../../types/CastMembers";
import { apiSlice } from "../api/apiSlice";



const endpointsUrl = "/cast-members?";



export const InitialState:CastMember = {
    id: "",
    name: "",
    type: 0,
    deleteAt: null,
    createdAt: "",
    updateAt: "",
}

function parseQueryParams(params: CastMemberParams) {

    return null;
}


export const  CastMemberSlice = apiSlice.injectEndpoints({
    endpoints()=> null
})