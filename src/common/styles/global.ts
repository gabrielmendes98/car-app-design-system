import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body,
  #root {
    height: 100%;
    min-height: 100vh;
    padding: 0;
    margin: 0;
  }
`;

export default GlobalStyle;
