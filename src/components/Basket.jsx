import CloseIcon from '@mui/icons-material/Close';
import LocalMallRoundedIcon from '@mui/icons-material/LocalMallRounded';
import { Button, Container, Divider, IconButton, List, ListItem, ListItemIcon, ListItemText, Modal, Typography } from '@mui/material';
import React from 'react';
import BasketItem from './BasketItem';

export const Basket = (props) => {
    const {
        addToOrder,
        deleteFromOrder,
        cartOpen,
        closeCart = Function.prototype,
        order = [],
        removeFromOrder
    } = props;
    //const navigate = useNavigate();

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
                //height: 'auto',
                maxHeight: '80%',
                //minWidth: '25%',
                width: 'auto',
                //overflow: 'auto',
                justifyContent: 'center',
                position: 'absolute',
                display: 'flex',
                backgroundColor: 'white',
                borderRadius: '1.2rem'

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
                        <ListItem>Тут порожньо :(</ListItem>
                    ) : (
                        <>  <List sx={{overflow: 'auto',maxHeight: '75%',}}>
                                {order.map((item) => (
                                    <BasketItem key={item.name + item.color + item.size} addToOrder={addToOrder} deleteFromOrder={deleteFromOrder} removeFromOrder={removeFromOrder} {...item} />
                                ))}
                            </List>

                            <Divider sx={{ backgroundColor: 'purple' }} />
                            <Divider sx={{ backgroundColor: 'purple' }} />
                            <ListItem>
                                <Typography sx={{ fontWeight: 700 }}>
                                    Загальна вартість:{' '}
                                    {order.reduce((acc, item) => {
                                        return acc + item.price * item.quantity;
                                    }, 0)}{' '}
                                    грн.
                                </Typography>
                            </ListItem>
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