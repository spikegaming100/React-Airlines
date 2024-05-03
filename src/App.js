import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {Button, ButtonGroup, Grid, Paper, Stack, styled} from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {AirBox} from "./AirBox";
import {Copyright} from "./Copyright";

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Main />} />
            </Routes>
        </Router>
  );
}

export function Main() {
    return (
        <Container maxWidth={"lg"}>
            <Box sx={{ my: 4 }}>
                <Typography variant="h1" component="h2" sx={{ mb: 2 }} align="right">
                    Авиатуры
                </Typography>
                <ButtonGroup variant="contained" aria-label="Basic button group" >
                    <Button href="#text-buttons">О нас</Button>
                    <Button href="#text-buttons">Посмотреть туры</Button>
                    <Button>Three</Button>
                </ButtonGroup>
                <AirBox count={5} />
                <Copyright />
            </Box>
        </Container>
    );
}


