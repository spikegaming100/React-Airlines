import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import theme, {GradientColor} from "../SubElements/theme";
import * as React from "react";


const headertext1 = "Авиатуры на любой вкус.";
const headertext2 = "Найди себе заветный билет";

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