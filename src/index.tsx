<<<<<<< HEAD
// src/index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
=======
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';

const container = document.getElementById('root')!;
const root = createRoot(container);
>>>>>>> 7399151b308ab314c7fb4a18e4ec90e96d2bf30d

root.render(
  <React.StrictMode>
    <Provider store={store}>
<<<<<<< HEAD
      <BrowserRouter>
        <App/>
      </BrowserRouter>
      
    </Provider>
  </React.StrictMode>
);
=======
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
>>>>>>> 7399151b308ab314c7fb4a18e4ec90e96d2bf30d
