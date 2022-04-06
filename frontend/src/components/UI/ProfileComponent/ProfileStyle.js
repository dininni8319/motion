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
        
        padding: 20px;
        
        .profile-detail-img-section {
            width: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: space-around;
            /* background: ${props => props.theme.backgroundColor}; */
            padding: 20px;
        }
        
        .profile-detail-img-section > img {
            width: 30%;
            height: 50%;
            object-fit: contain;
            
        }

        .icon-custom-style {
            color: ${props => props.theme.buttoncolor}
        }

`;