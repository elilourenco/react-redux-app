import { createSlice } from "@reduxjs/toolkit";
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



const categories =[
    category,
    { ...category, id: 2, first_Name:"Apple"},
    { ...category, id: 3, first_Name:"Patch"},
    { ...category, id: 4, first_Name:"Banana"},
];


export const InitialState = {
    categories: categories,

};


const categoriesSlice = createSlice({
  name: "categories",
  initialState: InitialState,
  reducers: {
    createCategory(state, action) {
      state.categories.push(action.payload)
    },

    updateCategory(state, action) {
      // Find the index of the category to update
      const index= state.categories.findIndex((category) =>
         category.id === action.payload.id);

      if (index !== -1) {
    state.categories[index] = action.payload;
  }

    },
    deleteCategory(state, action) {
      const index= state.categories.findIndex(
        (category) =>category.id === action.payload.id
      )
      state.categories.splice(index,1)
    },
  },
});


// selectores

export  const selectCategories= (state:RootState) => state.categories;

//selectores
export const selectCategoryById = (state: RootState,id: string) =>{

 const category = state.categories.categories.find((category: Category) => category.id === Number(id));
 
 return (category || {
  id,
  first_Name: "",
  last_Name: "",
  email: "",
  
})};
  

export default categoriesSlice.reducer;

export const { createCategory, updateCategory, deleteCategory } =
 categoriesSlice.actions;


 export const {useGetCategoriesQuery, 
useDeleteCategoryMutation,
useCreateCategoryMutation,
useUpdateCategoryMutation,
useGetCategoryQuery}
=categoriesApiSlice


