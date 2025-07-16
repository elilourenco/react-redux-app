
import { Box, Paper,Typography } from "@mui/material"
import { useParams } from "react-router-dom";

import { Category } from "./categorySlice";
import { useState } from "react";
import { CategoryForm } from "./components/CategoryForm";



 const CategoryEdit =()=>{

    const id = useParams().id || "";
    const  [isdisabled, setIsdisabled] = useState(false);
const [category, setCategory]= useState<Category>({
  
    id: "",
    name: "",
    is_active:false,
    created_at: new Date(),
    updated_at: new Date(),
    deleted_at: null,
    description:"",
});
    const handleChange =(e: any) => {}

    const handleToggle= (e:any) =>{}
    return(

    
        <Box>
        <Paper>
            <Box p={2}>
                <Box mb={2}>
                    <Typography variant="h4"> Edit category</Typography>
                </Box>
            </Box>
            <CategoryForm
                category={category}
                isdisabled={isdisabled}
                isLoading={false}
                onSubmit={()=>{}}
                handleChange={handleChange}
                handleToggle={handleToggle}
            />
        </Paper>
        </Box>
    )
}

export default CategoryEdit;

