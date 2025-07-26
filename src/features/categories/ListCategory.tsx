
import { Box,Button} from "@mui/material"
import { useDeleteCategoryMutation, useGetCategoriesQuery } from "./categorySlice";
import { Link } from "react-router-dom";
import { DataGrid, GridFilterModel,} from '@mui/x-data-grid';
import { enqueueSnackbar, useSnackbar } from "notistack";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import { CategoriesTable } from "./components/CategoryTable";


function CategoryList(){
    const [rowPerPage] = useState([10, 20, 50]);

    const [perPage] = useState(10)
    const [search,setSearch] = useState("");
    const {data, isFetching } = useGetCategoriesQuery() 
    const [deleteCategory, deleteCategoryStatus] =  useDeleteCategoryMutation()

    const dispatch= useAppDispatch();
    const {enqueueSnackbar} = useSnackbar()

  function handleOnPageChange(page: number) {
    console.log("Page changed to: ", page);
  }

   function handleFilterChange(filterModel: GridFilterModel) {
    console.log("Filter model changed: ", filterModel);

   }
  function handleOnPageSizeChange(perPage: number) {
    console.log("Page size changed to: ", perPage);
  }


 async function  handleDeleteCategory(id: string) {
     await deleteCategory({id});
}
useEffect(()=>{
    if(deleteCategoryStatus.isSuccess){
        enqueueSnackbar(`Category Delete`,{variant:"success"})
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

