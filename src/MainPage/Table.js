import { format } from 'date-fns';

const currentDate = new Date().getTime();
const millisecondsPerDay = 24 * 60 * 60 * 1000;
const millisecondsPerHour = 60 * 60 * 1000;
const millisecondsPerMinute = 60 * 1000;

const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const az = (a) => {
    if (a < 10)
        return "0" + a;
    return a;
}

const Time = () => {
    const days = getRandomNumber(1, 2);
    let first = currentDate + (days * millisecondsPerDay);
    first += (getRandomNumber(0, 2) * millisecondsPerDay) + (getRandomNumber(0,23) * millisecondsPerHour) + (getRandomNumber(0,59) * millisecondsPerMinute);
    const randomHours = getRandomNumber(0, 23);
    const randomMinutes = getRandomNumber(0, 59);

    let diff = (randomHours * millisecondsPerHour) + (randomMinutes * millisecondsPerMinute);
    const second = first + diff;
    let str = az(randomHours)+ ":" + az(randomMinutes);
    return { first, second, str };
};



const generateRow = () => {
    const { first, second, str } = Time();
    return {
        flightNumber: 'AA123',
        origin: '🇷🇺 Россия',
        destination: '🇺🇸 США',
        depTime: format(first, 'yyyy-MM-dd HH:mm'),
        arrTime: format(second, 'yyyy-MM-dd HH:mm'),
        duration: str,
        status: 'On Time'
    };
};

export const rows = Array.from({ length: 30 }, (_, index) => ({
    id: index + 1,
    ...generateRow()
}));


export const columns = [
    { field: 'flightNumber', headerName: 'Номер рейса',flex: 1 },
    { field: 'origin', headerName: 'Место отправления', flex: 1},
    { field: 'destination', headerName: 'Место прибытия',flex: 1 },
    { field: 'depTime', headerName: 'Время отправления', flex: 1, type: 'datetime' },
    { field: 'arrTime', headerName: 'Время прибытия', flex: 1},
    { field: 'duration', headerName: 'Продолжительность', flex: 1},
    { field: 'status', headerName: 'Статус', flex: 1 },
];





