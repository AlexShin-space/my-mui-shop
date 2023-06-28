import { Grid, Typography } from '@mui/material';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const AboutAS = (props) => {

    let iconWidth = '4rem';
    return (
        <>
            <Helmet>
                <title>
                    Про нас - інтернет магазин Wear and Enjoy it -
                    Купити чоловічий та жіночий одяг - висока якість і
                    низькі ціни з доставкою в Київ та по Україні
                </title>
                <meta name="description" content="Гарантія повернення, накладений платіж, 
                    знижки. Спробуйте! Доступні ціни, недорого. 
                    Купити cтильний та якісний одяг для чоловіків та жінок в магазині одягу." />
                <link rel="canonical" href="/about-as" />
                <meta property="og:title" content="Чому саме ми? Давай познайомимось!" />
            </Helmet>


            <Typography variant="h4" component="h1" sx={{ marginTop: '1rem', marginBottom: '1rem', fontWeight: 500, }}>
                Чому варто купити одяг саме в нас?
            </Typography>
            <Typography variant="h5" component="h2" sx={{ marginBottom: '1rem', textAlign: 'center' }}>
                Наші переваги:
            </Typography>

            <Grid container spacing={4} style={{ textAlign: 'center' }}>

                <Grid item md={4} xs={6} >
                    <img alt="del" src="/Icons/valid-document.png"
                        style={{ width: iconWidth, height: iconWidth, }} />
                    <Typography variant="h6" component="h3" sx={{ marginBottom: '0.1rem', marginTop: '-0.4rem' }}>
                        Надійно і зручно
                    </Typography>
                    <Typography variant="subtitle1" component="p" sx={{ marginBottom: '1rem', }}>
                        Надсилаємо товар поштою з накладеним платежем
                    </Typography>
                </Grid>
                <Grid item md={4} xs={6}>
                    <img alt="del" src="/Icons/quality.png" style={{ width: iconWidth, height: iconWidth }} />
                    <Typography variant="h6" component="h3" sx={{ marginBottom: '0.1rem', marginTop: '-0.4rem' }}>
                        Якісно
                    </Typography>
                    <Typography variant="subtitle1" component="p" sx={{ marginBottom: '1rem', }}>
                        Висока якість як товару, так і послуг щодо підтримки
                    </Typography>
                </Grid>
                <Grid item md={4} xs={12}>
                    <img alt="del" src="/Icons/hands-holding-heart.png" style={{ width: iconWidth, height: iconWidth }} />
                    <Typography variant="h6" component="h3" sx={{ marginBottom: '0.1rem', marginTop: '-0.4rem' }}>
                        Благодійно
                    </Typography>
                    <Typography variant="subtitle1" component="p" sx={{ marginBottom: '1rem', }}>
                        20% заробітку йде на ЗСУ. Проте ціни не завищені на 20%!
                    </Typography>
                </Grid>

                <Grid item md={6} xs={12}>
                    <img alt="del" src="/Icons/price-tag.png" style={{
                        width: iconWidth, height: iconWidth,
                        //marginLeft: iconWidth 
                    }} />
                    <Typography variant="h6" component="h3" sx={{ marginBottom: '0.1rem', marginTop: '-0.4rem' }}>
                        Вигідно
                    </Typography>
                    <Typography variant="subtitle1" component="p" sx={{ marginBottom: '1rem', }}>
                        Надаємо щедрі акції постійним клієнтам для заохочення. Для нас важливо
                        надавати якісні послуги та товар, щоб до нас поверталися
                    </Typography>
                </Grid>
                <Grid item md={6} xs={12}>
                    <img alt="del" src="/Icons/magnifying-glass-with-check-mark.png" style={{
                        width: iconWidth, height: iconWidth,
                        //marginRight: iconWidth 
                    }} />

                    <Typography variant="h6" component="h3" sx={{ marginBottom: '0.1rem', marginTop: '-0.4rem' }}>
                        Знахідка
                    </Typography>
                    <Typography variant="subtitle1" component="p" sx={{ marginBottom: '1rem', }}>
                        Ми спеціально підбираємо популярний і стильний одяг з цікавими рішеннями і
                        певною незвичайною скоринкою. А також постійно оновлюємо товар та слідкуємо за трендами
                    </Typography>
                </Grid>
            </Grid>


            <Typography variant="h5" component="h2" sx={{ textAlign: 'center', marginBottom: '1rem', marginTop: '1rem' }}>
                Хто ми?
            </Typography>
            <Typography variant="subtitle1" component="p"
                sx={{ marginBottom: '1rem', }}
            >
                Ми - молодий інтернет магазин чоловічого та жіночого одягу Wear and Enjoy, який прагне розвиватися та
                допомогти знаходити справді крутий одяг за відносно невеликою ціною. Тут ви зможете знайти та придбати
                {" "}<a style={{ color: 'green', textDecoration: 'none', }} href="/hoodies/page1">
                    худі</a>
                {", "}<a style={{ color: 'green', textDecoration: 'none', }} href="/T-shirts/page1">
                    футболки</a>
                {", "}<a style={{ color: 'green', textDecoration: 'none', }} href="/suits/page1">
                    костюми</a>
                {", "}<a style={{ color: 'green', textDecoration: 'none', }} href="/trousers/page1">
                    штани</a> та інше.
            </Typography>
            <Typography variant="subtitle1" component="p" sx={{ marginBottom: '1rem', }}>
                Нашою роботою є знаходити якісний стильний одяг та презентувати його.
                Фактично, як будь-який інтернет-магазин, ми зв'язуємо виробника/постачальника з кінцевим споживачем.
            </Typography>
            <Typography variant="subtitle1" component="p" sx={{ marginBottom: '1rem', }}>
                Нас мотивує можливість вносити свій вклад в економіку України забезпечуючи економічний кругообіг,
                а також підтримувати ЗСУ, які зараз воюють на фронті захищаючи нас.
            </Typography>



            <Typography variant="h5" component="h2" sx={{ textAlign: 'center', marginBottom: '1rem', marginTop: '1rem' }}>
                Як відбувається замовлення?
            </Typography>
            <Typography variant="subtitle1" component="p" sx={{ marginBottom: '0.5rem', }}>
                1. Після додавання товара в кошик, там з'явиться кнопка "Замовити".
            </Typography>
            <Typography variant="subtitle1" component="p" sx={{ marginBottom: '0.5rem', }}>
                2. Натиснувши на неї, ви побачите форму, де потрібно заповнити поля
                з *зірочкою (Ця інформація використовується для відправки замовлення).
            </Typography>
            <Typography variant="subtitle1" component="p" sx={{ marginBottom: '1rem', }}>
                3. Натисніть "Замовити". Готово! Менеджер зв'яжеться з вами, дякуємо за замовлення!
            </Typography>
            <Typography variant="subtitle1" component="p" sx={{ marginBottom: '1rem', }}>
                4. Ми відправляємо ваше замовлення і очікуємо його отримання)
            </Typography>
        </>
    );
}

export default AboutAS;