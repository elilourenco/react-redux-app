import { Genre, GenreParams, GenrePlayload, Results } from "../../types/Genre";
import { apiSlice } from "../api/apiSlice";
import { GenreFormProps } from "./components/GenreForm";


const endpointUrl = '/genres';


export const inicialState={
    id:0,
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
    if(params.serach) {
        query.append('serach', params.serach.toString());
    }

    return `?${query.toString()}`;
}

function createGenreMutation(genre:GenrePlayload){
    return {url: endpointUrl , method: 'POST', body: genre};


}

function  getCategories(){
    return `categories?all=true`;

}

export const genreSlice = apiSlice.injectEndpoints({
    endpoints: ({query,mutation}) => ({
        getCategories: query<Results, void>({ 
            query: getCategories,
            providesTags: ['Genres'],
        }),
        createGenre: mutation<Genre,GenrePlayload>({ 
            query: createGenreMutation,
            invalidatesTags: ['Genres'],
        }),

    })
})

export const { useCreateGenreMutation, useGetCategoriesQuery } = genreSlice;