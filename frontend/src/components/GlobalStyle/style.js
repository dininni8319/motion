import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@1,300;1,400&family=Roboto+Condensed&family=Roboto:wght@400;500&display=swap');
    
    * {
        margin: 0;
        padding: 0;
        font-family: Arial, Helvetica, sans-serif;
        box-sizing: border-box;
        font-weight: 400;
    }

    a {
        text-decoration: none;
        color: red;
    }
    
    ul{
        list-style:none;
    }

    .error{
        color:red;
    } 

`;

export const Theme = {
    //Colors
    backgroundColor: '#f2f2f2',
    textWhiteColor: 'white',
    borderColor: '#FCEADE',
    buttoncolor: '#A56FF8',
    greyColor: '#c1c1c1',
    pinkColor: '#586BA4',
    whiteColor: '#fff',
    blueColor: '#66d6ef',
    blueLightColor: '#a3e6f5',
    // pinkColor: '#ef475b',

    //Box-shadow
    boxShadow: 'none',

    //Border-radius
    borderRadius: '10px',

    //Font Style
    fontFamily: '"Roboto", sans-serif'
};
