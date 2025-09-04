import { Genre, GenreParams, GenrePlayload } from "../../types/Genre";
import { apiSlice } from "../api/apiSlice";
import { GenreFormProps } from "./components/GenreForm";


const endpointUrl = '/genres';


export const inicialState={
    name:'',
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

export const genreSlice = apiSlice.injectEndpoints({
    endpoints: ({query,mutation}) => ({
        createGenre: mutation<Genre,GenrePlayload>({ 
            query: createGenreMutation,
            invalidatesTags: ['Genres'],
        }),

    })
})