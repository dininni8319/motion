import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@1,300;1,400&family=Roboto+Condensed&family=Roboto:wght@400;500&display=swap');
    
    * {
        margin: 0;
        padding: 0;
        font-family: 'Roboto', Arial, Helvetica, sans-serif;
        box-sizing: border-box;
        font-weight: 400;
        background-color: rgb(243, 229, 171, 0.3);
    }

    a, p {
        text-decoration: none;
    }
    
    ul{
        list-style:none;
    }
`;

export const Theme = {
    //Colors
    backgroundColor: '#F2F2F2',
    goldColor: 'gold',
    textWhiteColor: 'white',
    textColorGrey: '#808080',
    borderColor: '#FCEADE',
    buttoncolor: '#A56FF8',
    buttonColorGold: 'gold',
    greyColor: '#c1c1c1',
    pinkColor: '#586BA4',
    whiteColor: '#fff',
    blueColor: '#8338ec',
    blueLightColor: '#a3e6f5',

    //Box-shadow
    boxShadow: 'none',

    //Border-radius
    borderRadius: '10px',

    //Font Style
    fontFamily: '"Roboto", sans-serif', 
};
