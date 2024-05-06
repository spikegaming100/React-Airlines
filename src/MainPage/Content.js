import Box from "@mui/material/Box";
import * as React from "react";
import theme, {GradientColor} from "../SubElements/theme";
import {ThemeProvider} from "@mui/material/styles";
import  '../SubElements/BoxStyle.css'



export function Content() {
    return (
        <ThemeProvider theme={theme}>
        <Box className="custom-class"
            sx={{
                width: window.Width,
                height: 1000,
                background: GradientColor,
            }}>
        </Box>

        </ThemeProvider>
    );
}