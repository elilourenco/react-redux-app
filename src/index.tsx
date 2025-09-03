// src/index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import setupStore from './app/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const store= setupStore();

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter  >
        <App/>
      </BrowserRouter>
      
    </Provider>
  </React.StrictMode>
);
