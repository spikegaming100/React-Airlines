import React from 'react';
import {
    Autocomplete,
    Button,
    ImageList,
    ImageListItem,
    ImageListItemBar, Rating,
    TextField
} from '@mui/material';
import Box from "@mui/material/Box";
import {mainBase} from "../../SubElements/Theme";
import Typography from "@mui/material/Typography";
import StarIcon from '@mui/icons-material/Star';

function hotel() {
    const hotels = ['Люксория', 'Звездный Парус', 'Пальмовый оазис', 'Коралловый бриз', 'Златолипие', 'Звездное небо', 'Лунное сияние', 'Морское утешение', 'Горный ветер', 'Солнечный рай', 'Амброзия', 'Магический камень', 'Искристый водопад', 'Пышная изобилие', 'Ауреола', 'Перламутровый берег', 'Сиреневый закат', 'Город небес', 'Фонтан удачи', 'Виктория Палас', 'Звездный песок', 'Пурпурный цветок', 'Таинственный огонь', 'Златокровье', 'Орбита мира', 'Лазурный берег', 'Магнетический полюс', 'Звездный путь', 'Серебряный лист', 'Эльфийские зарисовки', 'Золотой трон', 'Жемчужина моря', 'Астральный свет', 'Летний вздох', 'Феерия красок', 'Лунный орех', 'Молодильный ключ', 'Алмазный город', 'Славянский бриз', 'Оазисная роща', 'Солнечный май', 'Кристалловый мир', 'Утренний звездопад', 'Песчаный вихрь', 'Золотая роса', 'Серебряная нить', 'Таинственный лес', 'Аметистовый свет', 'Магическая гавань', 'Звездное поле', 'Лазурная ночь', 'Клубинка ветер', 'Танцующая пальма', 'Огненный цветок', 'Средиземный воздух', 'Звездная заря', 'Сумеречный бриз', 'Ивовый берег', 'Звездное марево', 'Пурпурный закат', 'Венецианский аромат', 'Златоволосье', 'Атлантический бриз', 'Морская гладь', 'Лунное отражение', 'Весенний ветер', 'Фантазийная зарница', 'Огненная вуаль', 'Золотые волны', 'Эмоциональный вздох', 'Лавандовая поляна', 'Таинственные сказки', 'Звездное море', 'Солнечная дуга', 'Хрустальный дворец', 'Радужный свет', 'Амурный взгляд', 'Морской бриз', 'Горячий водопад', 'Сиреневая лагуна', 'Глинтвейн море', 'Стеклянное небо', 'Красная роза', 'Магистральный свет', 'Звездное облако', 'Серебряный луч', 'Скрипучий песок', 'Озеро удачи', 'Солнечная дуга', 'Радужная высота', 'Златопшена', 'Лунная чашка', 'Магическое зелье', 'Звездные поляны', 'Стеклянный закат', 'Кокосовый бриз', 'Аквариумный мир', 'Морская симфония', 'Бриллиантовый песок', 'Солнечный сад', 'Легендарный берег', 'Искрящийся фейерверк', 'Орловский легкорай', 'Полет вдали', 'Зеленое счастье'];
    return hotels[Math.floor(Math.random() * hotels.length)] ;
}

const generateRow = () => {
    let data = [];
    [...Array(100)].forEach((e, i) => {
        let ind = Math.floor(Math.random() * (338 - 1 + 1) + 1)
        data.push({
            img: `ImgSet/(${ind}).jpeg`,
            title: hotel(),
        });
    });
    return data;
}

const rows = () => ([
    ...generateRow ()
]);

const itemData = generateRow();

