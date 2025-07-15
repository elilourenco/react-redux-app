import { Box, Button, FormControl, FormControlLabel, 
    FormGroup, Grid, Paper, Switch, TextField,Typography } from "@mui/material"

import { Category, } from "../categorySlice";
import { useState } from "react";
import { Link } from "@mui/icons-material";
    
    
    <Paper>
            <Box p={2}>
                <Box mb={2}>
                    <Typography variant="h4">Create Category</Typography>
                </Box>
            </Box>


            <Box p={2}>  


                <form >
                    <Grid container spacing={3}>

                        <Grid  size={{xs:12}}>
                            <FormControl fullWidth>
                                <TextField 
                                    required
                                    name="name"
                                    label="Name"
                                    value={category.name}
                                    disabled={isdisabled}
                                    onChange={handleChange}
                                />
                            </FormControl>

                        </Grid> 

                        <Grid size={{xs: 12}} >
                            <FormControl fullWidth>
                                <TextField
                                required
                                name="Descrition"
                                label="Description"
                                value={category.name}
                                disabled={isdisabled}
                                onChange={handleChange}
                                 />
                            </FormControl>

                        </Grid>

                        <Grid size={{xs:12}} >
                            <FormGroup>
                                <FormControlLabel
                                    control={
                                        <Switch
                                        name="is_active"
                                        color="secondary"
                                        checked ={category.is_active}
                                        aria-label="Toggle switch"
                                    
                                    />
                            }
                             
                            label="Active"
                            />                      
                            
                            </FormGroup>

                        </Grid>

                        <Grid size={{xs:12}} >
                            <Box display="flex" gap={2}>
                                <Button  variant="contained" component={Link} to="/categories">
                                   Back
                                 
                                </Button>

                                <Button 
                                type="submit"
                                variant="contained"
                                color="secondary"
                                disabled={isdisabled}
                                >
                                
                                Save
                                    
                                </Button>
                            </Box>
                        </Grid>
                        


                    </Grid>
                </form>
 
            </Box>
        </Paper>