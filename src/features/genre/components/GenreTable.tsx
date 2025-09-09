import { DataGrid, GridColDef, GridFilterModel } from "@mui/x-data-grid";
import {Genres } from "../../../types/Genre";
import { Box, IconButton, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { GridRenderCellParams } from "@mui/x-data-grid";

import DeleteIcon from "@mui/icons-material/Delete"

type Props ={
    data: Genres | undefined;
    isLoading?: boolean,
    perPage?:number,
    rowsPerPage: number,
    isFetching: boolean,
    page:number,
    handleOnPageChange:(page:number) => void;
    handleOnPageSizeChange:(pageSize: number) => void;
    handleFilterChange:(filterModel: GridFilterModel) => void;
    handleDelete:(id: string) => void;
}

export function GenresTable({
data,
perPage,
isFetching,
rowsPerPage,
handleOnPageChange,
handleOnPageSizeChange,
handleFilterChange,
handleDelete

}:Props)
{
    const componentProps ={
        toolbar:{
        showQuickFilter:true,
        quickFilterProps: {debounceMs: 500 },
    },
};

function  mapDataToGridRows(data: Genres){
    const {data: genres}=data;
    return genres.map((genre)=>({
        id: genre.id,
        name: genre.first_Name,
        categories: genre.categories
    }));
}

const  columns:GridColDef[]=[
    {
        field:"firstname", 
        headerName: "First_Name", 
        flex: 1, 
        renderCell:renderFirstNameCell
    },

    {
        field:"lastname", 
        headerName: "LastName", 
        flex: 1, 
        renderCell:renderLastNameCell
    },
     {
        field:"lastname", 
        headerName: "LastName", 
        flex: 1, 
        renderCell:renderActionsCell
    }

]


    function  renderFirstNameCell(rowData:GridRenderCellParams){
        return(
            <Link
             style={{textDecoration:"none"}}
             to={`/genres/edit/${rowData.id}`}

            >
            <Typography color="primary"> {rowData.value}</Typography>
            </Link>
        )
    }

    function  renderLastNameCell(rowData:GridRenderCellParams){
        return(
            <Link
             style={{textDecoration:"none"}}
             to={`/genres/edit/${rowData.id}`}

            >
            <Typography color="primary"> {rowData.value}</Typography>
            </Link>
        )
    }

    function  renderActionsCell(params: GridRenderCellParams){
        return(
            <IconButton
            color="secondary"
            onClick={()=> handleDelete(params.value)}
            aria-label="delete"
            data-testid="delete-button"

            >
            <DeleteIcon />

            </IconButton>
        )
    }
     

    const rows= data ? mapDataToGridRows(data):[];
    const rowCount = data?.meta?.total || 0;

    return(
        <Box sx={{ display: "flex", height: 600}}>
            <DataGrid
            rows={rows}
            pagination={true}
            columns={columns}
            filterMode="server"
            rowCount={rowCount}
            loading={isFetching}
            paginationMode="server"
            checkboxSelection={false}
            disableColumnFilter={true}
            disableColumnSelector={true}
            disableDensitySelector={true}
            onFilterModelChange={handleFilterChange}
            >

            </DataGrid>

        </Box>
    )
}