import { Box,Typography } from "@mui/material"
import { selectCategories } from "./categorySlice";
import { useAppSelector } from "../../app/hooks";



function CategoryList(){
   
    const categoriesState = useAppSelector(selectCategories);
    const categories = categoriesState.categories;
 
   
    return (
        <Box>
            <Typography variant="h3" component="h1">
                CategoryList List
            
                {categories.map((category) => (
                    <Typography key={category.id}>{category.name}</Typography>
                ))}

            </Typography>
        </Box>
    );
}

export default CategoryList;

