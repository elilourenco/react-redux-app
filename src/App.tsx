
import { Box,ThemeProvider } from '@mui/system';
import { Header } from './components/Header';
import Layout from './components/Layout';
import { appTheme } from './config/theme';
import {Routes,Route} from "react-router-dom"
import CategoryList from './features/categories/ListCategory';
import CategoryEdit  from './features/categories/EditCategory';
import CategoryCreate from './features/categories/CreateCategory';
import { SnackbarProvider } from 'notistack';
import { ListCastmembers } from './features/cast/ListCastmembers';



export default function ButtonUsage() {
  return(
  <ThemeProvider theme={appTheme}>


    <SnackbarProvider maxSnack={3}
    autoHideDuration={2000}
    anchorOrigin={{
      vertical:"top",
      horizontal:"right"
    }}
    >
    <Box component="main"
    sx={{height:"100vh",
      backgroundColor:(theme) => theme.palette.grey[900],
    }}>
    <Header />
    <Layout>
    <h1>Welcome to React Router</h1>
    <Routes>

      {/* Category*/}

      <Route path="/" element={<CategoryList/>} />

      <Route path="/categories" element={<CategoryList/>} />
      <Route path ="/categories/create" element={<CategoryCreate/>} />
      <Route path ="/categories/edit/:id" element={<CategoryEdit/>} />

      {/*  cast members*/}

      <Route path="/cast-members" element={<ListCastmembers />} />
        

      <Route path="*" element={
        <Box sx={{color: "white"}}>

      </Box>}/>

    </Routes>
    </Layout>
    </Box>
    </SnackbarProvider>
  </ThemeProvider>
   )
}