function HotelSearch({onResize, boxHeight,}) {
    const [selectedCountry, setSelectedCountry] = React.useState('');
    const [showBox, setShowBox] = React.useState(false);

    const handleSearch = () => {
        if (selectedCountry) {
            setShowBox(true);
            onResize(boxHeight + 100);
        }
    };

    const countries = [{title: '🇺🇸 США'}, {title: '🇨🇳 Китай'}, {title: '🇮🇳 Индия'}, {title: '🇮🇩 Индонезия'}, {title: '🇧🇷 Бразилия'}, {title: '🇵🇰 Пакистан'}, {title: '🇳🇬 Нигерия'}, {title: '🇧🇩 Бангладеш'}, {title: '🇷🇺 Россия'}, {title: '🇯🇵 Япония'}, {title: '🇲🇽 Мексика'}, {title: '🇵🇭 Филиппины'}, {title: '🇪🇬 Египет'}, {title: '🇪🇹 Эфиопия'}, {title: '🇻🇳 Вьетнам'}, {title: '🇨🇩 Демократическая Республика Конго'}, {title: '🇹🇷 Турция'}, {title: '🇩🇪 Германия'}, {title: '🇮🇷 Иран'}, {title: '🇹🇭 Таиланд'}, {title: '🇬🇧 Великобритания'}, {title: '🇫🇷 Франция'}, {title: '🇮🇹 Италия'}, {title: '🇹🇿 Танзания'}, {title: '🇿🇦 Южная Африка'}, {title: '🇲🇲 Мьянма'}, {title: '🇰🇪 Кения'}, {title: '🇰🇷 Южная Корея'}, {title: '🇨🇴 Колумбия'}, {title: '🇪🇸 Испания'}, {title: '🇺🇬 Уганда'}, {title: '🇦🇷 Аргентина'}, {title: '🇩🇿 Алжир'}, {title: '🇸🇩 Судан'}, {title: '🇺🇦 Украина'}, {title: '🇮🇶 Ирак'}, {title: '🇵🇱 Польша'}, {title: '🇨🇦 Канада'}, {title: '🇸🇦 Саудовская Аравия'}, {title: '🇲🇾 Малайзия'}, {title: '🇵🇪 Перу'}, {title: '🇦🇴 Ангола'}, {title: '🇺🇿 Узбекистан'}, {title: '🇲🇦 Марокко'}, {title: '🇾🇪 Йемен'}, {title: '🇻🇪 Венесуэла'}, {title: '🇳🇵 Непал'}, {title: '🇲🇬 Мадагаскар'}, {title: '🇨🇲 Камерун'}, {title: '🇨🇮 Кот-д Ивуар'}];
    return (
        <div>
            <Box display="flex"
                 className="box-styled"
                 sx={{
                     background: "white",
                 }}
            >
                <Autocomplete
                    id="free-solo-demo"
                    freeSolo
                    sx={{
                        width: '85%',
                        padding: 1,
                        ml: 4
                    }}
                    options={countries.map((option) => option.title)}
                    onChange={(event, newValue) => {
                        setSelectedCountry(newValue);
                    }}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label="Например: Бразилия"
                            variant="standard"
                            type="search"
                            size="small"
                            autoComplete="on"
                            autoFocus
                        />
                    )}
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
            {showBox && setSelectedCountry && (
                <Box mt={2}>
                    <ImageList sx={{ width: window.Width, height: 1000 }}>
                        <ImageListItem key="Subheader" cols={6} >
                            <Typography variant="h4" align="center" padding={1}>Вы выбрали страну {selectedCountry}, вот подходяшие отели:</Typography>
                        </ImageListItem >
                        {itemData.map((item) => (
                            <ImageListItem key={item.img}>
                                <img
                                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                    src={`${item.img}?w=248&fit=crop&auto=format`}
                                    alt={item.title}
                                    loading="lazy"
                                />
                                <ImageListItemBar
                                    title={item.title}
                                    actionIcon={
                                        <Rating
                                            name="rating"
                                            value={Math.floor(Math.random() * 5 +1)}
                                            readOnly
                                            emptyIcon={<StarIcon sx={{ color: 'gray' }} fontSize="inherit" />}
                                        />
                                    }
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                </Box>
                )}
        </div>
    );
}

export default HotelSearch;
