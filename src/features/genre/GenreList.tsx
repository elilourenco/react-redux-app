import { Box, Button } from "@mui/material";
import { useSnackbar } from "notistack";
import { Link } from "react-router-dom";

export default function  GenreList(){
 const {enqueueSnackbar} = useSnackbar();
 const [options, setOptions]= useState({
    page:1,
    search:"",
    perPage:10,
    rowsPerPage:[10,20,30]
 });




     return(
        <Box maxWidth="lg" sx={{mt:4 , mb: 4}} >
        <Box display="flex" justifyContent="flex-end">
            <Button 
            variant="contained"
            color="secondary"
            compoment={Link}
            to="/genres/create"
            style={{marginBottom:"1 rem"}}
             >
                New Genre
                
            </Button>


        </Box>

        <GenreTable
        data={data}
        isfetching={isfetching}
        perPage={perPage}
        rowPerPage={[5,10,25]}
        handleOnPageChange={handleOnPageChange}
        handleOnPageSizeChange={handleOnPageSize}
        handleFilterChange={handleFilterChange}

        />

        </Box>


        
     )
}