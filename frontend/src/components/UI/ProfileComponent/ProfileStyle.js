import styled from 'styled-components';

export const ProfileStyle = styled.ul`

     display: flex;
     flex-direction: column;
     align-items: start;
     background: ${props => props.theme.whiteColor};
     padding: 30px 0;
     
     h2 {
         text-transform: capitalize;
         font-weight: bold;
         font-size: 28px;
        }
        `;


export const ProfileDetail = styled.section`
        display: flex;
        flex-direction: column;
        align-items: center;
        
        min-height: 70vh;
        padding: 20px;
        
        .profile-detail-img-section {
            width: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: space-around;
            padding: 20px;
            /* position: relative; */
            
            div {
                position: relative;
                height: 30%;
                width: 30%;
            }
            
            
            div > img {
                width: 100%;
                height: 50%;
                border-top-right-radius:30px;
            }
            
            div::before {
                content: '';
                display: flex;
                justify-content: center;
                height: 100%;
                width: 100%;
                position: absolute;
                background: rgb(2,0,36);
                background: linear-gradient(76deg, rgba(2,0,36,1) 0%, rgba(225,188,87,0.2195377296426383) 0%);
                z-index: 10;
                border-top-right-radius:30px;

            }
        }
        

        .icon-custom-style {
            color: ${props => props.theme.buttoncolor}
        }

`;