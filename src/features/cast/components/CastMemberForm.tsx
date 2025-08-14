import { Box, Button, FormControl, 
FormControlLabel, 
FormGroup, 
FormLabel,
 Grid, 
 Paper, 
 Radio, 
 RadioGroup, 
 TextField} from "@mui/material"
import {  Link as RouterLink} from "react-router-dom";
import { CastMember } from "../../../types/CastMembers";


type Props = {
    castMember:CastMember;
    isdisabled?:boolean;
    isLoading?:boolean;
    handleSubmit:(e:React.FormEvent<HTMLFormElement>) => void;
    handleChange:(e:React.ChangeEvent<HTMLInputElement>) => void;
    handleToggle:(e:React.ChangeEvent<HTMLInputElement>) => void;

}

export  function CastMemberForm ({
    castMember,
    handleChange,
    isLoading=false,
    isdisabled=false,
    handleSubmit,
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
                                    name="name"
                                    label="Name"
                                    value={castMember.name}
                                    disabled={isdisabled}
                                    onChange={handleChange}
                                />
                            </FormControl>

                        </Grid> 

                        

                        <Grid size={{xs:12}} >
                            <FormGroup>
                                <FormLabel>Type</FormLabel>   
                                <RadioGroup
                                aria-labelledby="type-label"
                                defaultValue="Director"
                                name="type"
                                value={castMember.type}
                                onChange={handleChange}>
                                <FormControlLabel value={2} control={<Radio />} label="Diretor"/>

                                <RadioGroup/>
                                               
                            
                            </FormGroup>

                        </Grid>

                        <Grid size={{xs:12}} >
                            <Box display="flex" gap={2}>
                                <Button  
                                    variant="contained" 
                                    component={RouterLink} 
                                    to="/cast-members">
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