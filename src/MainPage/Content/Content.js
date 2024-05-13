import Box from "@mui/material/Box";
import * as React from "react";
import {DataGrid, GridToolbarContainer, GridToolbarQuickFilter} from "@mui/x-data-grid";
import {GradientColor} from "../../SubElements/Theme";
import  '../../SubElements/BoxStyle.css'
import {rows, columns} from "../Table";
import HotelSearch from "./HotelSearch";
import Typography from "@mui/material/Typography";


function TableGrid() {
    return (
        <DataGrid
            rows={rows}
            columns={columns}
            pageSize={6}
            slots={{
                toolbar: CustomToolbar,
            }}
            className="box-styled"
            sx={{
                height: '50%',
                '.MuiDataGrid-columnHeaderTitle': {
                    fontWeight: 'bold !important',
                    overflow: 'visible !important'
                }
            }}

        />
    );
}

const CustomToolbar = () => {
    return (
        <GridToolbarContainer >
            <GridToolbarQuickFilter placeholder="Найти..." sx={{ margin: '10px', }} />
        </GridToolbarContainer>
    );
};

export function Content() {
    return (
        <Box className="box-styled"
            sx={{
                width: window.Width,
                height: 1500,
                background: GradientColor,
                padding: 1,
                overflow: 'hidden'
            }}
        >
            <Box className="box-styled"
                sx={{
                    width: window.Width,
                    height: '45%',
                    background: GradientColor,
                }}
            >
                <Typography variant="h3" align="center" padding={0.1}>Найди себе подходящий отель</Typography>
                <HotelSearch></HotelSearch>
            </Box>
                <TableGrid></TableGrid>
        </Box>
    );
}
