import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './styles/font.css';
import { GlobalStyle } from './styles/GlobalStyle';
import App from './App';





const rootEl = document.getElementById('root');
ReactDOM.render(
  <BrowserRouter>
    <GlobalStyle />
    <App />
  </BrowserRouter>,
  rootEl
);


