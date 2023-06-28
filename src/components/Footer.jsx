import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import CopyrightIcon from '@mui/icons-material/Copyright';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Box, Divider, Grid, IconButton, Typography } from "@mui/material";

function Footer() {
    return (
        <Box sx={{ width: '100%', backgroundColor: '#0a780ae0', height: 'auto', marginTop: 'auto' }}>
            <Grid container spacing={2} sx={{ color: 'white', }}>
                <Grid item xs={1.4}>
                    <img src='/logotype.png' alt="logo" style={{ width: '3rem', height: '3rem', marginLeft: '0.7rem', marginTop: '0.25rem' }} />
                </Grid>
                <Grid item xs={1.5} sx={{ marginTop: '0.8rem' }}>
                    <Typography component='a' href='/about-as' color="white" variant='subtitle1'>
                        Про нас
                    </Typography>
                </Grid>
                <Grid item xs={3.5} sx={{ marginTop: '0.3rem' }}>
                    <Typography >
                        +380 95 595 1136
                    </Typography>
                    <Typography >
                        м.Одеса
                    </Typography>
                </Grid>
                <Grid item xs={3.1} sx={{ marginTop: '0.7rem' }}
                >

                    <Typography component="p" variant="subtitle1">Слава Україні!</Typography>

                </Grid>
                <Grid item xs={0.5} sx={{ marginTop: '0.6rem' }}>
                    <IconButton color="inherit"
                        href=""
                    >
                        <InstagramIcon />
                    </IconButton>

                </Grid>
                <Grid item xs={0.5} sx={{ marginTop: '0.6rem' }}>
                    <IconButton color="inherit"
                        href=""
                    >
                        <YouTubeIcon />
                    </IconButton>

                </Grid>
                <Grid item xs={0.5} sx={{ marginTop: '0.6rem' }}>
                    <IconButton color="inherit"
                        href=""
                    >
                        <AudiotrackIcon />
                    </IconButton>
                </Grid>
            </Grid>
            <Divider sx={{ backgroundColor: '#56b356e0', height: '1px' }} />
            <Box sx={{
                display: 'flex', flexDirection: 'row', color: 'white',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <CopyrightIcon sx={{ width: '0.9rem' }}
                />
                <Typography component="p" variant="subtitle2">
                    2023 All rights reserved.
                </Typography>
            </Box>
            <Divider sx={{ backgroundColor: 'purple', height: '2px' }} />


        </Box>
    )
}

export default Footer;