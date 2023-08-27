import CloseIcon from '@mui/icons-material/Close';
import LocalMallRoundedIcon from '@mui/icons-material/LocalMallRounded';
import { Box, Button, Container, Divider, Grid, IconButton, List, ListItem, ListItemIcon, ListItemText, Modal, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import BasketItem from './BasketItem';
import { promocodes } from '../data/promo';

export const Basket = (props) => {
    const {
        darkTheme,
        addToOrder,
        deleteFromOrder,
        cartOpen,
        closeCart = Function.prototype,
        order = [],
        removeFromOrder
    } = props;


    const getPromocode = () => {
        let promocode = localStorage.getItem("promocode");
        if (promocode === null) {
            return "";
        } else {
            return JSON.parse(promocode);
        }
    }

    const [promocode, setPromocode] = useState(getPromocode);

    const getDiscount = () => {
        if (promocode !== "") {
            for (const [promo, discount] of Object.entries(promocodes)) {
                if (promocode === promo) {
                    return discount/100;
                }
            }
        }
        return 0;
    }

    const [finalPriceComponent, setFinalPriceComp] = useState(promocode === "" ? 'p' : 's');
    const [discount, setDiscount] = useState(getDiscount());
    const sumWithoutDisc = order.reduce((acc, item) => {
        return acc + item.price * item.quantity;
    }, 0);
    const [sumWithDisc, setSumWithDiscount] = useState(parseInt(sumWithoutDisc * (1-discount), 10));
    const [promtext, setPromtext] = useState(promocode === "" ? 'Promo code' : 'Successfull');


    useEffect(() => {
        localStorage.setItem("promocode", JSON.stringify(promocode));
        setSumWithDiscount(parseInt(sumWithoutDisc * (1-discount), 10));
    }, [promocode, sumWithoutDisc, discount]);
    
    const checkPromo = (promo) => {
        setPromocode(promo);
        for (const [promocode, discnt] of Object.entries(promocodes)) {
            if (promo === promocode) {
                setFinalPriceComp("s")
                setDiscount(discnt/100);
                setPromtext('Successfull');
                //setSumWithDiscount(parseInt(sumWithoutDisc * (1-discnt/100), 10));
                return;
            }
        }
        setPromtext('Promo code');
        setFinalPriceComp("p");
        
    }

    return (
        <Modal
            //anchor="right"
            open={cartOpen}
            onClose={closeCart}
            sx={{
                //maxHeight: '50%',
                display: 'flex',
                justifyContent: 'center',
                //margin: '250px 0'
                position: 'absolute', top: '20%',// transform: 'translate(-50%, -50%)', 
            }}
        >
            <Container sx={{
                maxHeight: '80%',
                //minWidth: '25%',
                width: 'auto', backdropFilter: 'blur(12px)',
                //overflow: 'auto',
                justifyContent: 'center',
                position: 'absolute',
                display: 'flex',
                backgroundColor: darkTheme ? 'rgba(1, 1, 1, 0.2)' : 'white',
                borderRadius: '1.2rem',
                border: '2px solid darkmagenta',

            }}>
                <List>
                    <ListItem>
                        <ListItemIcon>
                            <LocalMallRoundedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Кошик" />
                        <IconButton onClick={closeCart}>
                            <CloseIcon />
                        </IconButton>
                    </ListItem>
                    <Divider />
                    {!order.length ? (
                        <ListItem sx={{ justifyContent: 'center', }}>
                            Тут порожньо :(
                        </ListItem>
                    ) : (
                        <>  <List sx={{ overflow: 'auto', maxHeight: '75%', }}>
                            {order.map((item) => (
                                <BasketItem key={item.name + item.color + item.size} addToOrder={addToOrder} deleteFromOrder={deleteFromOrder} removeFromOrder={removeFromOrder} {...item} />
                            ))}
                        </List>

                            <Divider sx={{ backgroundColor: 'purple', border: '3px' }} />
                            
                                <Grid container spacing={10} sx={{
                                    alignItems: 'center',
                                }}>
                                    <Grid item xs={8}>
                                    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                                        <Typography sx={{ fontWeight: 700 }}>
                                            Загальна вартість:
                                        </Typography>
                
                                        <Typography variant="body1" component={finalPriceComponent} //caption
                                            sx={{
                                                fontWeight: 'bold',
                                                textDecorationColor: 'red',
                                                marginLeft: '0.5rem',
                                                marginRight: '0.5rem',
                                            }}> 
                                            {sumWithoutDisc}
                                            {finalPriceComponent !== "s" ? " ₴" : null}
                                            </Typography>

                                        {finalPriceComponent === "s" ? (
                                            <><Typography variant="body1" component="p" 
                                                sx={{ color: 'green', marginRight: '0.5rem', fontWeight: "bold" }}>
                                                    -{discount * 100}% (-{sumWithoutDisc-sumWithDisc}):
                                                </Typography>
                                                
                                                <Typography variant="body1" component="p" sx={{fontWeight: "bold"}}>
                                                    {sumWithDisc} ₴ </Typography></>) : null}
                                    </Box>
                                                              
                                    </Grid>
                                    <Grid item xs={4}>
                                        <TextField
                                            //error
                                            variant="standard"
                                            size="small"
                                            sx={{ marginRight: 0}}
                                            id="outlined-number"
                                            label={promtext}
                                            type="text"
                                            value={promocode} onChange={e => checkPromo(e.target.value)}
                                        />
                                    </Grid>
                                </Grid>
                                    
                                    
                            
                            <ListItem>
                                <Button sx={{
                                    width: '70%', margin: '0 auto', display: 'flex', background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                                    borderRadius: 3,
                                    color: 'white',
                                    height: 48,
                                    padding: '0 30px',
                                    boxShadow: '0 3px 3px 3px rgba(255, 105, 135, .3)'
                                }}
                                    variant="contained"
                                    href="/order"
                                >
                                    Замовити
                                </Button>
                            </ListItem>
                        </>
                    )}
                </List>
            </Container>
        </Modal>
    )
}

export default Basket;