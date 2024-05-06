import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import * as React from "react";
import {GradientColor} from "./theme";
import {Paper} from "@mui/material";


const headertext = "Авиатуры на любой вкус";

export function Header() {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            '& > *': {
                m: 4,
            },
            marginTop: '20px',
            marginBottom: '20px',
            marginRight: '10px',
            marginLeft: '10px',
            borderRadius: 10,
            background: GradientColor,
            boxShadow: 6,
        }}>
            <Typography variant="h3" align="center" >{headertext}</Typography>
        </Box>
    );
}