import CloseIcon from '@mui/icons-material/Close';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import { Container, Divider, IconButton, List, ListItem, ListItemIcon, ListItemText, Modal } from '@mui/material';
import React from 'react';
import WishItem from './Wishitem';

export const Wishlist = (props) => {
    const {
        darkTheme, wishOpen,
        closeWish = Function.prototype,
        wishList = [],
        removeFromWishList
    } = props;
    //const navigate = useNavigate();

    return (
        <Modal
            //anchor="right"
            open={wishOpen}
            onClose={closeWish}
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
                backdropFilter: 'blur(12px)',
                backgroundColor: darkTheme ? 'rgba(1, 1, 1, 0.2)' : 'white',
                borderRadius: '1.2rem',
                border: '2px solid darkmagenta', //rgba(0, 0, 255, 0.8)

            }}>
                <List>
                    <ListItem>
                        <ListItemIcon>
                            <FavoriteRoundedIcon sx={{ color: "darkmagenta" }} />
                        </ListItemIcon>
                        <ListItemText primary="Улюблене" />
                        <IconButton onClick={closeWish}>
                            <CloseIcon />
                        </IconButton>
                    </ListItem>
                    <Divider />
                    {!wishList.length ? (
                        <ListItem sx={{ justifyContent: 'center', }}>
                            Тут порожньо
                        </ListItem>
                    ) : (
                        <>
                            <List sx={{ overflow: 'auto', maxHeight: '85%' }}>
                                {wishList.map((item) => (
                                    <WishItem key={item.name} removeFromWishList={removeFromWishList} {...item} />

                                ))}
                            </List>
                        </>
                    )}
                </List>
            </Container>
        </Modal>
    )
}

export default Wishlist;