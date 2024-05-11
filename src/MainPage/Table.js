
export const rows = [
    { id: 1, flightNumber: 'AA123', origin: '🇷🇺 Россия', destination: '🇺🇸 США', departureTime: '2024-05-12T08:00:00', arrivalTime: '2024-05-12T11:00:00', duration: '03:00', status: 'On Time' },
    { id: 2, flightNumber: 'DL456', origin: '🇷🇺 Россия', destination: 'ORD', departureTime: '2024-05-12T13:30:00', arrivalTime: '2024-05-12T16:30:00', duration: '03:00', status: 'Delayed' },
    { id: 3, flightNumber: 'UA789', origin: '🇷🇺 Россия', destination: 'DFW', departureTime: '2024-05-12T17:45:00', arrivalTime: '2024-05-12T19:30:00', duration: '01:45', status: 'On Time' },
    { id: 4, flightNumber: 'AA234', origin: '🇷🇺 Россия', destination: 'MIA', departureTime: '2024-05-12T09:15:00', arrivalTime: '2024-05-12T12:30:00', duration: '02:15', status: 'On Time' },
    { id: 5, flightNumber: 'DL567', origin: '🇷🇺 Россия', destination: 'JFK', departureTime: '2024-05-12T14:45:00', arrivalTime: '2024-05-12T17:45:00', duration: '03:00', status: 'On Time' },
];

export const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'flightNumber', headerName: 'Номер рейса', width: 130 },
    { field: 'origin', headerName: 'Место отправления', width: 110 },
    { field: 'destination', headerName: 'Место прибытия', width: 130 },
    { field: 'departureTime', headerName: 'Время отправления', width: 160 },
    { field: 'arrivalTime', headerName: 'Время прибытия', width: 160 },
    { field: 'duration', headerName: 'Продолжительность', width: 110 },
    { field: 'status', headerName: 'Статус', width: 110 },
];





