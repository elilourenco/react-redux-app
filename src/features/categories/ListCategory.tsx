import { Box,Button,Typography } from "@mui/material"
import { selectCategories } from "./categorySlice";
import { useAppSelector } from "../../app/hooks";
import { Link } from "react-router-dom";
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';



function CategoryList(){
   
    const categoriesState = useAppSelector(selectCategories);

    const categories = categoriesState.categories.flat?.() ?? categoriesState.categories;

    const rows: GridRowsProp = [
  { id: 1, name: 'Data Grid', description: 'the Community version' },
  { id: 2, name: 'Data Grid Pro', description: 'the Pro version' },
  { id: 3, name: 'Data Grid Premium', description: 'the Premium version' },
];


const columns: GridColDef[] = [
  { field: 'name', headerName: 'Product Name', width: 200 },
  { field: 'description', headerName: 'Description', width: 300 },
];

return (
    <Box maxWidth="lg" sx={{mt:4, mb:4}}>
        <Box display="flex" justifyContent={"flex-end"}>
            <Button
            variant="contained"
            color="secondary"
            component={Link}
            to="/category/create"
            style={{marginBottom:"1rem"}}
            > 
            New category

            </Button>
        </Box>
        

           {/* {categories.map((category: any) => (
                <Typography key={category.id}>{category.name}</Typography>
            ))}
        */}


        <div style={{ height: 300, width: '100%' }}>
            <DataGrid rows={rows} columns={columns} />
        </div>

        
    </Box>
);
}

export default CategoryList;

