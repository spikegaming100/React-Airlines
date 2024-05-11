import {alpha, createTheme, getContrastRatio} from "@mui/material";


const mainBase = '#17757c';
const mainMain = alpha(mainBase, 0.2);

export const GradientColor = `linear-gradient(45deg, ${mainBase} 0%, ${mainMain} 90%);`;

const theme = createTheme({
  palette: {
    main: {
      primary: mainBase,
      dark: alpha(mainBase, 0.9),
      light: alpha(mainBase, 0.5),
      contrastText: getContrastRatio(mainMain, '#fff') > 4.5 ? '#111111' : '#111',
      background: {
        default: mainMain,
      },
    },
  },

  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

theme.typography.h3 = {
  fontSize: '1.2rem',
  '@media (min-width:600px)': {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2rem',
  },
};

export default theme;
