import { Box,Button,IconButton,Toolbar,Typography } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
import { selectCategories } from "./categorySlice";
import { useAppSelector } from "../../app/hooks";
import { Link } from "react-router-dom";
import { DataGrid, GridColDef, 
    GridRenderCellParams, 
    GridRowsProp
} from '@mui/x-data-grid';


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

     const componentProps={toolbar:{
                showQuickFilter:true,
                quickFilterProps:{debounceMs:500}
                
            }}
    

const columns: GridColDef[] = [
  
  { field: 'name', headerName: 'Name', flex:1,
    renderCell: renderNameCell,
   },
  

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
   },

   {
    field:"id", headerName:"Actions", flex:1 , renderCell:renderActionsCell
   }
];


function renderActionsCell(params:GridRenderCellParams){

    return( 

        <IconButton
            color="secondary"
            onClick={() => console.log("clicked")}
            aria-label="delete"
        >
            <DeleteIcon />

        </IconButton>
    )
}


function renderNameCell(rowData: GridRenderCellParams) {
    return(
        <Link
            style={{ textDecoration: "none" }}
            to={`/categories/edit/${rowData.id}`}
        >
            <Typography>{rowData.value}</Typography>
        </Link>
    )
}

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


        <Box style={{ height: 300, width: '100%' }}>
            <DataGrid 
               showToolbar={true}
            disableColumnSelector={true}
            disableColumnFilter={true}
            disableDensitySelector={true}
            disableRowSelectionOnClick={true}
            rows={rows} 
            columns={columns}
            slotProps={componentProps}
                
            
            />
        </Box>

        
    </Box>
);
}

export default CategoryList;

