import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import React from 'react';
import App from './App';
import ContextProvider from './context';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <ContextProvider>
    <App />

    </ContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

