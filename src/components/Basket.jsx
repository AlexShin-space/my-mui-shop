import CloseIcon from '@mui/icons-material/Close';
import LocalMallRoundedIcon from '@mui/icons-material/LocalMallRounded';
import { Button, Container, Divider, Grid, IconButton, List, ListItem, ListItemIcon, ListItemText, Modal, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import BasketItem from './BasketItem';

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
    const [promokode, setPromokode] = useState('');

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
                //backgroundColor: 'black',
                //height: 'auto',
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
                                        <Typography sx={{ fontWeight: 700 }}>
                                            Загальна вартість:{' '}
                                            {order.reduce((acc, item) => {
                                                return acc + item.price * item.quantity;
                                            }, 0)}{' '}
                                            ₴
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <TextField
                                            //sx={{ width: '100%' }}
                                            variant="standard"
                                            size="small"
                                            sx={{ marginRight: 0, }}
                                            id="outlined-number"
                                            label="Промокод"
                                            type="text"
                                            value={promokode} onChange={e => setPromokode(e.target.value)}
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
                                //onClick={() => navigate("/order")}
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