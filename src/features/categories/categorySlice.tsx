import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../redux/store";

interface Category{
    id:string;
    name: string,
    is_active:boolean,
    created_at: Date,
    update_at:Date,
    deleted_at:null | string
    description:null |string,
}


const category:Category ={
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
    {  ...category, id:"C",name:"Banana"},
];


export  const InicialState = {
    categories:[category]

}



const categoriesSlice = createSlice({
  name: 'categories',
  initialState: InicialState,
  reducers: {
    createCategory(state, action) {},
    updateCategory(state, action) {},
    deleteCategory(state, action) {},
  },
})

export const selectcategories= (state:RootState) => state.categories

export default categoriesSlice.reducer;
