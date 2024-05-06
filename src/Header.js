import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import * as React from "react";
import {GradientColor} from "./theme";


const headertext = "Авиатуры на любой вкус";

export function Header() {
    return (
        <Box className="custom-class" sx={{
            background: GradientColor,
        }}>
            <Typography variant="h3" align="center" >{headertext}</Typography>
        </Box>
    );
}