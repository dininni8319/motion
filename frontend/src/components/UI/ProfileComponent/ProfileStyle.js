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
            
            div {
                display: flex;
                justify-content: center;
                width: 30%;
            }

            div > img {
               width: 100%;
               height: 50%;
               
           }
        }
        

        .icon-custom-style {
            color: ${props => props.theme.buttoncolor}
        }

`;