import React from "react";
import { Category } from "../../../types/Category";
import { Autocomplete, Box, FormControl, Grid, TextField } from "@mui/material";
import { Paper } from "material-ui";

 export type GenreFormProps = {
    genre: any;
    categories?: Category[];
    isLoading: boolean;
    isDisabled: boolean;
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
    handleChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}   


export function GenreForm({
    genre,
    categories,
    isLoading = false,
    isDisabled = false,
    handleSubmit,
    handleChange
}:GenreFormProps){
    return(
        <Paper>
      
        <Box p={2}>  
            <form onSubmit={handleSubmit} >
                <Grid container spacing={3}>

                    <Grid  size={{xs:12}}>
                        <h1>Ola</h1>
                        <FormControl fullWidth>
                            <TextField 
                                required
                                    name="name"
                                    label="Name"
                                    value={genre.name}
                                    disabled={isDisabled}
                                    onChange={handleChange}
                                   
                                />
                            </FormControl>

                        </Grid> 
                        <Grid size={{xs:12}} >
                            <Autocomplete
                            disablePortal
                            options={[
                                { label: 'The Shawshank Redemption', year: 1994 },
                                { label: 'The Godfather', year: 1972 },
                                { label: 'The Godfather: Part II', year: 1974 },
                                { label: 'The Dark Knight', year: 2008 },
                            ]}
                           sx={{ width: 300 }}
                           renderInput={(params) => <TextField {...params} label="Movie" />}
                        />
                            
                        </Grid>
                        
                    </Grid>
                </form>
 
            </Box>
            </Paper>
        
    )
}