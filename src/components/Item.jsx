import React, { useEffect, useState } from 'react';

import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import { EffectCoverflow, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
///import 'swiper/swiper-bundle.min.css' //!!!!
import { Box, Button, Grid, Modal, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { goods } from '../data/goods';
import GoodsItem from './GoodsItem';

const Item = (props) => {
    const { darkTheme, item, setOrder, setWishList, wishList } = props;

    const [isphotoOpen, setphotoOpen] = useState(false);
    const [CurrentPhoto, setCurrentPhoto] = useState("");
    const [alignmentSize, setAlignmentSize] = useState(item.sizes[0]);
    const [alignmentColor, setAlignmentColor] = useState(item.colors[0]);

    const openThePhoto = (currentPhotoSRC) => {
        setCurrentPhoto(currentPhotoSRC);
        setphotoOpen(true);
    };

    const similarGoods = () => {
        let arr = goods.filter((good) => good.category.includes(item.category));
        let currentProductIndex = arr.indexOf(item) + 1
        arr = arr.slice(currentProductIndex, currentProductIndex + 3)
        if (arr.length) {
            // if (arr.length > 3) {
            //     let max = arr.length
            //     let min = 0
            //     let randomPosition = Math.floor(Math.random() * (max - min))
            //     arr = arr.slice(randomPosition, currentProductIndex+3)
            //     console.log(randomPosition)
            // }
            return (
                <><Typography component="h2" variant="h5" sx={{
                    marginBottom: '0.7rem',
                    marginTop: '5rem',
                    fontWeight: 420,
                }}>
                    Схожий товар:
                </Typography>
                    <Grid container
                        spacing={8}
                        //columnSpacing={{ xs: 1, sm: 2, md: 45 }}
                        columns={{ xs: 4, sm: 8, md: 18 }}
                    >
                        {arr.map((similarItem) => {
                            return (
                                <GoodsItem key={similarItem.id} id={similarItem.id} setWishList={setWishList}
                                    wishList={wishList} {...similarItem} />
                            )
                        })}
                    </Grid></>
            )
        }
    }

    const [wishBotColor, setWishBotColor] = useState();
    useEffect(() => {
        setWishBotColor((wishList.filter((wishItem) =>
            item.id === wishItem.id && item.color === wishItem.color && item.size === wishItem.size).length !== 0)
            ? 'blue' : 'green')
    }, [wishList, item.id, item.color, item.size]);

    //useEffect() ???
    //window.scrollTo(0, 0);

    const putPropertyAndValue = (property, value) => (
        <Grid container spacing={2} key={property}
            sx={{
                background: 'linear-gradient(to left, #f69ec4, #f9dd94 100%)',
                backgroundPosition: '0 100%',
                backgroundSize: '100% 2.5px',
                backgroundRepeat: 'repeat-x'
            }}
        >
            <Grid item xs={6}>
                <Typography
                    component="p" variant="h6"
                    sx={{
                        flexGrow: 1,
                        //mr: 2,
                        //display: { xs: 'none', md: 'flex' },
                        fontFamily: 'cursive', //change the font
                        fontWeight: 600, //жирность
                        color: 'inherit',
                        textDecoration: 'none',
                    }}
                >
                    {property}
                </Typography>
            </Grid>

            <Grid item xs={6}>
                <Typography
                    component="p" variant="h6"
                    sx={{
                        flexGrow: 1,
                        //mr: 2,
                        //display: { xs: 'none', md: 'flex' },
                        fontFamily: 'cursive', //change the font
                        fontWeight: 400, //жирность
                        color: 'inherit',
                        textDecoration: 'none',
                    }}
                >
                    {value}
                </Typography>
            </Grid>
        </Grid>
    );

    const handleAlignmentSize = (event, newAlignment) => {
        if (!newAlignment) {
            return;
        }
        setAlignmentSize(newAlignment);
    };
    const handleAlignmentColor = (event, newAlignment) => {
        console.log(alignmentColor);
        if (!newAlignment) {
            return;
        }
        setAlignmentColor(newAlignment);
    };
    const UAvalue = (item.category === 'hoodies' ? "Худі" : item.category === "T-shirts" ?
        "Футболки" : item.category === "suits" ? 'Костюми' : item.category === "trousers" ? 'Штани' : '');

    return (
        <>
            <Helmet>
                <title>
                    {item.name + " - висока якість і низькі ціни на " + UAvalue + " з доставкою в Київ та " +
                        "по Україні в інтернет магазині Wear and Enjoy it"}
                </title>
                <meta name="description" content={
                    "Закінчується! Гарантія повернення, накладений платіж, " +
                    "швидка доставка, недорого. Встигніть! Якісні " + UAvalue + ". Купити cтильні " + UAvalue +
                    " в магазині одягу."
                } />
                <link rel="canonical" href={"/" + item.id} />
            </Helmet>

            <Swiper
                style={{
                    "--swiper-navigation-color": "#ff0099",
                    "--swiper-pagination-color": "#ff0099",
                    //borderRadius: '150px'

                }}
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                //loop={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 5,
                    depth: 10, //100
                    modifier: 12,
                }}
                //pagination={{ el: '.swiper-pagination', clickable: true }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    clickable: true,
                }}
                modules={[EffectCoverflow, Navigation]} // Pagination,
            //spaceBetween={'40'}
            >

                {item.photos.map((photo, i) => (
                    <SwiperSlide
                        onClick={() => openThePhoto(photo)}
                        key={photo} style={{ width: 'auto' }}>
                        <img src={photo} alt={item.name + " — photo " + (++i)} style={{ height: '850px', width: 'auto', borderRadius: '20px' }} />
                    </SwiperSlide>
                ))}

                <div className="slider-controller">
                    <div className="swiper-button-prev slider-arrow" />
                    <div className="swiper-button-next slider-arrow" />
                    {/* <div className="swiper-pagination"></div> */}
                </div>
            </Swiper>

            {/* <h2 style={{ marginBottom: '10px' }}>{item.name}</h2> */}
            <Typography component="h1" variant="h5" sx={{
                marginBottom: '0.1rem',
                fontWeight: 380,
            }}>
                {item.name}
            </Typography>

            {/* <h3 style={{ marginBottom: '20px', marginTop: 'auto' }}>{item.price} грн</h3> */}

            {item.firstPrice ? (
                <Typography variant="h6" component="s" //caption
                    //fontWeight={"bold"}
                    sx={{
                        textDecorationColor: 'red',
                        //paddingTop: 0,
                        //paddingBottom: '0rem',
                    }}> {item.firstPrice} ₴
                </Typography>
            ) : null}

            <Typography component="p" variant="h5" sx={{
                fontWeight: 700,
                marginBottom: '0.5rem',
            }} fontWeight={"bold"}>
                {item.currentPrice} ₴
            </Typography>

            <ToggleButtonGroup
                value={alignmentSize}
                exclusive
                onChange={handleAlignmentSize}
                color='success'
                sx={{
                    marginBottom: '10px',
                    width: '100%',
                    height: '2.5rem',
                    //alignItems: 'center' 
                }}>

                {item.sizes.map((size) => (
                    <ToggleButton key={size} value={size} sx={{ width: { xs: '100%', md: '9%' }, }}
                    >
                        {/* <h1 variant="outlined">{size}</h1> */}
                        <Typography component="p" variant="h5" sx={{ fontWeight: 600, }}>
                            {size}
                        </Typography>
                    </ToggleButton>
                ))}
            </ToggleButtonGroup>

            {item.colors.length > 1 ? (
                <ToggleButtonGroup
                    value={alignmentColor}
                    exclusive
                    onChange={handleAlignmentColor}
                    sx={{
                        //border: '0.2rem solid red',
                        width: 'auto',
                        height: 'auto',
                    }}>

                    {item.colors.map((color) => (
                        <ToggleButton key={color} value={color} sx={{
                            width: 'auto', height: 'auto',
                            "&.Mui-selected, &.Mui-selected:hover": {
                                backgroundColor: darkTheme ? '#1f2d20' : '#bcf5bc',
                            }
                            //backgroundColor: darkTheme ? '#121212' : 'white', //border: '0.2rem solid white', //#FFF3E0
                            //borderRadius: '20px'
                        }}>
                            <Box sx={{
                                width: '1.4rem', height: '1.4rem', backgroundColor: color,
                                //border: '0.3rem solid white', 
                                borderRadius: '6px'
                            }} />
                        </ToggleButton>
                    ))}
                </ToggleButtonGroup>
            ) : null}

            <Box sx={{
                display: 'flex',
                flexDirection: 'row', //justifyContent: 'space-between',
                widh: '100%', height: 'auto',
                //paddingBottom: '10px', 
                position: 'relative',
                marginTop: '20px',
            }}>
                <Button sx={{
                    backgroundColor: "magenta", height: 'auto',
                    width: { xs: '100%', md: '100%' },
                    ":hover": { backgroundColor: 'magenta' },
                    fontWeight: 600,

                }}
                    variant="contained"
                    onClick={() => setOrder({
                        poster: item.photos[0],
                        id: item.id,
                        name: item.name,
                        price: item.currentPrice,
                        color: alignmentColor,
                        size: alignmentSize
                    })}
                >
                    Додати в кошик
                </Button>
                <Button sx={{
                    backgroundColor: wishBotColor,
                    ":hover": { backgroundColor: wishBotColor },
                    marginLeft: "1rem",
                    width: 'auto'
                }}
                    variant="contained"
                    onClick={() => setWishList({
                        poster: item.photos[0],
                        id: item.id,
                        name: item.name,
                        price: item.currentPrice,
                    })}
                >
                    <FavoriteBorderRoundedIcon />
                </Button>
            </Box>

            <Box sx={{
                display: 'flex', flexDirection: 'column',
                //justifyContent: 'space-between',
                position: 'relative',
                marginTop: '1rem',
                marginBottom: '4rem'
            }}>
                {item.attributes.map((attribute) => (
                    putPropertyAndValue(attribute[0], attribute[1])
                ))}

                <Typography component="p" variant="h6" sx={{ marginTop: '1.5rem' }}>
                    {item.description}
                </Typography>
                {similarGoods()}
            </Box>

            <Modal
                open={isphotoOpen}
                onClose={() => setphotoOpen(false)}
                onClick={() => setphotoOpen(false)}
                sx={{
                    overflow: 'auto',
                }}
            >
                <Box sx={{
                    //position: 'absolute',
                    //top: '50%',
                    //transform: 'translate(-50%, -50%)',
                    //left: '50%',
                    display: 'flex',
                    //alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <img src={CurrentPhoto} alt={item.description.slice(0, 200)} style={{ minHeight: '100vh' }} />
                </Box>
            </Modal>

        </>

    )
}

export default Item;