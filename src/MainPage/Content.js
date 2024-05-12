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
                height: '40%',
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
            <GridToolbarQuickFilter placeholder="Найти..." sx={{ margin: '20px' }} />
        </GridToolbarContainer>
    );
};

export function Content() {
    return (
        <Box className="box-styled"
             sx={{
                width: window.Width,
                height: 1000,
                background: GradientColor,
            }}>
            <Box className="box-styled"
                sx={{
                    width: window.Width,
                    height: '55%',
                    background: GradientColor,
                    flex: 1,
                }}>
            </Box>
            <TableGrid></TableGrid>
        </Box>
    );
}
