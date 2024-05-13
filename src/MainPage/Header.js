import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import * as React from "react";


const HeaderText1 = "Найди свой тур";
const HeaderText2 = "Сервис по поиску туров";

export function Header() {
    return (
        <Box sx={{
            margin: 2,
        }}>
            <Typography variant="h2" align="right"  >{HeaderText1}</Typography>
            <Typography variant="h4" align="right"  >{HeaderText2}</Typography>
        </Box>
    );
}