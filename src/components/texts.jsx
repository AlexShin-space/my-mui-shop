import { Box, Typography } from "@mui/material";

export const titleForFilterPage = (lang, name, num) => {
    if (lang === 'uk') {
        return (
            "Купити " + name + " для жінок та чоловіків " +
            "- висока якість і низькі ціни з доставкою в Київ та по Україні в " +
            "інтернет магазині Wear and Enjoy it - сторінка " + num
        );
    }
    else if (lang === 'ru') {
        return (
            "xc"
        )
    }
};

export const descriprionForFilterPage = (lang, name, num) => {
    if (lang === 'uk') {
        return (
            "20% заробітку йде на благодійність! " +
            "Гарантія повернення, накладений платіж, купити якісні " + name + " недорого. " +
            "Спробуйте! Магазин чоловічого та жіночого одягу. - сторінка " + num
        );
    }
    else if (lang === 'ru') {
        return (
            "xc"
        )
    }
};

export const titleForPaginationPages = (lang, num) => {
    if (lang === 'uk') {
        return (
            "Купити чоловічий та жіночий одяг - висока якість і " +
            "низькі ціни з доставкою в Київ та по Україні в " +
            "інтернет магазині Wear and Enjoy it" + (num ? (" - сторінка "+num) : "")
        );
    }
    else if (lang === 'ru') {
        return (
            "xc"
        )
    }
    
};

export const descriptionForPaginationPages = (lang, num) => {
    if (lang === 'uk') {
        return (
            "Гарантія повернення, накладений платіж, " +
            "швидка доставка. Спробуйте! Доступні ціни, недорого. " +
            "Купити cтильний та якісний одяг для чоловіків та жінок в магазині одягу." +
            + (num ? (" - сторінка "+num) : "")
        );
    }
    else if (lang === 'ru') {
        return (
            "xc"
        )
    }
};

export const welcomeText = (lang) => {
    let text = new Array(4);
    let hrefs = new Array(4);

    if (lang === 'uk') {
        text = [
            "Вітаємо в нашому інтернет магазині😄",
            "Тут зможете купити якісний одяг, зокрема",
            ["худі","футболки","костюми","штани"],
            "Детальніше на ст.",
            "про нас"
        ]
        hrefs = [
            "/hoodies/page1",
            "/T-shirts/page1",
            "/suits/page1",
            "/trousers/page1",
            "/about-as"
        ]
    }
    
    else if (lang === 'ru') {
        text = [
            "Рады видеть в нашем интернет магазине😄",
            "Тут сможете купить качественную одежду, например",
            ["худи","футболки","костюмы","штаны"],
            "Подробнее на ст.",
            "про нас"
        ]
        hrefs = [
            "/ru/hoodies/page1",
            "/ru/T-shirts/page1",
            "/ru/suits/page1",
            "/ru/trousers/page1",
            "/ru/about-as"
        ]
    }
    return (
        <><Typography component="p" variant="h5" style={{ fontWeight: 500, marginBottom: '0.2rem' }}>
            {text[0]}
        </Typography>
        <Typography component="h1">
            {text[1]}
            {" "} <a style={{ color: 'green', textDecoration: 'none', }} href={hrefs[0]}>{text[2][0]}</a>
            {", "}<a style={{ color: 'green', textDecoration: 'none', }} href={hrefs[1]}>{text[2][1]}</a>
            {", "}<a style={{ color: 'green', textDecoration: 'none', }} href={hrefs[2]}>{text[2][2]}</a>
            {", "}<a style={{ color: 'green', textDecoration: 'none', }} href={hrefs[3]}>{text[2][3]}</a>.
        </Typography>
        <Box sx={{ marginBottom: '0.5rem' }}>
            {text[3]}{" "}<a href="/about-as" style={{ color: 'green', fontWeight: 600, textDecoration: 'none' }}>{text[4]}</a>
        </Box></>
    )
}

export const page404text = (lang) => {
    let errorText;

    if (lang === 'uk') {
        errorText = 'Не можу знайти цю сторінку :(('
    }
    else if (lang === 'ru') {
        errorText = 'Страничка не найдена :('
    }

    return (
        <h1>{errorText}</h1>
    )
}

export const getName = (value, lang) => {
    let enValues = ['hoodies', 'T-shirts', 'suits', 'trousers']
    let neededValues = new Array(3);

    if (lang === 'uk') {
        neededValues = ['Худі', 'Футболки','Костюми','Штани']
    }
    else if (lang === 'ru') {
        neededValues =['Худи', 'Футболки', 'Костюмы', 'Штаны']
    }

    return (
        neededValues[enValues.indexOf(value)]
    )
}