
import { createGlobalStyle } from 'styled-components';



const global = createGlobalStyle`
    @import url("https://fonts.googleapis.com/css2?family=Questrial&display=swap");

    * {
        padding: 0;
        margin: 0;
        border: 0;
        box-sizing: box-sizing;
        text-decoration: none;
        outline: none;
    }

    html, body, #root {
        min-width: 100%;
        min-height: 100%;
    }

    ul, ol {
        list-style: none;   
    }

    h1 {
        font-size: 32px;
    }

    h2 {
        font-size: 28px;
    }

    h3 {
        font-size: 22px;
    }

    body {
        font-family: "Questrial", Arial;
        font-size: 16px;
        background: #efefef;
    }

    main {
        max-width: 1200px;
        width: 100%;

        margin: 140px auto;
        background: white;
        padding: 20px;

        box-shadow: 4px 4px 8px #e4dcdc;
    }

    @media screen and (max-width: 1200px) {
        main {
            max-width: 1160px;
            margin: 80px 20px;
        }
    }


    input {
        font-family: "Questrial", Arial;
        font-size: 16px;
        padding: 6px 12px;
        border: 1px solid #efefef;
    }

    input:focus {
        box-shadow: 0 0 0 0;
        outline: 0;
    }

    a {
        color: inherit;
    }
`

export default global;