import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
  margin :0px;
  padding:0px;
  box-sizing:border-box;

}
html{
  font-size:16px;
  font-family:"HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", 
  Helvetica, sans-serif;
}

@media(max-width: 400px) {
  html{
    font-size:12px;
    transition: font-size 1s ease;
  }

  }
`