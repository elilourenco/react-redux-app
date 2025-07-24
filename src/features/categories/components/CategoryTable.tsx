import { GridFilterModel } from "@mui/x-data-grid";
import { Results } from "../../../types/Category"

 type Props ={
    data: Results | undefined;
    perPage: number;
    isFetching: boolean;
    rowsPerPage?:number;


    handleOnPageChange:(page:number) => void;
    handleFilterChange:(filterModel:GridFilterModel) => void ;
    handleOnPageSizeChange:(pagesize: number) => void;
    handleDeleteCategory:(id:number) => void;
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



 } : Props) {}