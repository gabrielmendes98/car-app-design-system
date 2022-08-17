import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    font-family: ${({ theme }) => theme.typography.fontFamily};
    font-size: ${({ theme }) => theme.typography.htmlFontSize};
    font-weight: normal;
    overflow: overlay;
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

  a {
    all: unset;
    width: 100%;
  }

  * {
    box-sizing: border-box;    
    padding: 0;
    margin: 0;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }
`;

export default GlobalStyle;
