import { Box,Paper,Typography } from "@mui/material"
import { Category, selectCategoryById, useCreateCategoryMutation,  } from "./categorySlice";
import React, { useEffect, useState } from "react";
import { CategoryForm } from "./components/CategoryForm";
import { useAppSelector } from "../../app/hooks";
import { useParams } from "react-router-dom";
import { useSnackbar } from "notistack";


export const CategoryCreate =() =>{
    const id= useParams().id || "";

    const {enqueueSnackbar} = useSnackbar();
    const [createCategory,status] = useCreateCategoryMutation();
    const [isdisabled, setIsdisabled] = useState(false)
    const [isLoading,setIsLoanding] =useState(false)
    const  category= useAppSelector((state) => selectCategoryById(state,id))

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
    };});

    // function submit
    async function handleSubmit(e:React.FormEvent<HTMLFormElement>){
        e.preventDefault();
         await createCategory(categoryState);
        
    }
    const handleChange =(e: React.ChangeEvent<HTMLInputElement>)=> {
    const {name, value} = e.target;
    setCategoryState({ ...categoryState,[name]:value})}

    const handleToggle=(e: React.ChangeEvent<HTMLInputElement>)=>{
        const {name, checked} = e.target;
        setCategoryState({ ...categoryState,[name]:checked})
    }


    useEffect(() => {

        if(status.isSuccess) {
            setIsdisabled(true);
            enqueueSnackbar("Category created sucessfully",{variant:"success"})
        }

            if(status.error){
                 enqueueSnackbar("Error creating category",{variant:"error"})

            }
            

    },[ enqueueSnackbar, status.error, status.isSuccess] )


    return(

    
    <Box>
        <Paper>
            <Box p={2}>
                <Box mb={2}>
                    <Typography variant="h4">Create Category</Typography>
                </Box>
            </Box>


            <CategoryForm
                category={categoryState}
                isdisabled={isdisabled}
                isLoading={isLoading}
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                handleToggle={handleToggle}
            />              
        </Paper>
    </Box>
    )
}

export default CategoryCreate;



