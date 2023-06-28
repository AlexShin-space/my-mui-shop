import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { CardMedia, Divider, IconButton, Typography } from "@mui/material";
import Grid from '@mui/material/Grid';

const WhishItem = ({ poster, removeFromWishList, id, name, price }) => {

    return (
        <>
            <Grid container spacing={2} sx={{
                alignItems: 'center',
            }}>
                <Grid item xs={1.1}>
                    <CardMedia
                        src={poster}
                        component="img"
                        alt={name}
                        title={name}
                        sx={{ height: 120, width: 80 }} />
                </Grid>

                <Grid item xs={7} style={{ paddingLeft: '43px' }}>
                    <Typography variant="caption text" component="a" href={'/' + id}
                        sx={{
                            color: 'inherit',
                            textDecoration: 'none',
                        }} >
                        {name.slice(0, 70) + (name.length > 70 ? ".." : "")}
                    </Typography>
                </Grid>

                <Grid item xs={2.5}>
                    <Typography variant="body1" fontWeight={"bold"}>
                        {price} грн.
                    </Typography>
                </Grid>


                <Grid item xs={1}>
                    <IconButton
                        onClick={() => removeFromWishList(id)}
                    >
                        <DeleteForeverIcon />
                    </IconButton>
                </Grid>
            </Grid>
            <Divider /></>
    );
};

export default WhishItem;