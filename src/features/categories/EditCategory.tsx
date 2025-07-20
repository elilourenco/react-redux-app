
import { Box, Paper,Typography } from "@mui/material"
import { useParams }from "react-router-dom";
import { Category, selectCategoryById, updateCategory } from "./categorySlice";
import React, { useState } from "react";
import { CategoryForm } from "./components/CategoryForm";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { useSnackbar } from "notistack";



 const CategoryEdit =()=>{

    const id = useParams().id || "";
    const [isdisabled, setIsdisabled] = useState(false);
    const category = useAppSelector((state) => selectCategoryById(state,id ))

    const [categoryState, setCategoryState]=useState<Category>(()=>{
        if (!category) {
    
    return {
      id: "",
      name: "",
      description: "",
      is_active: false,
      deleted_at: null,
      created_at: new Date(),
      updated_at: new Date(),
    };
 }

 return {
    ...category,
    created_at: new Date(category.created_at),
    updated_at: new Date(category.updated_at),
    deleted_at: category.deleted_at ? new Date(category.deleted_at) : null
  };
});

const dispatch = useAppDispatch();
const {enqueueSnackbar} = useSnackbar()

async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    dispatch(updateCategory(categoryState));
    enqueueSnackbar("Success Updating the Category!",{variant:"success"})
  
}
    
    const handleChange =(e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    console.log(name,value)
    setCategoryState({ ...categoryState,[name]:value})

    }

    const handleToggle= (e: React.ChangeEvent<HTMLInputElement>) =>{
        const {name, checked} = e.target;
        setCategoryState({ ...categoryState,[name]:checked})
    }
    return(

    
        <Box>
        <Paper>
            <Box p={2}>
                <Box mb={2}>
                    <Typography variant="h4"> Edit category</Typography>
                </Box>
            </Box>
            <CategoryForm
                category={categoryState}
                isdisabled={isdisabled}
                isLoading={false}
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                handleToggle={handleToggle}
            />
        </Paper>
        </Box>
    )
}

export default CategoryEdit;

