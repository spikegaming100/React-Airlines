import Box from "@mui/material/Box";
import * as React from "react";
import {DataGrid, GridToolbarContainer, GridToolbarQuickFilter} from "@mui/x-data-grid";
import {GradientColor} from "../../SubElements/Theme";
import  '../../SubElements/BoxStyle.css'
import {rows, columns} from "../Table";
import HotelSearch from "./HotelSearch";
import Typography from "@mui/material/Typography";


export function Content() {
    const [boxHeight, setBoxHeight] = React.useState(700);

    const handleResize = (height) => {
        setBoxHeight(height);
    };

    return (
        <Box className="box-styled"
             sx={{
                 width: window.Width,
                 height: boxHeight,
                 background: GradientColor,
                 padding: 1,
                 flex: 1,
             }}
        >
            <Typography variant="h3" align="center" padding={0.1}>Найди себе подходящий отель</Typography>
            <HotelSearch onResize={handleResize}></HotelSearch>
            <TableGrid />
        </Box>
    );
}

function TableGrid({  }) {
    return (
        <DataGrid
            rows={rows}
            columns={columns}
            slots={{
                toolbar: CustomToolbar,
            }}
            className="box-styled"
            padding={0.1}
            sx={{
                height: '75%',
                maxHeight: 500,
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



