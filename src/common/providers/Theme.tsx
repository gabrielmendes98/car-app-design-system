import { ReactNode } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import theme from 'common/styles/theme';
import GlobalStyle from 'common/styles/global';

interface Props {
  children: ReactNode;
}

const ThemeProvider = ({ children }: Props) => (
  <StyledThemeProvider theme={theme}>
    <GlobalStyle />
    {children}
  </StyledThemeProvider>
);

export default ThemeProvider;
