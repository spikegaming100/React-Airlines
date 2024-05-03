import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({

  palette: {
    primary: {
      main: '#eee4bb',
    },
    secondary: {
      main: '#c5bea2',
    },
    error: {
      main: red.A400,
    },
  },
});


export default theme;
