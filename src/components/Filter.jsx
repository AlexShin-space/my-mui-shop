import { Typography } from '@mui/material';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import React from 'react';

import { useNavigate } from 'react-router-dom';
import { goods } from '../data/goods';
import { getName } from './texts';


const Filter = (props) => {
    const { lang, alignment, setAlignment, setProducts} = props;
    const navigate = useNavigate();

    const handleAlignment = (event, newAlignment) => {
        if (!newAlignment) {
            navigate('/');
            setProducts(goods);
            setAlignment(newAlignment);
            return;
        }
        setAlignment(newAlignment);

        navigate('/' + (newAlignment ? newAlignment + '/page1' : ''));

        setProducts(goods.filter((good) =>
            good.category.includes(newAlignment)
        ));
    };

    const myMargin = '8%';

    const giveFilter = (elementEng) => {
        let element = getName(elementEng, lang)
        return (
            <Typography
                variant="subtitle1" //выглядит как h6
                component="a"
                href={elementEng + "/page1"}
                sx={{
                    pointerEvents: 'none',
                    //flexGrow: 1,
                    //mr: 2,
                    //display: { xs: 'none', md: 'flex' },
                    fontFamily: 'sans-serif', //change the font
                    fontWeight: 600, //жирность
                    //letterSpacing: '.0rem',
                    color: 'inherit',
                    textDecoration: 'none',
                }}>
                {element}
            </Typography>
        );
    }


    return (
        <ToggleButtonGroup
            value={alignment}
            exclusive
            onChange={handleAlignment}
            color='success'
            sx={{
                marginBottom: '10px', width: '100%',
                //alignItems: 'center' 
            }}>

            <ToggleButton value="hoodies"
                //href="/hoodies/page1"
                sx={{
                    //borderRadius: '45px',
                    border: 'InactiveBorder',
                    marginRight: myMargin
                }}>
                {giveFilter("hoodies")}
            </ToggleButton>

            <ToggleButton value="T-shirts"
                //href="/shirts/page1"
                sx={{
                    //borderRadius: '45px',
                    border: 'InactiveBorder',
                    marginRight: myMargin
                }}>
                {giveFilter("T-shirts")}
            </ToggleButton>

            <ToggleButton value="suits"
                //href="/suits/page1"
                sx={{
                    border: 'InactiveBorder',
                    marginRight: myMargin
                }}>
                {giveFilter("suits")}
            </ToggleButton>

            <ToggleButton value="trousers"
                //href="/trousers/page1"
                sx={{
                    border: 'InactiveBorder',
                }}>
                {giveFilter("trousers")}
            </ToggleButton>

        </ToggleButtonGroup>
    );
}

export default Filter;