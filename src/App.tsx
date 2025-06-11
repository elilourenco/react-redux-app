
import { Box,ThemeProvider } from '@mui/system';
import { Header } from './components/Header';
import { Typography } from '@mui/material';
import Layout from './components/Layout';
import { appTheme } from './config/theme';
import {Routes,Route,Link} from "react-router-dom"




export default function ButtonUsage() {
  return(
  <ThemeProvider theme={appTheme}>
    <Box component="main"
    sx={{height:"100vh",
      backgroundColor:(theme) => theme.palette.grey[900],
    }}>
    <Header />
    <Layout>
    <h1>Welcome to react Router</h1>
    <Routes>
      <Route path='/' element={}/>

        <Route path="/about" element={} />
        

        {/* You can also add a 404 page */}
        <Route path="*" element={<h1>404 Not Found</h1>} />
      
      

    </Routes>
    </Layout>
    </Box>
  </ThemeProvider>
   )
}


