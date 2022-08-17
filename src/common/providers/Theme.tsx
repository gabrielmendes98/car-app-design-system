import { ReactNode } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';
import theme from 'common/styles/theme';
import GlobalStyle from 'common/styles/global';
import '@fontsource/montserrat';
import 'react-toastify/dist/ReactToastify.css';

interface Props {
  children: ReactNode;
}

const ThemeProvider = ({ children }: Props) => (
  <StyledThemeProvider theme={theme}>
    <GlobalStyle />
    <ToastContainer />
    {children}
  </StyledThemeProvider>
);

export default ThemeProvider;
