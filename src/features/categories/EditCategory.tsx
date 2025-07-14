
import { Box, Button, FormControl, FormControlLabel, 
    FormGroup, Grid, Paper, Switch, TextField,Typography } from "@mui/material"
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { selectCategoryById } from "./categorySlice";
import { useState } from "react";
import { Link } from "@mui/icons-material";



 const CategoryEdit =() =>{

    const id = useParams().id || "";
    const  [isdisabled, setIsdisabled] = useState(false)
    const category= useAppSelector((state)=>selectCategoryById(state,id))

    const handleChange =(e: any) => {
    }

    const handleToggle= (e:any) =>{

    }
    return(

    
    <Box>
        <Paper>
            <Box p={2}>
                <Box mb={2}>
                    <Typography variant="h4"> Edit category</Typography>
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
    </Box>
    )
}

export default CategoryEdit;

