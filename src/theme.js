import { red } from '@mui/material/colors';
import {createTheme} from "@mui/material";

const theme = createTheme({

  palette: {
    primary: {
      main: '#25beff',
      light: '#c3eeff',
    },
    secondary: {
      main: '#2592ff',
    },
    error: {
      main: red.A400,
    },
  },
});


export default theme;
