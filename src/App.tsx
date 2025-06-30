<<<<<<< HEAD

import {Box,ThemeProvider } from '@mui/system';
import {Header} from './components/Header';
import Layout from './components/Layout';
import { appTheme } from './config/theme';
import {Routes,Route} from "react-router-dom";
import {CategoryList} from './features/categories/ListCategory';
import {CategoryEdit} from './features/categories/EditCategory';
import {CategoryCreate} from './features/categories/CreateCategory';




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
      <Route path="/" element={<CategoryList/>} />

      <Route path="/categories" element={<CategoryList/>}/>
      <Route path ="/categories/create" element={<CategoryCreate/>} />
      <Route path ="/categories/edit/:id" element={<CategoryEdit/>} />
        

        {/* You can also add a 404 page */}
        <Route path="*" element={
          <Box sx={{color: "white"}}></Box>
           } 
        />
      
    
    </Routes>
    </Layout>
    </Box>
  </ThemeProvider>
   )
}


=======
import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header>
    </div>
  );
}

export default App;
>>>>>>> 7399151b308ab314c7fb4a18e4ec90e96d2bf30d
