import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import * as React from "react";
import Box from "@mui/material/Box";
import {useNavigate} from "react-router-dom";

export function Copyright({history}) {
    const navigate = useNavigate();
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            '& > *': {
                m: 2,
            },
            marginTop: '20px',
            marginBottom: '20px',
            marginRight: '10px',
            marginLeft: '10px',
        }}>
        <Typography variant="body2" color="text.secondary" align="right">
            {'Copyright © '}
            <Link color="inherit" onClick={() => navigate('/about')}>
                React-Airlines
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
        </Box>
    );
}