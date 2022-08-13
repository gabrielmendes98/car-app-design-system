import { breakpoints } from './breakpoints';

const theme = {
  palette: {
    primary: {
      main: '#1D2527',
    },
    secondary: {
      main: '#AFAFAF',
    },
    tertiary: {
      main: '#D2D4D9',
    },
    common: {
      superWhite: '#FFFFFF',
      white: '#EBEFF2',
    },
    background: {
      main: '#EBEFF2',
    },
  },
  spacing: (factor: number) => `${8 * factor}px`, // use this for padding, margin, border, etc. except font-size, because it must uses rem
  typography: {
    fontFamily: "'Montserrat', 'Arial', 'Helvetica', 'sans-serif'",
    htmlFontSize: 16,
  },
  breakpoints: {
    sm: breakpoints.sm,
    lg: breakpoints.lg,
  },
  device: {
    mobile: `(max-width: ${breakpoints.sm}px)`,
    desktop: `(max-width: ${breakpoints.lg}px)`,
  },
};

export default theme;
