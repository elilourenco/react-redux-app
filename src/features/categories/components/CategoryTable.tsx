import {GridColDef, GridFilterModel, GridRenderCellParams } from "@mui/x-data-grid";
import { Results } from "../../../types/Category"
import { GridRenderEditCellParams } from "@mui/x-data-grid";
import { IconButton } from "material-ui";
import { Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from "react-router-dom";

type Props ={
    data: Results | undefined;
    perPage: number;
    isFetching: boolean;
    rowsPerPage?:number;

    handleOnPageChange:(page:number) => void;
    handleFilterChange:(filterModel:GridFilterModel) => void ;
    handleOnPageSizeChange:(pagesize: number) => void;
    handleDelete:(id:number) => void;
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
            quickFilterProps:{debounceMs:500}
        }
    }

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
    field:"id", headerName:"Actions", 
    flex:1 ,
    type: "string",
    renderCell:renderActionsCell
   }
];


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





export default CategoryList;
