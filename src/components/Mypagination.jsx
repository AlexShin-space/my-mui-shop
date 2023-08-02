import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Box, IconButton, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Mypagination = (props) => {
    const { page, value, allpages } = props; //текущая странца, вид товара, количество страниц
    const [currentPage, setCurrentPage] = useState(page);
    const navigate = useNavigate();

    // const handlePageChange = (event, page) => {
    //     //setCurrentPage()
    //     window.scrollTo(0, 0);
    //     if (!value && page === 1) {
    //         navigate('/');
    //     } else {
    //         navigate('/' + (value ? value + "/" : '') + 'page' + page);
    //     }
    // }

    // for (let i = 1; i <= allpages; i++) {
    //     custompagination.push(<Button variant="contained" size="small"
    //         sx={{
    //             backgroundColor: i === currentPage ? "#9c27b0" : "white",
    //             ":hover": { backgroundColor: 'magenta', color: 'white' },
    //             color: i === currentPage ? "white" : "black",
    //             marginLeft: '0.5rem', marginRight: '0.5rem',
    //             borderRadius: '100%',
    //             //width: '4%', 
    //             height: '2.4rem'
    //         }}
    //         href={i === 1 ? "/" : ((value ? value + "/" : '') + 'page' + i)}
    //         key={i}>{i}</Button>)
    // }
    let custompagination = [];
    const pushToCustomPagination = (i) => {
        return (
            custompagination.push(<IconButton variant="contained" size="small"
                sx={{
                    backgroundColor: i === currentPage ? "#9c27b0" : "white",
                    ":hover": { backgroundColor: 'green', color: 'white' },
                    color: i === currentPage ? "white" : "black",
                    marginLeft: '0.5rem', marginRight: '0.5rem',
                    borderRadius: '100%',
                    width: '1.8rem',
                    height: '1.8rem',
                }}
                href={i === 1 ? (value ? "/" + value + "/page1" : "/") : ((value ? "/" + value + "/" : '') + 'page' + i)}
                key={i}>{i}</IconButton>)
        )
    }

    if (allpages > 6) {
        if (currentPage === 1 || currentPage === 2 || currentPage === 3) {
            for (let i = 1; i < 5; i++) {
                pushToCustomPagination(i);
            }
            custompagination.push(<div key="first" style={{ textAlign: 'center', padding: '0 6px', minWidth: '32px' }}>...</div>)
            pushToCustomPagination(allpages);
        } else if (currentPage !== allpages && currentPage !== allpages - 1 && currentPage !== allpages - 2) {
            pushToCustomPagination(1);
            custompagination.push(<div key="first" style={{ textAlign: 'center', padding: '0 6px', minWidth: '32px' }}>...</div>)
            pushToCustomPagination(currentPage - 1);
            pushToCustomPagination(currentPage);
            pushToCustomPagination(currentPage + 1);
            custompagination.push(<div key="second" style={{ textAlign: 'center', padding: '0 6px', minWidth: '32px' }}>...</div>)
            pushToCustomPagination(allpages);
        } else {
            pushToCustomPagination(1);
            custompagination.push(<div key="first" style={{ textAlign: 'center', padding: '0 6px', minWidth: '32px' }}>...</div>)
            for (let i = allpages - 3; i <= allpages; i++) {
                pushToCustomPagination(i);
            }
        }
    } else {
        for (let i = 1; i <= allpages; i++) {
            pushToCustomPagination(i);
        }
    }

    if (custompagination.length > 1) {
        return (
            <>
                {/* <Stack spacing={2} sx={{
                    alignItems: 'center', marginTop: { xs: '2rem', md: '3rem' },
                    marginBottom: { xs: '3rem', md: '4rem' }
                }}>
                    <Pagination count={allpages} color="secondary"
                        onChange={handlePageChange}
    
                        defaultPage={currentPage}
                    >
    
                    </Pagination>
    
                </Stack> */}
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row', //justifyContent: 'space-between',
                    //width: '100%', //height: 'auto',
                    position: 'relative',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: { xs: '2rem', md: '3rem' },
                    marginBottom: { xs: '3rem', md: '4rem' },
    
                }}>
                    <IconButton
                        sx={{ color: currentPage === 1 ? "#a5a5a5" : "inherit" }}
                        onClick={() => {
                            if (currentPage > 2) {
                                setCurrentPage(currentPage - 1);
                                navigate('/' + (value ? value + "/" : '') + 'page' + (currentPage - 1));
                                window.scrollTo(0, 0);
                            } else if (currentPage === 2) {
                                setCurrentPage(currentPage - 1);
                                navigate('/');
                                window.scrollTo(0, 0);
                            }
                        }}
                    >
                        <ArrowBackIosIcon />
                    </IconButton>
    
                    {custompagination}
    
                    <IconButton
                        sx={{ color: currentPage === allpages ? "#a5a5a5" : "inherit" }}
                        onClick={() => {
                            if (currentPage < allpages) {
                                setCurrentPage(currentPage + 1);
                                navigate('/' + (value ? value + "/" : '') + 'page' + (currentPage + 1));
                                window.scrollTo(0, 0);
                            }
                        }}
                    >
                        <ArrowForwardIosIcon />
                    </IconButton>
                </Box>
            </>
        );
    }
    else {
        return (
            <Typography component="h2" variant="h5" sx={{
                marginBottom: '2rem',
                marginTop: '2rem',
                fontWeight: 420,
            }}>
                Це все, що ми змогли знайти для вас.
            </Typography>
        )
    }
};

export default Mypagination;