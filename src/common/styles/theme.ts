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
      white: '#FFFFFF',
    },
    background: {
      main: '#EBEFF2',
    },
  },
  spacing: (factor: number) => `${0.5 * factor}rem`,
  typography: {
    fontFamily: "'Montserrat', 'Arial', 'Helvetica', 'sans-serif'",
    htmlFontSize: 16,
  },
};

export default theme;
