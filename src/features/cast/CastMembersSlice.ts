import { CastMemberParams, Results ,CastMember, Result} from "../../types/CastMembers";
import { apiSlice } from "../api/apiSlice";

const endpointsUrl = "/cast-members?";

export const InitialState:CastMember = {
    id: "",
    name: "",
    type: 0,
    deleteAt: null,
    createdAt: "",
    updateAt: "",
    data:[],
    links: {} as import("../../types/CastMembers").Links,
    meta:{} as import("../../types/CastMembers").Meta,
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


function deleteCastMember({id}: {id:string}){
    return {
    url: `${endpointsUrl}${id}`,
    method:"DELETE",
}
}

function  getCastMember({ id }: { id: string }) {
    return{
        method:"GET",
        url: `${endpointsUrl}${id}`,
    }
}

 function  updateCastMember(castMember: CastMember) {
    return {
        method: "PUT",
        url: `${endpointsUrl}${castMember.id}`,
        data: castMember
    }
 }

function createCastMember(castMember: CastMember) {
    return {
        url: endpointsUrl,
        method: "POST",
        body: castMember,
    };
}
export const  castMembersApiSlice = apiSlice.injectEndpoints({
    endpoints:({query,mutation})=>({
        getcastMembers: query<Results, CastMemberParams>({
            query:getCastMembers,
            providesTags:["CastMembers"]
        }),
        getCastMember: query<Result, {id:string}>({
            query:getCastMember,
            providesTags:["CastMembers"]
        }),

        
        updateCastMember:mutation<Result, CastMember>({
            query: updateCastMember,
            invalidatesTags: ["CastMembers"]

        }),

        createCastMember: mutation<Result, CastMember>({
            query: createCastMember,
            invalidatesTags: ["CastMembers"]
        }),

        deleteCastMember: mutation<Result, CastMember>({
            query: deleteCastMember,
            invalidatesTags: ["CastMembers"]
        }),
}),

});


 export const {useGetcastMembersQuery,
    useGetCastMemberQuery,
    useUpdateCastMemberMutation,
    useCreateCastMemberMutation,
    useDeleteCastMemberMutation
 } = castMembersApiSlice;