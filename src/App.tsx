
import { Box,ThemeProvider } from '@mui/system';
import { Header } from './components/Header';
import { Typography } from '@mui/material';
import Layout from './components/Layout';
import { appTheme } from './config/theme';


export default function ButtonUsage() {
  return(
  <ThemeProvider theme={appTheme}>
    <Box component="main"
    sx={{height:"100vh",
      backgroundColor:(theme) => theme.palette.grey[900],
    }}>
    <Header />
    <Layout>
     <Typography variant="h1" component="h1">
      News
     </Typography>
    </Layout>
    </Box>
  </ThemeProvider>
   )
}


