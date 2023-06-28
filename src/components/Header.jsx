import InstagramIcon from '@mui/icons-material/Instagram';
import LocalMallRoundedIcon from '@mui/icons-material/LocalMallRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import { AppBar, Badge, IconButton, Toolbar, Typography } from "@mui/material";

function Header({ handleCart, orderLen, handleWish, wishLen }) {
    return (
        <AppBar position='static' sx={{ backgroundColor: "darkmagenta" }}>
            <Toolbar>
                <Typography
                    variant="h5" //выглядит как h6 
                    component="a" //но это функции не выполняет
                    noWrap
                    href='/'
                    sx={{
                        flexGrow: 1,
                        mr: 2,
                        display: { 
                            //xs: 'none', 
                            md: 'flex' 
                        },
                        fontFamily: 'cursive', //change the font
                        fontWeight: 600, //жирность
                        //letterSpacing: '.0rem',
                        color: 'inherit',
                        textDecoration: 'none',
                    }}
                >
                    Wear & Enjoy
                </Typography>

                <IconButton
                    color="inherit"
                    href="https://instagram.com/wear_and_enjoy_it?igshid=ZDdkNTZiNTM="
                    sx={{ marginRight: '3%' }}
                >
                    <InstagramIcon />
                </IconButton>

                <IconButton
                    color="inherit" //наследование
                    onClick={handleWish}
                >
                    <Badge
                        color="success"
                        badgeContent={wishLen}>
                        <FavoriteRoundedIcon />
                    </Badge>
                </IconButton>



                <IconButton
                    color="inherit" //наследование
                    onClick={handleCart}
                >
                    <Badge
                        color="success"
                        badgeContent={orderLen}>
                        <LocalMallRoundedIcon />
                    </Badge>
                </IconButton>

            </Toolbar>
        </AppBar>
    )
}

export default Header