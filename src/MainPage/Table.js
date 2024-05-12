import {format} from 'date-fns';

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
    let dur = az(randomHours)+ ":" + az(randomMinutes);
    return { first, second, dur };
};

const i = ["🇺🇸 США", "🇨🇳 Китай", "🇮🇳 Индия", "🇮🇩 Индонезия", "🇧🇷 Бразилия", "🇵🇰 Пакистан", "🇳🇬 Нигерия", "🇧🇩 Бангладеш", "🇷🇺 Россия", "🇯🇵 Япония", "🇲🇽 Мексика", "🇵🇭 Филиппины", "🇪🇬 Египет", "🇪🇹 Эфиопия", "🇻🇳 Вьетнам", "🇨🇩 Демократическая Республика Конго", "🇹🇷 Турция", "🇩🇪 Германия", "🇮🇷 Иран", "🇹🇭 Таиланд", "🇬🇧 Великобритания", "🇫🇷 Франция", "🇮🇹 Италия", "🇹🇿 Танзания", "🇿🇦 Южная Африка", "🇲🇲 Мьянма", "🇰🇪 Кения", "🇰🇷 Южная Корея", "🇨🇴 Колумбия", "🇪🇸 Испания", "🇺🇬 Уганда", "🇦🇷 Аргентина", "🇩🇿 Алжир", "🇸🇩 Судан", "🇺🇦 Украина", "🇮🇶 Ирак", "🇵🇱 Польша", "🇨🇦 Канада", "🇸🇦 Саудовская Аравия", "🇲🇾 Малайзия", "🇵🇪 Перу", "🇦🇴 Ангола", "🇺🇿 Узбекистан", "🇲🇦 Марокко", "🇾🇪 Йемен", "🇻🇪 Венесуэла", "🇳🇵 Непал", "🇲🇬 Мадагаскар", "🇨🇲 Камерун", "🇨🇮 Кот-д'Ивуар",]
const n = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function country() {
    return i[Math.floor(Math.random() * i.length)] ;
}

function flightNum() {
    let result = '';
    for (let i = 0; i < 3; i++) {
        result += n.charAt(Math.floor(Math.random() * n.length));
    }
    result += '-';
    for (let j = 0; j < 3; j++) {
        result += Math.floor(Math.random() * 10);
    }
    return result;
}

function status() {
    let r = Math.floor(Math.random() * 10);
    if (r === 0) {
        return "Отменён";
    } else if (r === 1) {
        return "Задержан";
    } else {
        return "По расписанию";
    }
}

const generateRow = () => {
    const { first, second, dur } = Time();
    return {
        flightNumber: flightNum(),
        origin: '🇷🇺 Россия',
        destination: country(),
        depTime: format(first, 'yyyy-MM-dd HH:mm'),
        arrTime: format(second, 'yyyy-MM-dd HH:mm'),
        duration: dur,
        status: status()
    };
};

export const rows = Array.from({ length: 100 }, (_, index) => ({
    id: index + 1,
    ...generateRow()
}));


export const columns = [
    { field: 'flightNumber', headerName: 'Номер рейса', align: 'center', headerAlign: 'center'},
    { field: 'origin', headerName: 'Место отправления', flex: 1,  headerAlign: 'center' },
    { field: 'destination', headerName: 'Место прибытия', flex: 1, headerAlign: 'center'},
    { field: 'depTime', headerName: 'Время отправления',  flex: 1, align: 'center', headerAlign: 'center' },
    { field: 'arrTime', headerName: 'Время прибытия', flex: 1, align: 'center', headerAlign: 'center'},
    { field: 'duration', headerName: 'Продолжительность',  align: 'center', headerAlign: 'center'},
    {   field: 'status',
        headerName: 'Статус',
        flex: 1,
        align: 'center',
        headerAlign: 'center',
        renderCell: (params) => (
            <span style={{color:
                    params.value === "Отменён" ? 'red' : '' ||
                    params.value === "Задержан" ? 'orange' : 'green' }}>
      {params.value}
    </span>
        )
    }
];