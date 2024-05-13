import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {GradientColor} from "../SubElements/theme";
import * as React from "react";


const headertext1 = "Найди свой рейс у нас.";
const headertext2 = "Сервис по поиску рейсов";

export function Header() {
    return (
        <Box sx={{
            margin: 2,
        }}>
            <Typography variant="h2" align="right" sx ={{color: GradientColor}} >{headertext1}</Typography>
            <Typography variant="h3" align="right"  >{headertext2}</Typography>
        </Box>
    );
}