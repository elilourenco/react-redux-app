import { Box, Typography } from "@mui/material"
import { Paper } from "material-ui"
import { GenreForm } from "./components/GenreForm"

export const genreCreate = () => {
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
            genre={{}}
            categories={[]}
            isLoading={false}
            isDisabled={false}
            handleSubmit={function noRefCheck(){}}
            handleChange={function noRefCheck(){}}


            />

            
        </Box>
    )
}   