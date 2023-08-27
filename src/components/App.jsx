import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Box, Container, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Helmet, HelmetProvider } from 'react-helmet-async';
import { goods } from '../data/goods';
import AboutAS from './AboutAs';
import Basket from './Basket';
import Filter from './Filter';
import Footer from './Footer';
import GoodsList from './GoodsList';
import Header from './Header';
import Item from './Item';
import Mypagination from './Mypagination';
import MyOrder from './OrderPage';
import Search from './Search';
import Snack from './Snack';
import Wishlist from './Wishlist';
import { titleForFilterPage, descriprionForFilterPage, 
    titleForPaginationPages, descriptionForPaginationPages, welcomeText, page404text, getName } from './texts';

const App = () => {
    const getLocalCartData = (value) => {
        let loaclCartData = localStorage.getItem(value);
        if (loaclCartData === null) {
            return [];
        } else {
            return JSON.parse(loaclCartData);
        }
    }
    const getCountOfProducts = () => {
        let Allquantities = 0;
        for (let i = 0; i < order.length; i++) {
            Allquantities += order[i].quantity;
        }
        return Allquantities;
    }
    const getTheme = () => {
        let darkTheme = localStorage.getItem("DarkTheme");
        if (darkTheme === null) {
            return false;
        } else {
            return JSON.parse(darkTheme);
        }
    }
    const getLanguage = () => {
        let lang = localStorage.getItem("language");
        if (lang === null) {
            return 'uk';
        } else {
            return JSON.parse(lang);
        }
    }
    //SEO
    //const [currentTitle, setCurrentTitle] = useState("Yees")

    const [darkTheme, setCurrentTheme] = useState(getTheme());
    const [order, setOrder] = useState(getLocalCartData("Cart")); //[]
    const [search, setSearch] = useState('');
    const [products, setProducts] = useState(goods);
    const [isCartOpen, setCartOpen] = useState(false);
    const [isSnackOpen, setSnackOpen] = useState('');

    const [wishList, setWishList] = useState(getLocalCartData("wishList"))
    const [isWishListOpen, setWishListOpen] = useState(false);

    //num of Products per
    const [ItemsPerPage] = useState(5);

    const [alignment, setAlignment] = useState();
    const [productsInOrder, setProductsInOrder] = useState(getCountOfProducts());
    const [language, setLanguage] = useState(getLanguage());

    const handleChange = (e) => {
        if (!e.target.value) {
            setProducts(goods);
            setSearch('');
            return;
        }

        setSearch(e.target.value);
        setProducts(
            goods.filter((good) =>
                good.name.toLowerCase().includes(e.target.value.toLowerCase())
            ))
    };
    //localStorage.clear();

    const addToOrder = (goodsItem) => {
        let quantity = 1;

        const indexInOrder = order.findIndex(
            (item) => item.id === goodsItem.id && item.color === goodsItem.color && item.size === goodsItem.size
        );

        if (indexInOrder > -1) {
            quantity = order[indexInOrder].quantity + 1;
            setOrder(order.map((item) => {
                if (!(item.id === goodsItem.id && item.color === goodsItem.color && item.size === goodsItem.size)) return item;
                return {
                    poster: item.poster,
                    id: item.id,
                    name: item.name,
                    price: item.price,
                    color: item.color,
                    size: item.size,
                    quantity,
                };
            }),
            );
        } else {
            setOrder([
                ...order,
                {
                    poster: goodsItem.poster,
                    id: goodsItem.id,
                    name: goodsItem.name,
                    price: goodsItem.price,
                    color: goodsItem.color,
                    size: goodsItem.size,
                    quantity,
                },
            ],
            );
        }
        setSnackOpen('Додано в кошик');
        setProductsInOrder(productsInOrder + 1);
    };

    //видалення -1 товару з корзини і замовлення
    const deleteFromOrder = (goodsItem) => {
        const indexInOrder = order.findIndex(
            (item) => item.id === goodsItem.id && item.color === goodsItem.color && item.size === goodsItem.size
        );

        if (order[indexInOrder].quantity !== 1) {
            let quantity = order[indexInOrder].quantity - 1;
            setOrder(order.map((item) => {
                if (!(item.id === goodsItem.id && item.color === goodsItem.color && item.size === goodsItem.size)) return item;
                return {
                    poster: item.poster,
                    id: item.id,
                    name: item.name,
                    price: item.price,
                    color: item.color,
                    size: item.size,
                    quantity,
                };
            }),);
            setProductsInOrder(productsInOrder - 1);
        }
    }



    //add to wishList
    const addToWishList = (goodsItem) => {
        const indexInwishList = wishList.findIndex(
            (item) => item.id === goodsItem.id
        );
        if (indexInwishList > -1) {
            setSnackOpen('Видалено з обраного');
            removeFromWishList(goodsItem.id)
        } else {
            setWishList([
                ...wishList,
                {
                    poster: goodsItem.poster,
                    id: goodsItem.id,
                    name: goodsItem.name,
                    price: goodsItem.price,
                },
            ],
            );
            setSnackOpen('Додано в обране');
        }
    };



    // Local basket storage
    useEffect(() => {
        localStorage.setItem("Cart", JSON.stringify(order));
    }, [order]);
    // Local wishList storage
    useEffect(() => {
        localStorage.setItem("wishList", JSON.stringify(wishList));
    }, [wishList]);
    //theme
    useEffect(() => {
        localStorage.setItem("DarkTheme", JSON.stringify(darkTheme));
    }, [darkTheme]);
    //language
    useEffect(() => {
        localStorage.setItem("language", JSON.stringify(language));
    }, [language]);
    
    //title
    // useEffect(() => {
    //     document.title = currentTitle;
    // }, [currentTitle]);


    const removeFromOrder = (itemId, quantity, size, color) => {
        setOrder(order.filter((item) => !(item.id === itemId && item.color === color && item.size === size)));
        setProductsInOrder(productsInOrder - quantity);
    };
    const removeFromWishList = (itemId) => {
        setWishList(wishList.filter((item) => item.id !== itemId));
    }


    const RetFilterPages = (values) => {
        return (
            values.map((value) => {

                let arr = goods.filter((good) => good.category.includes(value));

                let numbers = new Array(Math.ceil(arr.length / ItemsPerPage));
                for (let i = 0; i < Math.ceil(arr.length / ItemsPerPage); i++) {
                    numbers[i] = i;
                }

                let name = getName(value, language)
                return (
                    numbers.map((i) => (
                        <Route key={i} exact path={'/' + value + '/page' + (i + 1)} element={
                            <>
                                <Helmet>
                                    <title >
                                        {titleForFilterPage(language, name, i+1)}
                                    </title>
                                    <meta name="description" content={descriprionForFilterPage(language, name, i+1)} />
                                    <link rel="canonical" href={'/' + value + '/page' + (i + 1)} />
                                </Helmet>
                                <h1>{name}</h1>
                                <Filter alignment={value} setAlignment={setAlignment} setProducts={setProducts} lang={language} />
                                <GoodsList goods={
                                    arr.slice(i * ItemsPerPage, (i * ItemsPerPage + ItemsPerPage))
                                }
                                    setWishList={addToWishList} wishList={wishList} />

                                <Mypagination page={i + 1} value={value} allpages={Math.ceil(arr.length / ItemsPerPage)} />
                            </>
                        } />
                    ))
                )
            })
        )
    };

    const theme = createTheme({
        palette: {
          mode: darkTheme ? "dark" : "light",
        },
    });

    const retMainPages = () => {
        const numbers = new Array(Math.ceil(goods.length / ItemsPerPage));
        for (let i = 1; i < Math.ceil(goods.length / ItemsPerPage); i++) {
            numbers[i] = i;
        }
        return (
            numbers.map((i) => (
                <Route key={i} exact path={'/page' + (i + 1)} element={
                    <>
                        <Helmet>
                            <title>
                                {titleForPaginationPages(language, i+1)}
                            </title>
                            <meta name="description" content={descriptionForPaginationPages(language, i+1)} />
                            <link rel="canonical" href={'/page' + (i + 1)} />
                        </Helmet>

                        <Search value={search} onChange={handleChange} lang={language}/>
                        <Filter alignment={alignment} setAlignment={setAlignment} setProducts={setProducts} lang={language}/>
                        <GoodsList goods={
                            goods.slice(i * ItemsPerPage, (i * ItemsPerPage + ItemsPerPage))
                        }
                            setWishList={addToWishList} wishList={wishList} />

                        <Mypagination page={i + 1} allpages={Math.ceil(goods.length / ItemsPerPage)} />
                    </>
                } />
            ))
        );
    }


    const helmetContext = {};
    return (
        <HelmetProvider context={helmetContext}>
            <Helmet>
                <title>
                    {titleForPaginationPages(language)}
                </title>
                <meta name="description" content={descriptionForPaginationPages(language)} />
                <link rel="canonical" href="/" />

                <meta property="og:title" content="Стильний одяг. Насолоджуйся!" />
                <meta property="og:url" content="https://wear-and-enjoy.com/" />
                <meta property="og:description"
                    content="Твій магазин крутецького одягу"
                />
                <meta property="og:image" content="logotype.png" />
                <meta property="og:type" content="website" />
            </Helmet>
            <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box sx={{ overflow: 'hidden', display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                <Header
                    lang={language}
                    setLang={setLanguage}
                    checked={darkTheme}
                    setTheme={setCurrentTheme}
                    handleCart={() => setCartOpen(true)}
                    orderLen={productsInOrder}
                    handleWish={() => setWishListOpen(true)}
                    wishLen={wishList.length}
                />
                <Container
                    sx={{
                        mt: '1rem',
                        //backgroundColor: 'rgba(255, 235, 59, 0.12)'
                    }}
                >
                    <BrowserRouter>
                        <Routes>
                            <Route exact path='/' element={
                                <>
                                    {welcomeText('uk')}

                                    <Search value={search} onChange={handleChange} lang={'uk'}/>
                                    <Filter alignment={alignment} setAlignment={setAlignment} setProducts={setProducts}  lang={'uk'}/>
                                    <GoodsList goods={products.slice(0 * ItemsPerPage, (0 * ItemsPerPage + ItemsPerPage))}
                                        setWishList={addToWishList} wishList={wishList} />
                                    <Mypagination allpages={Math.ceil(products.length / ItemsPerPage)} page={1} />
                                </>
                            } />
                            <Route exact path='/ru' element={
                                <>
                                    {welcomeText('ru')}

                                    <Search value={search} onChange={handleChange} lang={'ru'}/>
                                    <Filter alignment={alignment} setAlignment={setAlignment} setProducts={setProducts}  lang={'ru'}/>
                                    <GoodsList goods={products.slice(0 * ItemsPerPage, (0 * ItemsPerPage + ItemsPerPage))}
                                        setWishList={addToWishList} wishList={wishList} />
                                    <Mypagination allpages={Math.ceil(products.length / ItemsPerPage)} page={1} />
                                </>
                            } />
                            {retMainPages()}
                            {RetFilterPages(['hoodies', 'T-shirts', 'suits', 'trousers'])}
                            {/* {RetFilterPage('hoodies')} */}
                            {/* {['hoodies', 'T-shirts', 'suits', 'trousers'].map(value => RetFilterPage(value))} */}

                            {/* ua item's pages */}
                            {goods.map((item) => (
                                <Route key={item.id} exact path={'/' + item.id} element={
                                    <Item darkTheme={darkTheme} item={item} setOrder={addToOrder}
                                        setWishList={addToWishList} wishList={wishList} />} />
                            ))}

                            {/* ru item's pages */}
                            {/* {goods.map((item) => (
                                <Route key={item.id} exact path={'/ru/' + item.id} element={
                                    <Item darkTheme={darkTheme} item={item} setOrder={addToOrder}
                                        setWishList={addToWishList} wishList={wishList} />} />
                            ))} */}

                            <Route exact path='/order' element={<MyOrder order={order} />} />

                            <Route exact path='/about-as' element={<AboutAS />} />

                            {/* default page 404 */}
                            <Route exact path='*' element={
                                <>
                                    <Filter alignment={alignment} setAlignment={setAlignment} setProducts={setProducts}  lang={language}/>
                                    {page404text(language)}
                                </>
                            } />
                        </Routes>
                    </BrowserRouter>
                </Container>
                
                <Basket
                    darkTheme={darkTheme}
                    order={order}
                    removeFromOrder={removeFromOrder}
                    cartOpen={isCartOpen}
                    closeCart={() => setCartOpen(false)}
                    addToOrder={addToOrder}
                    deleteFromOrder={deleteFromOrder} />
                <Wishlist
                    darkTheme={darkTheme}
                    wishList={wishList}
                    removeFromWishList={removeFromWishList}
                    wishOpen={isWishListOpen}
                    closeWish={() => setWishListOpen(false)} />

                <Snack
                    //isOpen={isSnackOpen == '' ? false : true}
                    handleClose={() => setSnackOpen('')}
                    text={isSnackOpen}
                />
                <Footer />
            </Box>
            </ThemeProvider>
        </HelmetProvider>
    );

}

export default App;
