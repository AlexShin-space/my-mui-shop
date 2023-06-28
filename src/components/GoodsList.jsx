import React from 'react';
import { Grid } from '@mui/material';
import GoodsItem from './GoodsItem';


const GoodsList = (props) => {
    const { goods, setWishList, wishList} = props;

    return (
        <Grid container spacing={9}>
            {goods.map((item) => {
                return(
                    <GoodsItem key={item.id} id={item.id} setWishList={setWishList} 
                        wishList={wishList} {...item}/>
                )
            })}
        </Grid>
    );
};

export default GoodsList;