import {DataGrid, GridColDef, GridFilterModel, GridRenderCellParams } from "@mui/x-data-grid";
import { Results } from "../../../types/CastMembers";
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
 

 export function CastMembersTable({
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
{
    flex:1, 
    field:"name",
    headerName:"Name",
    renderCell: renderNameCell
   },
   {
    flex:1,
    field: "type",
    headerName: "Type",
    renderCell: renderTypeCell
   },

   {
    
    flex:1 ,
    field: "id",
    headerName: "Actions",
    renderCell:renderActionsCell
   }
];


function  mapDatatoGridRows(data: Results){
    const { data: castMembers} = data;
      return castMembers.map((castMember) =>({
        id:castMember.id,
        name:castMember.name,
        type:castMember.type 

    }));
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
            to={`/cast-members/edit/${rowData.id}`}
        >
            <Typography>{rowData.value}</Typography>
        </Link>
    )
}

function renderTypeCell(rowData:GridRenderCellParams){
   
    return(
        <Typography color = "primary">

        {rowData.value === 1 ? "Director" :"Actor"}
        </Typography>
    )
}


const rows = data ? mapDatatoGridRows(data):[];
const rowCount = data?.meta.total ||0
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






