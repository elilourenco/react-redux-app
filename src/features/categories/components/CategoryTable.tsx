import {DataGrid, GridColDef, GridFilterModel, GridRenderCellParams } from "@mui/x-data-grid";
import { Results } from "../../../types/Category"
import { GridRenderEditCellParams } from "@mui/x-data-grid";
import { IconButton } from "@mui/material";
import { Box, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from "react-router-dom";


type Props ={
    data: Results | undefined;
    perPage: number;
    isFetching: boolean;
    rowsPerPage?:number[];

    handleOnPageChange:(page:number) => void;
    handleFilterChange:(filterModel:GridFilterModel) => void ;
    handleOnPageSizeChange:(pagesize: number) => void;
    handleDelete:(id:string) => void;
};
 

 export function CategoriesTable({
    data,
    perPage,
    isFetching,
    rowsPerPage,
    handleOnPageChange,
    handleFilterChange,
    handleOnPageSizeChange,
    handleDelete,

} : Props) {
    const componentProps ={
        toolbar:{
        showQuickFilter: true,
        quickFilterProps:{debounceMs:500},
    },
};
 


const columns: GridColDef[] = [
  
  { field: 'first_Name', 
    headerName: 'first_Name',
     flex:1,
    renderCell: renderFirstNameCell,
   },
  
  {field:"last_Name",
    headerName:"last_Name", 
    flex:1, 
    
    renderCell: renderLastNameCell
   },
   
   {
    field: "email",
    headerName: "email",
    flex:1,
    renderCell: renderEmailCell
   },

   {
    field:"id", headerName:"Actions", 
    flex:1 ,
    type: "string",
    renderCell:renderActionsCell
   }
]; 


function  mapDatatoGridRows(data: Results){
    const { data: categories} = data;
    if( categories && Array.isArray(categories)){

    
      return  categories.map((category) =>({
        id: category.id,
        first_Name:category.first_Name,
        last_Name:category.last_Name,
        email:category.email,

    }));

    return [];

}
}


 function renderActionsCell(params:GridRenderEditCellParams){
    return( 

        <IconButton
            color="secondary"
            onClick={() => handleDelete(params.value)}
            aria-label="delete"
        >
        <DeleteIcon />

        </IconButton>
    )
}


function renderFirstNameCell(rowData: GridRenderCellParams) {
    return(
        <Link
            style={{ textDecoration: "none" }}
            to={`/categories/edit/${rowData.id}`}
        >
            <Typography>{rowData.value}</Typography>
        </Link>
    )
}

function renderLastNameCell(rowData:GridRenderCellParams){
   
    return(
        <Link style={{textDecoration:"none"}} 
        to={`/categories/edit/${rowData.id}`}
        >
        <Typography>{rowData.value}</Typography>
        </Link>
    )
}  

function renderEmailCell (rowData:GridRenderCellParams){
    return(
        <Link style={{textDecoration:"nome"}}
            to={`/categories/edit/${rowData.id}`}
            >
            <Typography> {rowData.value}</Typography>
        </Link>
    )
}

const rows = data ? mapDatatoGridRows(data):[];


const rowCount = data?.meta?.total || 0
        return(
            <Box sx={{ display:"flex", height:"600"}}>
                <DataGrid rows={rows} 
                columns={columns}
                initialState={{
                    pagination:{
                        paginationModel:{
                            pageSize:perPage
                        }
                    }
                }} 
                pageSizeOptions={rowsPerPage}
                disableColumnSelector={true}
                disableColumnFilter={true}
                disableDensitySelector={true}
                disableRowSelectionOnClick={true}
                loading={isFetching}
                rowCount={rowCount}
                filterMode="server"
                paginationMode="server"
                slotProps={componentProps}
                //onPageChange={handleOnPageChange}
                //onfiltermodelchange={handleFilterChange}
                //onPageSizeChange={handleOnPageSizeChange}
                checkboxSelection={false}/>

                

            </Box>
        )

}






