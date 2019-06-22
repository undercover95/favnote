import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Montserrat:300,600&display=swap');

    *, *::before, *::after {
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    html {
        /* happy rems */
        font-size: 62.5%; /* 1rem = 10px */
    }

    body {
        font-size: 1.6rem; /* default size 16px */
        font-family: "Montserrat", sans-serif;
        margin: 0;
        padding: 0;
    }
`;

export default GlobalStyle;
