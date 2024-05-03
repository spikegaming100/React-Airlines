import {Grid} from "@mui/material";
import Box from "@mui/material/Box";
import * as React from "react";
import styled, {css, keyframes} from "styled-components";

export function AirBox({count}) {
    return (
        <Wrapper>
            <Marquee>
                <MarqueeGroup>
        <Grid container spacing={{ xs: 2, md: 3 }}>
            {Array.from({ length: count }, (_, index) => (
                <Grid item key={index} xs={12} sm={6} md={4}>
                    <Box
                        sx={{
                            marginTop: '10px',
                            marginBottom: '10px',
                            width: 300,
                            height: 200,
                            borderRadius: 10,
                            backgroundImage: 'url(https://source.unsplash.com/random?airplane)',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    >
                    </Box>
                </Grid>
            ))}
        </Grid>
                </MarqueeGroup>
            </Marquee>
        </Wrapper>
    );
}

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Marquee = styled.div`
  display: flex;
  width: 1200px;
  overflow: hidden;
  user-select: none;

  mask-image: linear-gradient(
    to right,
    hsl(0 0% 0% / 0),
    hsl(0 0% 0% / 1) 10%,
    hsl(0 0% 0% / 1) 90%,
    hsl(0 0% 0% / 0)
  );
`;

const scrollX = keyframes`
    0% {
        transform: translateX(0%);
    }
    100% {
        transform: translateX(-100%);
    }
`;

const common = css`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  white-space: nowrap;
  width: 100%;
  animation: ${scrollX} 30s linear infinite;
`;

const MarqueeGroup = styled.div`
  ${common}
  animation-direction: reverse;
  animation-delay: -3s;
    display: flex;
    overflow: hidden
`;