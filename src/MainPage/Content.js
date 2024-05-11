import Box from "@mui/material/Box";
import * as React from "react";
import {DataGrid, GridToolbarContainer, GridToolbarQuickFilter} from "@mui/x-data-grid";
import {GradientColor} from "../SubElements/theme";
import  '../SubElements/BoxStyle.css'
import {rows, columns} from "./Table";

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
                borderRadius: 6,
            }}

        />
    );
}

const CustomToolbar = () => {
    return (
        <GridToolbarContainer>
            <GridToolbarQuickFilter sx={{ margin: '20px' }} />
        </GridToolbarContainer>
    );
};

export function Content() {
    return (
        <Box className="box-styled" paddingTop={1} paddingBottom={4}
             sx={{
                width: window.Width,
                height: 1000,
                background: GradientColor,
            }}>
            <TableGrid></TableGrid>
        </Box>
    );
}