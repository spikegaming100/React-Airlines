import * as React from 'react';
import Container from '@mui/material/Container';
import {Routes, Route, BrowserRouter as Router} from 'react-router-dom';
import {AirBox} from "./MainPage/AirBox";
import {Copyright} from "./SubElements/Copyright";
import {Menu} from "./SubElements/Menu";
import About from "./About";
import Support from "./Support";
import {Content} from "./MainPage/Content/Content";
import {Header} from "./MainPage/Header";
import {useRef} from "react";

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/about" element={<About />} />
                <Route path="/support" element={<Support />} />
                <Route path="/" element={<Main />} />
            </Routes>
        </Router>
    );
}

function Main() {
    const contentRef = useRef(null);

    const scrollToContent = () => {
        contentRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <Container maxWidth={"lg"}>
            <Header />

            <Menu scrollToContent={scrollToContent} />
            <AirBox count={25} />
            <div ref={contentRef}><Content/> </div>
            <Copyright />
        </Container>
    );
}
