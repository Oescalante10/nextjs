import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    body, html{
        background-color: transparent;
        margin: 0;
        padding: 0;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: 20px;
        height: 100%;
        display: flex;
        flex-direction: column;
    }
    .show{
        animation: fadeIn ease 300ms;
    }
    @keyframes fadeIn {
        0% {
            width:0;
        }
        100% {
            width: 50px;
        }
    }

    .hide{
        width:0!important;
        font-size:0;
        padding: 0;
        margin:0;
        animation: fadeOut ease 300ms;
    }
    @keyframes fadeOut {
        0% {
            width: 50px
        }
        100% {
            width:0;
        }
    }

`;