import React from "react";
import { Category } from "../../../types/Category";
import { Autocomplete, Box, Button, FormControl, FormControlLabel, FormGroup, FormLabel, Grid, Radio, RadioGroup, TextField } from "@mui/material";
import { Paper } from "@mui/material";
import { Link } from "react-router-dom";

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
                            multiple
                            loading={isLoading}
                            disablePortal
                            options={[]}
                           value={genre.email}
                           disabled={isDisabled || !categories}
                           renderInput={(params) => <TextField {...params}
                           label="Categories"
                            data-testid= "categories-input" />}
                        />
                            
                        <Grid size={{xs:12}} >
                            <FormGroup>
                                <FormLabel>Type</FormLabel>   
                                <RadioGroup
                                aria-labelledby="type-label"
                                defaultValue="Director"
                                name="type"
                                value={genre.name}
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