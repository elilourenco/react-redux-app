import { Box, Button, FormControl, FormControlLabel, 
FormGroup, Grid, Paper, Switch, TextField} from "@mui/material"
import { Category, } from "../categorySlice";
import { Link as RouterLink} from "react-router-dom";


type Props = {
    category:Category;
    isdisabled?:boolean;
    isLoading?:boolean;
    handleSubmit:(e:React.FormEvent<HTMLFormElement>) => void;
    handleChange:(e:React.ChangeEvent<HTMLInputElement>) => void;
    handleToggle:(e:React.ChangeEvent<HTMLInputElement>) => void;

}


export  function CategoryForm ({
    category,
    isdisabled=false,
    isLoading=false,
    handleSubmit,
    handleChange,
    handleToggle,

}:Props) {
 return(
    <Paper>
        <Box p={2}>  
            <form onSubmit={handleSubmit} >
                <Grid container spacing={3}>

                    <Grid  size={{xs:12}}>
                        <FormControl fullWidth>
                            <TextField 
                                required
                                    name="first_Name"
                                    label="first_Name"
                                    value={category.first_Name}
                                    disabled={isdisabled}
                                    onChange={handleChange}
                                />
                            </FormControl>

                        </Grid> 

                        <Grid size={{xs:12}} >
                            <FormControl fullWidth>
                                <TextField
                                    required
                                    name="last_Name"
                                    label="last_Name"
                                    value={category.last_Name}
                                    disabled={isdisabled}
                                    onChange={handleChange}
                                />
                            </FormControl>

                        </Grid>

                                                <Grid size={{xs:12}} >
                            <FormControl fullWidth>
                                <TextField
                                    required
                                    name="email"
                                    label="email"
                                    value={category.email}
                                    disabled={isdisabled}
                                    onChange={handleChange}
                                />
                            </FormControl>

                        </Grid>


                        

                        {/*<Grid size={{xs:12}} >
                            <FormGroup>
                                <FormControlLabel
                                    control={
                                        <Switch
                                            name="is_active"
                                            color="secondary"
                                            checked ={category.is_active}
                                            onChange={handleChange}
                                            disabled={isdisabled}
                                            aria-label="Toggle switch"
                                        />
                                    }
                             
                                    label="Active"
                                />                      
                            
                            </FormGroup>

                        </Grid> */}

                        <Grid size={{xs:12}} >
                            <Box display="flex" gap={2}>
                                <Button  
                                    variant="contained" 
                                    component={RouterLink} 
                                    to="/categories">
                                   Back
                                 
                                </Button>

                                <Button 
                                type="submit"
                                variant="contained"
                                color="secondary"
                                disabled={isdisabled || isLoading}
                                >
                                
                                {isLoading ?  "Saving..." : "Save"}
                                    
                                </Button>
                            </Box>
                        </Grid>
                        


                    </Grid>
                </form>
 
            </Box>
        </Paper>
)}