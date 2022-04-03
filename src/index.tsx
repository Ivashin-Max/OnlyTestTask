import React from 'react';
import ReactDOM from 'react-dom';
import './styles/font.css';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const GlobalStyle = createGlobalStyle`
*{
  margin :0px;
  padding:0px;
  box-sizing:border-box;
  font-size:16px;
  font-family:"HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", 
  Helvetica, sans-serif;
}
`

ReactDOM.render(
  <BrowserRouter>
    <GlobalStyle />
    <App />

  </BrowserRouter>,
  document.getElementById('root')
);


