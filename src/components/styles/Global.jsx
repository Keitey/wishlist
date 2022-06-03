import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

    #root, html{
        max-width: 1440px;
        margin: 0 auto;
    }

    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body{
        font-family: 'Nunito', sans-serif;
        background-color: #F2F4ED;
    }

    a{
        text-decoration: none;
    }
`;

export default GlobalStyles;