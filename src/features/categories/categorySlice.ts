import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../redux/store";
import { CategoryParams, Results } from "../../types/Category";
import { apiSlice } from "../api/apiSlice";


export interface Category{
  id:string;
  name: string;
  is_active:boolean;
  created_at: Date;
  updated_at:Date;
  deleted_at:null| Date;
  description:null|string;
}


const endpointUrl= "/categories?page=1";

function parseQueryParams(params: CategoryParams) {
  const query = new URLSearchParams();

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


function getCategories({page =1, perPage = 10, search = "", isActive= true}){
    const params = {page, perPage, search};

    return `${endpointUrl}?${parseQueryParams(params)}`;
}


function createCategoryMutation(category: Category) {
  return {
    url: endpointUrl,
    method: "POST",
    body: category,
  };
}
function  deleteCategoryMuatation(category: Category){
  return {
    url:`${endpointUrl}/${category.id}`,
    method: "DELETE",
  }
} 


export const  categoriesApiSlice = apiSlice.injectEndpoints({
    endpoints: ({query, mutation}) =>({
    getCategories:query<Results, CategoryParams >({
    query: getCategories,
    providesTags:["Categories"],
    }),
    createCategory : mutation<Results, Category>({
    query:createCategoryMutation,
    invalidatesTags: ["Categories"],
        }),
    deleteCategory: mutation<Results, { id: string}>({
      query: deleteCategoryMuatation,
      invalidatesTags:["Categories"],
    })
  }),
})



const category:Category={
  id:"O",
  name :"Olive",
  description: "Olive is a versatle fruit that is used to make olive oil",
  is_active:true,
  deleted_at:null,
  created_at:new Date(),
  updated_at:new Date(),


};


const categories =[
    category,
    { ...category, id:"A", name:"Apple"},
    { ...category, id:"B", name:"Patch"},
    { ...category, id:"C",name:"Banana"},
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
      const index= state.categories.findIndex((category: Category) =>
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

 const category =state.categories.categories.find((category:Category) =>category.id === id)
 
 return  ( category  || {
  id: "",
  name:"",
  description:"",
  is_active:false,
  deleted_at: null,
  created_at: "",
  updated_at:"",
})};
  

export default categoriesSlice.reducer;

export const { createCategory, updateCategory, deleteCategory } =
 categoriesSlice.actions;


 export const {useGetCategoriesQuery, 
useDeleteCategoryMutation,
useCreateCategoryMutation}
=categoriesApiSlice


