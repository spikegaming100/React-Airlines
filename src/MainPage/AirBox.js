import * as React from "react";
import styled from "styled-components";
import theme, {GradientColor} from "../SubElements/Theme";
import Box from "@mui/material/Box";
import {useEffect, useRef} from "react";
import anime from "animejs";

export function AirBox({ count }) {
    return (
        <Box className="box-styled"
            sx={{
                background: GradientColor,
                borderRadius: 10,
            }}
        >
        <Marquee>
                {Array.from({ length: count }, (_, index) => (
                    <div key={index}><MovingImages /></div>
                ))}
        </Marquee>
        </Box>
    );
}

const Marquee = styled.div`
    display: flex;
    overflow: hidden;
    user-select: none;
    background-color: ${theme.palette.primary};

    mask-image: linear-gradient(
            to right,
            hsla(0, 0%, 0%, 0),
            hsla(0, 0%, 0%, 1) 10%,
            hsla(0, 0%, 0%, 1) 90%,
            hsla(0, 0%, 0%, 0)
    );
`;

const getRandomImageUrl = () => {
    const randomParam = Math.random();
    return `https://source.unsplash.com/random?vacation&${randomParam}`;
};

const MovingImages = () => {
    const boxRef = useRef(null);
    useEffect(() => {
        anime({
            targets: boxRef.current,
            translateX: -2500,
            duration: 50000,
            easing: 'linear',
            loop: true,

        });
    }, []);

    return (
        <Box className="box-styled"
            ref={boxRef}
            sx={{
                width: 250,
                height: 150,
                backgroundImage: `url(${getRandomImageUrl()})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative',
                '&:hover': {
                    '&::after': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        borderRadius: 10,
                        backgroundColor: 'rgba(255, 255, 255, 0.5)',
                    },
                },
            }}
        >
        </Box>
    );
};