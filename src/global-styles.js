import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
    ${reset}
    span {
        user-select: none;
    }
    h1 {
        font-size: 2em;
        font-weight: 400;
        border-bottom: 1px solid rgb(132,132,132);
        padding: 10px 0px;
        margin-bottom: 20px;
    }

    h3 {
        font-size: 1.17em;
        display: flex;
        align-items: center;
        margin-bottom: 10px;
        img {
            margin-left: 10px;
        }
    }

    h2 {
        font-size: 1.5em;
        border-bottom: 1px solid rgb(132,132,132); 
        padding: 8px 0px;
        margin-bottom: 10px;
    }

    p {
        font-size: 16px;
    }
`;
