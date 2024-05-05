import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import * as React from "react";

export function Copyright({history}) {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            <Link color="inherit" onClick={()=> history.push("/about")}>
                React-Airlines
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}