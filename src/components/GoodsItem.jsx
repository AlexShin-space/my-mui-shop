import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const getText = (navigate, name, id, firstPrice, currentPrice) => {
    if (firstPrice) {
        return (
            <>
                <Typography
                    variant="body1"
                    component="h2"
                    onClick={() => { navigate("/" + id); window.scrollTo(0, 0) }}
                    sx={{ color: 'inherit', textDecoration: 'none', cursor: 'pointer' }}
                    noWrap
                >
                    {name}
                </Typography>


                <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                    <Typography variant="h6"
                        fontWeight={"bold"}
                    > {currentPrice} ₴</Typography>

                    <Typography variant="body1" component="s" //caption
                        //fontWeight={"bold"}
                        sx={{
                            textDecorationColor: 'red',
                            marginLeft: '0.4rem'
                            //paddingTop: 0,
                            //paddingBottom: '0rem',
                        }}> {firstPrice} ₴</Typography>
                </Box>
            </>
        )
    } else {
        return (
            <>
                <Typography
                    variant="body1"
                    component="h2"
                    noWrap
                    onClick={() => { navigate("/" + id); window.scrollTo(0, 0) }}
                    sx={{ color: 'inherit', textDecoration: 'none', cursor: 'pointer' }}
                >
                    {name}
                </Typography>
                <Typography variant="h6" fontWeight={"bold"}> {currentPrice} ₴</Typography>
            </>
        )
    }
}

const GoodsItem = (props) => {
    const { id, name, firstPrice, currentPrice, color, size, photos, setWishList, wishList } = props;
    const navigate = useNavigate();
    const [wishBotColor, setWishBotColor] = useState();

    useEffect(() => {
        setWishBotColor((wishList.filter((wishItem) =>
            id === wishItem.id && color === wishItem.color && size === wishItem.size).length !== 0)
            ? 'blue' : 'green')
    }, [wishList, id, color, size]);

    return (
        <Grid item xs={12} /*sm={6}*/ md={6}>
            <Card
                sx={{
                    height: '100%'
                }}>
                <CardMedia
                    href={"/" + id}
                    onClick={() => { navigate("/" + id); window.scrollTo(0, 0) }}
                    src={photos[0]}
                    component="img"
                    alt={name}
                    title={name}
                    sx={{ height: 650, cursor: 'pointer' }} />
                <CardContent
                    sx={{ paddingBottom: 0 }}
                >
                    {/* <Typography
                        variant="body1"
                        component="h2"
                        onClick={() => { navigate("/" + id); window.scrollTo(0, 0) }}
                        sx={{ color: 'inherit', textDecoration: 'none', cursor: 'pointer' }}
                        noWrap
                    >
                        {name}
                    </Typography> */}
                    {/* <Typography variant="caption" component="s" 
                    fontWeight={"bold"} 
                    sx={{textDecorationColor: 'red'}}> {changedPrice} грн.</Typography>
                    <Typography variant="body1"
                    fontWeight={"bold"}
                    > {firstPrice} грн.</Typography> */}
                    {getText(navigate, name, id, firstPrice, currentPrice)}
                </CardContent>
                <CardActions>
                    <Button sx={{
                        backgroundColor: "magenta",
                        ":hover": { backgroundColor: 'magenta' },
                        marginRight: '0.7rem',
                        width: {
                            xs: '100%', //md: 'auto'
                        }
                        //padding: '6px 12px',
                    }}
                        variant="contained"
                        //onClick={() => navigate("/" + id)}
                        href={"/" + id}
                    >
                        Купити
                    </Button>
                    <Button sx={{
                        backgroundColor: wishBotColor,
                        ":hover": { backgroundColor: wishBotColor }
                        //padding: '6px 12px',
                    }}
                        variant="contained"
                        onClick={() => {
                            setWishList({
                                poster: props.photos[0],
                                id: props.id,
                                name: props.name,
                                price: props.currentPrice,
                            })
                        }}
                    >
                        <FavoriteBorderRoundedIcon />
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default GoodsItem;