import * as React from 'react';

import { Box, ThemeProvider } from '@mui/system';
import { Header } from './components/Header';

export default function ButtonUsage() {
  return(
  <ThemeProvider theme={{}}>
    <Box component="main"
    sx={{height:"100vh",
    backgroundColor:"#000"}}>
    <Header/>
    </Box>
  </ThemeProvider>
   )
}


