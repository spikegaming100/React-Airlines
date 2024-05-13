import React from 'react';
import {TextField, Button, Grid} from '@mui/material';
import Box from "@mui/material/Box";
import {purple} from "@mui/material/colors";
import {mainBase, mainMain} from "../../SubElements/Theme";



function HotelSearch() {

    const [searchTerm, setSearchTerm] = React.useState('');
    const handleSearch = () => {
        console.log('Search term:', searchTerm);
    };

    return (
        <Box display="flex"
            className="box-styled"
            sx={{
                background: "white",
            }}
        >
            <TextField
                variant="standard"
                label="Например: Египет"
                type="search"
                size="small"
                autoComplete="on"
                autoFocus
                value={searchTerm}
                sx={{
                    width: '85%',
                    padding: 1,
                    ml: 4
                }}
                onChange={(e) => setSearchTerm(e.target.value)}
            />

                <Button
                    variant="contained"
                    onClick={handleSearch}
                    size="large"
                    color="main"
                    sx={{
                        width: '10%',
                        margin: 1,
                        borderRadius: 6,
                        backgroundColor: mainBase,
                        ':hover': {
                            backgroundColor: 'white',
                        }
                    }}>Поиск</Button>

        </Box>
    );
}

export default HotelSearch;
