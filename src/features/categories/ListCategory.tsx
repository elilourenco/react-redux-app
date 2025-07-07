import { Box,Typography } from "@mui/material"
import { selectCategories } from "./categorySlice";
import { useAppSelector } from "../../app/hooks";


function CategoryList(){
   
    // If selectCategories returns { categories: Category[] }, extract the array:
    const categories = useAppSelector(selectCategories);

    return (
        <Box>
            <Typography variant="h3" component="h1">
                CategoryList List
            </Typography>
            {categories.map((category) => (
                <Typography key={category.id}>{category.name}</Typography>
            ))}
        </Box>
    );
}

export default CategoryList;

