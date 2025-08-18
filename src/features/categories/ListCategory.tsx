
import { Box,Button} from "@mui/material"
import { useDeleteCategoryMutation, useGetCategoriesQuery } from "./categorySlice";
import { Link } from "react-router-dom";
import {  GridFilterModel,} from '@mui/x-data-grid';
import { useSnackbar } from "notistack";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import { CategoriesTable } from "./components/CategoryTable";


function CategoryList(){
    const [rowPerPage] = useState([10, 20, 50]);
    
    const [page, setPage] = useState(1);
    const [perPage] = useState(10);
    const [search,setSearch] = useState("");
    const options={perPage, search, page}

    const {data, isFetching , error} = useGetCategoriesQuery(options)
    
    console.log(data)
    const [deleteCategory, deleteCategoryStatus] =  useDeleteCategoryMutation()

   

    const dispatch= useAppDispatch();
    const {enqueueSnackbar} = useSnackbar()

  function handleOnPageChange(page: number) {
    setPage(page +1);
  }

   function handleFilterChange(filterModel: GridFilterModel) {
    if(filterModel.quickFilterValues?.length) {
      const search= filterModel.quickFilterValues.join("")
      setSearch(search)
    }
    return setSearch("");

   }
  function handleOnPageSizeChange(perPage: number) {
    setPage(perPage)
  }


 async function  handleDeleteCategory(id: string) {
    await deleteCategory({id});
}
useEffect(()=>{
    if(deleteCategoryStatus.isSuccess){
        enqueueSnackbar(`Category Delete`,{variant:"success"})
    }

    if(deleteCategoryStatus.isError){
        enqueueSnackbar(`Error deleting category`,{variant:"error"})
    }


},[deleteCategoryStatus, enqueueSnackbar]
)

return (
    <Box maxWidth="lg"sx={{mt:4,mb:4}}>
        <Box display="flex" justifyContent={"flex-end"}>
          <Button
            variant="contained"
            color="secondary"
            component={Link}
            to="/categories/create"
            style={{marginBottom:"1rem"}}
            > 
            New category

          </Button>
        </Box>
        

          <CategoriesTable
          data={data}
          isFetching={isFetching}
          perPage={perPage}
          rowsPerPage={[10,20,50]}
          handleDelete={handleDeleteCategory}
          handleOnPageChange={handleOnPageChange} 
          handleOnPageSizeChange={handleOnPageSizeChange}
          handleFilterChange={handleFilterChange}
          />
            
        
    </Box>
);
}

export default CategoryList;

