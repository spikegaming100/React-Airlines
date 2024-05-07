import * as React from 'react';
import {DataGrid, GridToolbar, GridToolbarContainer} from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';

const CustomToolbar = (props) => {
    return (
        <GridToolbarContainer>
        <GridToolbar {...props}>

        </GridToolbar>
        </GridToolbarContainer>
    );
};

const rows = [
    { id: 1, firstName: 'John', lastName: 'Doe', age: 30 },
    { id: 2, firstName: 'Jane', lastName: 'Smith', age: 25 },
    // Добавьте свои данные здесь
];

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    { field: 'age', headerName: 'Age', width: 90 },
];

export default function Grid() {
    return (
        <DataGrid
            rows={rows} columns={columns} pageSize={6} checkboxSelection
            slots={{
                toolbar: CustomToolbar,
            }}
            className="custom-class"
            sx={{
                borderRadius: 6,
            }}
        />
    );
}
