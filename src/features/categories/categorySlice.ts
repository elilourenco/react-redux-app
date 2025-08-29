import { RootState } from "../../redux/store";
import { CategoryParams, Results } from "../../types/Category";
import { apiSlice } from "../api/apiSlice";

export interface Category{
  id: string |number;
  first_Name: string;
  last_Name:string;
  email: string;
  
}

type GetCategoriesParams ={
  id: string| number,
  page ? : number,
  perPage ?: number,
  
}


const endpointUrl= "/";


function parseQueryParams(params: CategoryParams) {
  const query = new URLSearchParams(
    Object.entries(params).filter(([_,value]) => value !== "" && value != null)
  );

  if (params.page) {
    query.append("page", params.page.toString());
  }

  if (params.perPage) {
    query.append("per_page", params.perPage.toString());
  }

  if (params.serach){
    query.append("search", params.serach);
  }
  if (params.isActive !== undefined) {
    query.append("is_active", params.isActive.toString());
  }
  return query.toString();
}


function getCategories({ id, page =1, perPage = 10} : GetCategoriesParams){
  const params = { id,page, perPage};

    const baseUrL= id ? `${endpointUrl}/users/${id}`: endpointUrl;

    return `${baseUrL}?${parseQueryParams(params)}`;
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

export  const selectCategories= (state:RootState) => state.categories;

//selectores


 export const {useGetCategoriesQuery, 
useDeleteCategoryMutation,
useCreateCategoryMutation,
useUpdateCategoryMutation,
useGetCategoryQuery}
=categoriesApiSlice


