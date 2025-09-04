import React from "react";
import { Category } from "../../../types/Category";
import { Autocomplete, Box, Button,
     FormControl, 
     FormControlLabel, 
     FormGroup, 
     FormLabel, 
     Grid, Radio, 
     RadioGroup, 
     TextField } from "@mui/material";
import { Paper } from "@mui/material";
import { Link } from "react-router-dom";
import { Genre } from "../../../types/Genre";

 export type GenreFormProps = {
    genre: Genre;
    categories?: Category[];
    isLoading: boolean;
    isDisabled: boolean;
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
    handleChange: (event: React.ChangeEvent<HTMLInputElement >) => void;
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
                                    value={genre.first_Name}
                                    disabled={isDisabled}
                                    onChange={handleChange}
                                   
                                />
                            </FormControl>

                    </Grid> 
                    <Grid size={{xs:12}} >
                            <Autocomplete
                            multiple
                            loading={isLoading}
                            disablePortal
                            options={categories || []}
                            value={genre.categories || []}
                            disabled={isDisabled || !categories}
                            renderOption={(props, option) => (
                                <li {...props} key={option.id}>
                                    {option.first_Name} 
                                </li>
                            )}
                            onChange={(_, value) => {
                                handleChange({ target: { name: "categories", value } } as any);
                            }}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="Categories"
                                    data-testid="categories-input"
                                />
                            )}
                        />
                            
                        <Grid size={{xs:12}} >
                            <FormGroup>
                                <FormLabel>Type</FormLabel>   
                                <RadioGroup
                                aria-labelledby="type-label"
                                defaultValue="Director"
                                name="type"
                                value={genre.first_Name}
                                onChange={handleChange}>
                                    <FormControlLabel value={2} control={<Radio />} label="Diretor"/>
                                </RadioGroup>
                                               
                            
                            </FormGroup>

                        </Grid>

                        <Grid size={{xs:12}} >
                            <Box display="flex" gap={2}>
                                <Button  
                                    variant="contained" 
                                    component={Link} 
                                    to="/cast-members">
                                   Back
                                 
                                </Button>

                                <Button 
                                type="submit"
                                variant="contained"
                                color="secondary"
                                disabled={isDisabled || isLoading}
                                >
                                
                                {isLoading ?  "Saving..." : "Save"}
                                    
                                </Button>
                            </Box>
                        </Grid>
                                                
                    </Grid>
                    </Grid>
                </form>
 
            </Box>
            </Paper>
        
    )
}