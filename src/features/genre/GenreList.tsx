import { Box, Button, Typography } from "@mui/material";
import { useSnackbar } from "notistack";
import { Link } from "react-router-dom";
import { useDeleteGenreMutation, useGetGenreQuery } from "./genreSlice";
import { useEffect, useState } from "react";
import { GenresTable } from "./components/GenreTable";
import { GridFilterModel } from "@mui/x-data-grid";

export default function  GenreList(){
 const {enqueueSnackbar} = useSnackbar();
 const [options, setOptions]= useState({
   page:1,
   search:"",
   perPage:10,
   rowsPerPage:[10,20,30]
 });

 const {data,isFetching, error}= useGetGenreQuery(options)
 const [deleteGenre, deleteStatus] = useDeleteGenreMutation();
 



 function handleOnPageChange(page:number){
   setOptions((state) =>({ ...state, page}))
 }

 function  handleOnPageSizeChange(perPage:number){
   setOptions((state) => ({...state,perPage}) )
 }

 function handleFilterChange( filterModel:GridFilterModel){
   if(!filterModel.quickFilterValues?.length){
      return  setOptions({...options, search:""})

   }

   const search = filterModel.quickFilterValues.join("");
   setOptions({ ...options, search});
 }
  async function handleDeleteGenre(id: string){
   await  deleteGenre({id});


  }

  useEffect(()=>{
  if( deleteStatus.isSuccess){
      enqueueSnackbar("Genre deleted successfully")
    }

   if( deleteStatus.error){
       enqueueSnackbar("Error",{ variant:"error"});
   }
   
  }, [deleteStatus, enqueueSnackbar])


  if(error){
   return <Typography>Something went strong</Typography>
  }

   return(
        <Box maxWidth="lg" sx={{mt:4 ,mb:4}} >
        <Box display="flex" justifyContent="flex-end">
            <Button 
            variant="contained"
            color="secondary"
            component={Link}
            to="/genres/create"
            style={{marginBottom:"1rem"}}
             >
               New Genre
                
            </Button>


        </Box>

        <GenresTable
        data={data}
        isFetching={isFetching}
        perPage={options.perPage}
        rowPerPage={[5,10,25]}
        handleOnPageChange={handleOnPageChange}
        handleOnPageSizeChange={handleOnPageSizeChange}
        handleFilterChange={handleFilterChange}

        />

        </Box>


        
     )
}