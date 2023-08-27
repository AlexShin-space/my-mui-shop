import { TextField } from "@mui/material";

const Search = (props) => {
    const { onChange, value, lang } = props;

    return <TextField
        label={lang === 'uk' ? "Пошук" : "Поиск"}
        variant="standard"
        fullWidth
        type='search'
        value={value}
        onChange={onChange}
        sx={{ mb: '1.5rem', marginBottom: '20px' }}
    />;
};

export default Search;