import { Box, Typography } from "@mui/material"
import { Paper } from "@mui/material"
import { GenreForm } from "./components/GenreForm"
import { useSnackbar } from "notistack"
import { useCreateGenreMutation, inicialState as
     genreInitialState, useGetCategoriesQuery } from "./genreSlice"
import { useEffect, useState } from "react"
import { Genre } from "../../types/Genre"

export const GenreCreate = () => {

    const {enqueueSnackbar} = useSnackbar();
    const {data: categories} = useGetCategoriesQuery();
    const [CreateGenre, status] = useCreateGenreMutation();
    const [genreState, setGenreState]= useState<Genre>(genreInitialState);

    const handleChange =(event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setGenreState({
            ...genreState,
            [name]: value
        })
    }

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault();
        // TODO: call the api to create the genre
        
            await CreateGenre({
                id: genreState.id,
                first_Name: genreState.first_Name,
                
                
            });
        enqueueSnackbar('Genre created successfully', {variant: 'success'});
        setGenreState(genreInitialState);
        
    }

    useEffect(() => {


    if(status.isSuccess){
        enqueueSnackbar('Genre to create successfuly', { variant: 'success'});
    }

    if(status.isError){
        enqueueSnackbar('Error to create genre', { variant: 'error'});
    }
}, [status, enqueueSnackbar]);


    return(
        <Box>
            <Paper>
                <Box p={2}>
                    <Box mb={2}>
                        <Typography variant="h4" >
                            Genre Create Component
                        </Typography>
                    </Box>
                </Box>
            </Paper>

            {/* genre form will go here */}
            <GenreForm
            genre={genreState}
            categories={categories?.data}
            isLoading={status.isLoading}
            isDisabled={status.isLoading}
            handleSubmit={handleSubmit}
            handleChange={handleChange}

            />
        </Box>
    )
}   