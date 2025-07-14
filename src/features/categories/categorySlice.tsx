import { createSelector, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../redux/store";

interface Category{
    id:string;
    name: string;
    is_active:boolean;
    created_at: Date;
    update_at:Date;
    deleted_at:null|string;
    description:null|string;
}


const category:Category={
    id:"O",
    name :"Olive",
    description: "Olive is a versatle fruit that is used to make olive oil",
    is_active:true,
    deleted_at:null,
    created_at:new Date(),
    update_at:new Date(),


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
    createCategory(state, action) {},
    updateCcreateCategory(state, action) {},
    deleteCcreateCategory(state, action) {},
  },
});



// selectores

export  const selectCategories= (state:RootState) => state.categories;

//selectiores
export const selectCategoryById = (state: RootState,id: string) =>{

 const category = state.categories.find((category) => category.id ===id) ;
 
 return  (category  || {
  id: "",
  name:"",
  description:"",
  is_active:false,
  deleted_at: null,
  created_at: "",
  update_at:"",
})};
  

export default categoriesSlice.reducer;



