import Box from "@mui/material/Box";
import * as React from "react";
import {GradientColor} from "./theme";


export function Content() {
    return (
        <Box
            sx={{
                width: window.Width,
                height: 1000,
                background: GradientColor,
                display: 'flex',
                flexDirection: 'column',
                '& > *': {
                    m: 1,
                },
            }}>
        </Box>

    );
}