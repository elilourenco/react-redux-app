
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
};

function parseQueryParams(params: CastMemberParams) {
    const query = new URLSearchParams();
    if (params.page) {
        query.append("page", params.page.toString());
    }       

    if (params.perPage) {
        query.append("perPage", params.perPage.toString());
    }

    if (params.search) {
        query.append("search", params.search);
    }

    if (params.type) {
        query.append("type", params.type.toString());
    }

    return query.toString();
}

function getCastMembers(params: CastMemberParams){
    const  {page=1, perPage=10, search, type} = params;
    
    return `${endpointsUrl}?${parseQueryParams({
        page,
        perPage,
        search,
        type

    })} `;
}


function deleteCastMember(id: string){
    return {

    url: `${endpointsUrl}${id}`,
    method:"DELETE",
}
}


export const  castMembersApiSlice = apiSlice.injectEndpoints({
    endpoints:({query,mutation})=>({
        getcastMembers: query<Results, CastMemberParams>({
            query:getCastMembers,
            providesTags:["CastMembers"]
        })
}),
});


 export const {useGetcastMembersQuery} = castMembersApiSlice;