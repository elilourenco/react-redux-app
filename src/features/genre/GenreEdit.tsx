import { useSnackbar } from "notistack"
import { useParams } from "react-router-dom"
import { useGetCategoriesQuery ,inicialState as  genreInintalState,
    useGetGenreQuery, useUpdateGenreMutation } from "./genreSlice"
import React, { useEffect, useState } from "react"
import { Genre } from "../../types/Genre"
import { Paper } from "material-ui"
import { Box, Typography } from "@mui/material"
import { GenreForm } from "./components/GenreForm"


export const  GenreEdit =()=>{
    const id = useParams<{id:string}>().id
    const { enqueueSnackbar}= useSnackbar();
    const {data: genre, isFetching}= useGetGenreQuery({ id: id ?? "" })
    const  {data: categories} = useGetCategoriesQuery();
    const [genreState,setGenreState] = useState<Genre>(genreInintalState);
    const [updateGenre, { isLoading, isSuccess, isError }] = useUpdateGenreMutation();


    function  handleChange(event:React.ChangeEvent<HTMLInputElement>){
        const {name, value} = event.target;
        setGenreState((state) =>({ ...state, [name]:value}))
    }

    async function handleSubmit(event:React.FormEvent<HTMLFormElement>){
        event.preventDefault();
         await updateGenre({
            id: genreState.id,
            first_Name:genreState.id,
            categories_id: genreState.categories?.map((category) => String(category.id))

        })

     }

    useEffect(()=>{
        if(genre){
            setGenreState(genre.data);
        }
     },[genre])

    useEffect(()=>{
        if(isSuccess){
             enqueueSnackbar(`Genre updated`,{variant: "success"})
        }

        if(isError){
             enqueueSnackbar(`Error updating genre`,{variant:"success"})
        }

     }, [isSuccess, isError, enqueueSnackbar])
     
    

    return(
        <Box>
            <Paper>
                <Box p={2}>
                    <Box mb={2}>
                        <Typography variant="h4">
                            Edit Genre

                        </Typography>

                    </Box>

                </Box>

                <GenreForm
                genre={genreState}
                categories={categories?.data}
                isLoading={isLoading || isFetching}
                isDisabled={isLoading}
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                >

                </GenreForm>
            </Paper>
        </Box>
    )
}

