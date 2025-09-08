
import { CategoryParams, Results } from "../../types/Category";
import { apiSlice } from "../api/apiSlice";

export interface Category{
  id: string |number;
  first_Name: string;
  last_Name:string;
  email: string;
  
}

type GetCategoriesParams ={
  id?: string| number | undefined,
  page ? : number,
  //perPage ?: number,
  
}


const endpointUrl= "/";


function parseQueryParams(params: CategoryParams) {
  const query = new URLSearchParams(
    Object.entries(params).filter(([_,value]) => value !== "" && value != null)
  );

  if (params.page) {
    query.append("page", params.page.toString());
  }

  
  if (params.serach){
    query.append("search", params.serach);
  }
  if (params.isActive !== undefined) {
    query.append("is_active", params.isActive.toString());
  }
  return query.toString();
}

function getCategories({ id, page = 1}: GetCategoriesParams = {}){
  const params = {
    ...(id && { id }), // Only include id if it exists
    page,
  
  } as CategoryParams;
  
  const baseUrl = id ? `${endpointUrl}/users/${id}` : endpointUrl;
  return `${baseUrl}?${parseQueryParams(params)}`;
}


function createCategoryMutation(category: Category) {
  return {
    url: endpointUrl,
    method: "POST",
    body: category,
  };
}
function deleteCategoryMutation({ id }: { id: string }) {
  return {
    url: `${endpointUrl}/${id}`,
    method: "DELETE",
  };
}

function updateCategoryMutation(category:Category){
  return{
    url: `${endpointUrl}/${category.id}`,
    method:"PUT",
    body: category,
  };
}

function getCategoryMutation( {id}:{id: string}) {
  return `${endpointUrl}/${id}`;
}

export const  categoriesApiSlice = apiSlice.injectEndpoints({
    endpoints: ({query, mutation}) =>({
    getCategories:query<Results, CategoryParams >({
    query: getCategories,
    providesTags:["Categories"],
    }),
    getCategory: query<Results,{id:string}>({
     query: getCategoryMutation,
     providesTags:["Categories"]
    }),


    createCategory : mutation<Results, Category>({
    query:createCategoryMutation,
    invalidatesTags: ["Categories"],
        }),
    deleteCategory: mutation<Results, { id: string}>({
      query: deleteCategoryMutation,
      invalidatesTags:["Categories"],
    }),
    updateCategory: mutation<Results, Category>({
      query: updateCategoryMutation,
      invalidatesTags:["Categories"],
    }),
  }),
})


// selectores



//selectores


 export const {useGetCategoriesQuery, 
useDeleteCategoryMutation,
useCreateCategoryMutation,
useUpdateCategoryMutation,
useGetCategoryQuery}
=categoriesApiSlice


