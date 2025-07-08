import { Box,Button,Typography } from "@mui/material"
import { selectCategories } from "./categorySlice";
import { useAppSelector } from "../../app/hooks";
import { Link } from "react-router-dom";
import { DataGrid, GridActionsColDef, GridColDef, GridRenderCellParams, GridRowsProp } from '@mui/x-data-grid';



function CategoryList(){
   
    const categoriesState = useAppSelector(selectCategories);

    const categories = categoriesState.categories.flat?.() ?? categoriesState.categories;


    const rows: GridRowsProp = categories.map((category) =>({
        id:category.id,
        name:category.name,
        description: category.description,
        is_active: false,
        createdAt: new Date(category.created_at).toLocaleDateString("en-US")
    }));

    

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', flex:1 },
  { field: 'name', headerName: 'Name', width: 300 },
  {field:"description", headerName:"Description", flex:1},

  {field:"isActive",
     headerName:"Active ", 
     flex:1, 
     type: "boolean",
    renderCell: renderIsActiveCell
   },
   {
    field: "createdAt",
    headerName: "Created At",
    flex:1
   }
];

 function renderIsActiveCell(rowData:GridRenderCellParams){
   
    return(
        <Typography color ={rowData.value ? "primary" :"secondary"}> 
        {rowData.value ? "Active ": "Inactive"}
        </Typography>
    )
}


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
            <DataGrid 

              

            rows={rows} 
            columns={columns} />
        </div>

        
    </Box>
);
}

export default CategoryList;

