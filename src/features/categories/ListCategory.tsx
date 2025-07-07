import { Box,Typography } from "@mui/material"
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { selectCategories } from "./categorySlice";



function CategoryList(){
    // If selectCategories returns { categories: Category[] }, extract the array:
    const categoriesState = useSelector((state: RootState) => selectCategories(state));
 
    const categories = categoriesState.categories ?? [];

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

