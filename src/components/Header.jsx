import InstagramIcon from '@mui/icons-material/Instagram';
import LocalMallRoundedIcon from '@mui/icons-material/LocalMallRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import { AppBar, Badge, Box, Button, FormControl, IconButton, Select, Switch, Toolbar, Typography } from "@mui/material";

function Header({ checked, setTheme, handleCart, orderLen, handleWish, wishLen, lang, setLang }) {

    const handleChange = (event) => {
        setTheme(event.target.checked)
    };

    const getLanguageButtonOne = () => {
        let isDisabled;

        if (lang === 'ru') {
            isDisabled = false;
        } else {
            isDisabled = true;
        }
        return (
            <Button variant="contained" sx={{
                backgroundColor: 'darkmagenta',
                marginLeft: '0.2rem'
                //width: '1.5rem'
            }} value={'uk'} disabled={isDisabled} href="/">ua</Button>
        )
    }

    const getLanguageButtonTwo = () => {
        let isDisabled;

        if (lang === 'uk') {
            isDisabled = false;
        } else {
            isDisabled = true;
        }
        
        return (
            <Button variant="contained" 
                sx={{
                backgroundColor: 'darkmagenta',
                marginLeft: '0.2rem',
                marginRight: '0.2rem'
                //width: '1.5rem'
            }} value={'ru'} disabled={isDisabled} href="/ru">ru</Button>
        )
    }

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

                <Box 
                    //sx={{ minWidth: '0rem' }}
                >
                <FormControl fullWidth >
                    <Select
                        //defaultValue={lang}
                        value = {lang}
                        onChange={(event) => {setLang(event.target.value)}}
                        sx={{color: 'white', borderBlockColor: 'red'}}
                        //color="success"
                    >
                        {/* <MenuItem value={'ru'} href="/ru">ru</MenuItem>
                        <MenuItem value={'uk'} href="/">ua</MenuItem> */}
                        {/* <Button variant="contained" sx={{
                            backgroundColor: 'darkmagenta',
                            marginLeft: '0.2rem'
                            //width: '1.5rem'
                        }} value={'uk'} href="/">ua</Button>

                        <Button variant="contained" sx={{
                            backgroundColor: 'darkmagenta',
                            marginLeft: '0.2rem',
                            marginRight: '0.2rem'
                            //width: '1.5rem'
                        }} value={'ru'} href="/ru">ru</Button> */}
                        {getLanguageButtonOne()}
                        {getLanguageButtonTwo()}
                        
                        {/* <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            
                        </Box> */}

                        {/* <Button variant="contained" sx={{
                            backgroundColor: 'darkmagenta'
                            //width: '1.5rem'
                        }}>ua</Button>

                        <Button variant="contained" sx={{
                            backgroundColor: 'darkmagenta',
                            color: 'black'
                            //width: '1.5rem'
                        }}>ru</Button> */}
                        
                    </Select>
                </FormControl>
                </Box>

                <Switch checked={checked} color="default" onChange={handleChange}/>
                
                <IconButton
                    color="inherit"
                    href="https://instagram.com/wear_and_enjoy_it?igshid=ZDdkNTZiNTM="
                    //sx={{ marginRight: '3%' }}
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