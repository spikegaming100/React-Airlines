import Box from "@mui/material/Box";
import * as React from "react";
import {GradientColor} from "../SubElements/theme";
import  '../SubElements/BoxStyle.css'
import Grid from "./Table";



export function Content() {
    return (
        <Box className="custom-class" paddingTop={1} paddingBottom={4}
            sx={{
                width: window.Width,
                height: 1000,
                background: GradientColor,
            }}>
            <Grid></Grid>
        </Box>
    );
}