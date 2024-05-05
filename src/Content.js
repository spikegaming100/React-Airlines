import Box from "@mui/material/Box";
import * as React from "react";


export function Content() {
    return (

        <Box
            sx={{
                width: window.Width,
                height: 1000,
                background: 'linear-gradient(45deg, rgba(9,94,121,0.5046219171262255) 0%, rgba(0,212,255,0.4962185557816877) 60%); ',
                borderRadius: 10,
                marginTop: '20px',
                marginBottom: '20px',
                marginRight: '10px',
                marginLeft: '10px',
            }}>
        </Box>

    );
}