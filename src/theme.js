import {alpha, createTheme, getContrastRatio} from "@mui/material";

const mainBase = '#ffc7c7';
const mainMain = alpha(mainBase, 0.2);

export const GradientColor = `linear-gradient(45deg, ${mainBase} 0%, ${mainMain} 100%);`;

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
});

export default theme;
