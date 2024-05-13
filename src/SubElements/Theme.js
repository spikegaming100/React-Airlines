import {alpha, createTheme, getContrastRatio} from "@mui/material";


export const mainBase = '#60d5ff';
export const mainMain = alpha(mainBase, 0.2);

export const GradientColor = `linear-gradient(45deg, ${mainBase} 0%, ${mainMain} 90%);`;

const theme = createTheme({
  palette: {
    main: {
      primary: mainBase,
      dark: alpha(mainBase, 0.9),
      light: alpha(mainBase, 0.5),
      contrastText: getContrastRatio(mainMain, '#fff') > 4.5 ? '#111111' : '#111',
    },
    background: {
      default: mainMain,
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Arial',
      '"Helvetica Neue"',
      'Roboto',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

theme.typography.h1 = {
  fontSize: '4rem',
  '@media (max-width:600px)': {
    fontSize: '2.5rem',
  },
};

theme.typography.h2 = {
  fontSize: '3rem',
  '@media (max-width:600px)': {
    fontSize: '1.75rem',
  },
};

theme.typography.h3 = {
  fontSize: '2rem',
  '@media (max-width:600px)': {
    fontSize: '1.25rem',
  },
};

theme.typography.h4 = {
  fontSize: '1.5rem',
  '@media (max-width:600px)': {
    fontSize: '1rem',
  },
};

theme.typography.h5 = {
  fontSize: '1rem',
  '@media (max-width:600px)': {
    fontSize: '0.75rem',
  },
};

export default theme;
