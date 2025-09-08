
import { Result, Results } from "../../types/Category";
import { Genre, GenreParams, GenrePayload} from "../../types/Genre";
import { apiSlice } from "../api/apiSlice";



const endpointUrl = '/genres';


export const inicialState={
    id:"",
    first_Name:"",
    last_Name:"",
    email:"",
    pivot:{genre_id:"", category_id:""}
}

function parseQueryParams(params:GenreParams){
    const query = new URLSearchParams();

    if(params.page) {
        query.append('page', params.page.toString());
    }
    if(params.perPage) {
        query.append('perPage', params.perPage.toString());
    }
    

    return `?${query.toString()}`;
}

function createGenreMutation(genre:GenrePayload){
    return {url: endpointUrl , method: 'POST', body: genre};


}

function getGenres({id}:{id:string}){
    return  `${endpointUrl}/${id}`;
}


function  updateGenreMutation(genre:GenrePayload){
    return{
        url: getGenres({id: genre.id}),
        method:"PUT",
        body: genre,
    }
}

function  getCategories(){
    return `categories?all=true`;

}

export const genreSlice = apiSlice.injectEndpoints({
    endpoints: ({query,mutation}) => ({
        getCategories: query<Results,void>({ 
            query: getCategories,
            providesTags: ['Genres'],
        }),
        getGenre: query<Result, {id: string}>({
            query:getGenres,
            providesTags:["Genres"],
        }),
        updateGenreMutation: mutation<Genre, GenrePayload>({
            query: updateGenreMutation,
            invalidatesTags:["Genres"],

        }),
        createGenre: mutation<Genre,GenrePayload>({ 
            query: createGenreMutation,
            invalidatesTags: ['Genres'],
        }),

    })
})

export const { useCreateGenreMutation, useGetCategoriesQuery,
    useGetGenreQuery, useUpdateGenreMutationMutation
 } = genreSlice;