import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Box, Container, Typography } from '@mui/material';
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
    //SEO
    //const [currentTitle, setCurrentTitle] = useState("Yees")

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
            //setSnackOpen('Вже в обраному)');
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
            //setSnackOpen('Додано в обране');
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


    const RetFilterPage = (value) => {

        let arr = goods.filter((good) => good.category.includes(value));

        const numbers = new Array(Math.ceil(arr.length / ItemsPerPage));
        for (let i = 0; i < Math.ceil(arr.length / ItemsPerPage); i++) {
            numbers[i] = i;
        }
        let UAvalue = (value === 'hoodies' ? "Худі" : value === "T-shirts" ?
            "Футболки" : value === "suits" ? 'Костюми' : value === "trousers" ? 'Штани' : '');
        return (
            numbers.map((i) => (
                <Route key={i} exact path={'/' + value + '/page' + (i + 1)} element={
                    <>
                        <Helmet>
                            <title >
                                {"Купити " + UAvalue + " для жінок та чоловіків " +
                                    "- висока якість і низькі ціни з доставкою в Київ та по Україні в " +
                                    "інтернет магазині Wear and Enjoy it - сторінка " + (i + 1)}
                            </title>
                            <meta name="description" content={"20% заробітку йде на благодійність! " +
                                "Гарантія повернення, накладений платіж, купити якісні " + UAvalue + " недорого. " +
                                "Спробуйте! Магазин чоловічого та жіночого одягу. - сторінка " + (i + 1)} />
                            <link rel="canonical" href={'/' + value + '/page' + (i + 1)} />
                        </Helmet>
                        <h1>{(value === 'hoodies' ? "Худі" : value === "T-shirts" ? "Футболки" : value === "suits" ?
                            'Костюми' : value === "trousers" ? 'Штани' : '')}</h1>
                        <Filter alignment={value} setAlignment={setAlignment} setProducts={setProducts} />
                        <GoodsList goods={
                            arr.slice(i * ItemsPerPage, (i * ItemsPerPage + ItemsPerPage))
                        }
                            setWishList={addToWishList} wishList={wishList} />

                        <Mypagination page={i + 1} value={value} allpages={Math.ceil(arr.length / ItemsPerPage)} />
                    </>
                } />
            ))
        );
    };

    const retMainPages = () => {

        //let pages = 2;
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
                                {"Купити чоловічий та жіночий одяг - висока якість і " +
                                    "низькі ціни з доставкою в Київ та по Україні в " +
                                    "інтернет магазині Wear and Enjoy it - сторінка " + (i + 1)}
                            </title>
                            <meta name="description" content={"Гарантія повернення, накладений платіж, " +
                                "швидка доставка. Спробуйте! Доступні ціни, недорого. " +
                                "Купити cтильний та якісний одяг для чоловіків та жінок в магазині одягу. " +
                                "- сторінка " + (i + 1)} />
                            <link rel="canonical" href={'/page' + (i + 1)} />
                        </Helmet>

                        <Search value={search} onChange={handleChange} />
                        <Filter alignment={alignment} setAlignment={setAlignment} setProducts={setProducts} />
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
                    Купити чоловічий та жіночий одяг - висока якість і
                    низькі ціни з доставкою в Київ та по Україні в
                    інтернет магазині Wear and Enjoy it
                </title>
                <meta name="description" content="Гарантія повернення, накладений платіж, 
                    швидка доставка. Спробуйте! Доступні ціни, недорого. 
                    Купити cтильний та якісний одяг для чоловіків та жінок в магазині одягу." />
                <link rel="canonical" href="/" />

                <meta property="og:title" content="Стильний одяг. Насолоджуйся!" />
                <meta property="og:url" content="https://wear-and-enjoy.com/" />
                <meta property="og:description"
                    content="Твій магазин крутецького одягу"
                />
                <meta property="og:image" content="logotype.png" />
                <meta property="og:type" content="website" />
            </Helmet>
            <Box sx={{ overflow: 'hidden', display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                <Header
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

                                    <Typography component="p" variant="h5" style={{ fontWeight: 500, marginBottom: '0.2rem' }}>
                                        Вітаємо в нашому інтернет магазині😄
                                    </Typography>

                                    <Typography component="h1" >
                                        Тут зможете купити якісний одяг, зокрема
                                        {" "}<a style={{ color: 'green', textDecoration: 'none', }} href="/hoodies/page1">
                                            худі</a>
                                        {", "}<a style={{ color: 'green', textDecoration: 'none', }} href="/T-shirts/page1">
                                            футболки</a>
                                        {", "}<a style={{ color: 'green', textDecoration: 'none', }} href="/suits/page1">
                                            костюми</a>
                                        {", "}<a style={{ color: 'green', textDecoration: 'none', }} href="/trousers/page1">
                                            штани</a>.
                                    </Typography>
                                    <Box sx={{ marginBottom: '0.5rem' }}>
                                        Детальніше на ст.
                                        {" "}<a href="/about-as" style={{ color: 'green', fontWeight: 600, textDecoration: 'none' }}>про нас</a>
                                    </Box>

                                    <Search value={search} onChange={handleChange} />
                                    <Filter alignment={alignment} setAlignment={setAlignment} setProducts={setProducts} />
                                    <GoodsList goods={products.slice(0 * ItemsPerPage, (0 * ItemsPerPage + ItemsPerPage))}
                                        setWishList={addToWishList} wishList={wishList} />
                                    <Mypagination allpages={Math.ceil(goods.length / ItemsPerPage)} page={1} />
                                </>
                            } />
                            {retMainPages()}

                            {RetFilterPage('hoodies')}
                            {RetFilterPage('T-shirts')}
                            {RetFilterPage('suits')}
                            {RetFilterPage('trousers')}

                            {goods.map((item) => (
                                <Route key={item.id} exact path={'/' + item.id} element={
                                    <Item item={item} setOrder={addToOrder}
                                        setWishList={addToWishList} wishList={wishList} />} />
                            ))}
                            <Route exact path='/order' element={<MyOrder order={order} />} />

                            <Route exact path='/about-as' element={<AboutAS />} />

                            {/* default page 404 */}
                            <Route exact path='*' element={
                                <>
                                    <Filter alignment={alignment} setAlignment={setAlignment} setProducts={setProducts} />
                                    <h1>Не можу знайти цю сторінку :((</h1>
                                </>
                            } />
                        </Routes>
                    </BrowserRouter>

                </Container>
                <Basket
                    order={order}
                    removeFromOrder={removeFromOrder}
                    cartOpen={isCartOpen}
                    closeCart={() => setCartOpen(false)}
                    addToOrder={addToOrder}
                    deleteFromOrder={deleteFromOrder} />
                <Wishlist
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
        </HelmetProvider>
    );

}

export default App;
