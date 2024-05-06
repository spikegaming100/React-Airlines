import {Button, ButtonGroup} from "@mui/material";
import Box from "@mui/material/Box";
import * as React from "react";

    export function Menu({history}) {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                margin: 2,
            }}
        >
            <ButtonGroup variant="contained" color="main" >
                <Button onClick={()=> history.push("/flights")}>Посмотреть туры</Button>
                <Button onClick={()=> history.push("/about")}>О нас</Button>
                <Button onClick={()=> history.push("/support")}>Поддержка</Button>
            </ButtonGroup>
        </Box>
    );
}