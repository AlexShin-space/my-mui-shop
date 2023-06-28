import ControlPointIcon from '@mui/icons-material/ControlPoint';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { Box, CardMedia, Divider, IconButton, Typography } from "@mui/material";
import Grid from '@mui/material/Grid';

const BasketItem = ({ addToOrder, deleteFromOrder, poster, removeFromOrder, id, name, price, quantity, color, size }) => {

    return (
        <>
            <Grid container spacing={2} sx={{
                alignItems: 'center',
            }}>
                <Grid item xs={1.2}>
                    <CardMedia
                        src={poster}
                        component="img"
                        alt={name}
                        title={name}
                        sx={{ height: 120, width: 80 }} />
                </Grid>

                <Grid item xs={4.2}>
                    <Typography variant="caption text" component="a" href={'/' + id} sx={{
                        color: 'inherit',
                        textDecoration: 'none',
                    }}>
                        {name.slice(0, 70) + (name.length > 70 ? ".." : "")}
                    </Typography>
                </Grid>

                <Grid item xs={0.8}>
                    <Box sx={{ height: '1.8rem', width: '1.8rem', backgroundColor: color }} />
                </Grid>

                <Grid item xs={1}>
                    <Typography variant="body1" fontWeight={"bold"}>
                        {size}
                    </Typography>
                </Grid>

                <Grid item xs={1.5}>
                    <Typography variant="body1" fontWeight={"bold"}>
                        {price} ₴
                    </Typography>
                </Grid>

                <Grid item xs='auto'>
                    <IconButton onClick={() => addToOrder({
                        poster: poster,
                        id: id,
                        name: name,
                        price: price,
                        color: color,
                        size: size
                    })}>
                        <ControlPointIcon />
                    </IconButton>
                </Grid>

                <Grid item xs='auto'>
                    <Typography variant="body1" fontWeight={"bold"}>
                        {quantity}
                    </Typography>

                </Grid>

                <Grid item xs={1}>
                    <IconButton onClick={() => deleteFromOrder({
                        poster: poster,
                        id: id,
                        name: name,
                        price: price,
                        color: color,
                        size: size
                    })}>
                        <RemoveCircleOutlineIcon />
                    </IconButton>
                </Grid>

                <Grid item xs={1}>
                    <IconButton
                        onClick={() => removeFromOrder(id, quantity, size, color)}
                    >
                        <DeleteForeverIcon />
                    </IconButton>
                </Grid>
            </Grid>
            <Divider /></>
    );
};

export default BasketItem;