import {Button, ButtonGroup} from "@mui/material";
import Box from "@mui/material/Box";
import * as React from "react";
import { useNavigate } from 'react-router-dom';

export const Menu = ({scrollToContent}) => {
    const navigate = useNavigate();
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                margin: 2,
            }}
        >
            <ButtonGroup variant="contained" color="main">
                <Button onClick={scrollToContent}>Посмотреть туры</Button>
                <Button onClick={() => navigate('/about')}>О нас</Button>
                <Button onClick={() => navigate('/support')}>Поддержка</Button>
            </ButtonGroup>
        </Box>
    );
};
