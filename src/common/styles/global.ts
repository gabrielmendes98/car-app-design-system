import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    font-family: ${({ theme }) => theme.typography.fontFamily};
    font-size: ${({ theme }) => theme.typography.htmlFontSize};
    font-weight: normal;
  }

  html,
  body,
  #root {
    height: 100%;
    min-height: 100vh;
    padding: 0;
    margin: 0;
    background-color: ${({ theme }) => theme.palette.background.main};
  }

  * {
    box-sizing: border-box;    
    padding: 0;
    margin: 0;
  }
`;

export default GlobalStyle;
