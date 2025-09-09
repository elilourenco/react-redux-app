import { GridFilterModel, QuickFilter } from "@mui/x-data-grid";
import { Genre } from "../../../types/Genre";
import { GridToolbar } from "@mui/x-data-grid/internals";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

type Props ={
    data: Genre | undefined;
    isLoading?: boolean,
    perPage:number,
    rowsPerPage: number,
    rowsPerpage: number,
    handleOnPageChange:(page:number) => void;
    handleOnPageSizeChange:(pageSize: number) => void;
    handleFilterChange:(filterModel: GridFilterModel) => void;
    handleDelete:(id: number) => void;
}

export function GenresTable({
data,
perPage,
isFetching,
rowPerPage,
handleOnPageSize,
handleOnPageSizeChange,
handleDelete

})
{
    const  componentProps ={
         toolbar:{
            showQuickFilter:true,
            quickFilterProps: {debounceMs: 500 },
        },
    }

    const  columns: GridColDef[]=[
        {field:"name", headerName: "Name", flex: 1, renderCell:renderNameCell}
    ]

     function  renderNameCell(params:GridCellParams){
        return(
            <Link
             style={{textDecoration}:"none"}
             to={`/genres/edit/${rowData.id}`}

            >
            <Typography color="primary"> {rowData.value}

            </Typography>
            </Link>
        )
     }

    const rows= data ? mapDataToGridRows(data):[],
     const rowCount = data?.meta.total || 0;

    return(
        <Box sx={{ display: "flex", height: 600}}>
            <DataGrid
            rows={rows}
            pagination={true}
            columns={colums}
            pageSize={perPage}
            filterMode="server"
            rowCount={rowCount}
            loading={isFetching}
            paginationMode="server"
            checkboxSelection={false}
            disableColumnFilter={true}
            disableColumnSelector={true}
            disableDensitySelector={true}
            rowsPerPageOptions={rowPerPage}
            componentsProps={componentProps}
            onPageChange={handleOnPageChange}
            componets={{ Toolbar: GridToolbar}}
            onFilterModelChange={handleFilterChange}
            onPageSizeChange={handleOnPageSizeChange}

            >

            </DataGrid>

        </Box>
    )
}