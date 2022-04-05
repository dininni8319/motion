import styled from 'styled-components';

export const ProfileStyle = styled.ul`

     display: flex;
     flex-direction: column;
     align-items: start;
     h2 {
         text-transform: capitalize;
         font-weight: bold;
         font-size: 28px;
        }
        `;


export const ProfileDetail = styled.section`
        display: flex;
        flex-direction: column;
    
        background: ${props => props.theme.whiteColor};
        padding: 20px;
        margin: 20px;

        .profile-detail-img-section {
            width: 100%;
        }

        .profile-detail-img-section > img {
            width: 30%;
            height: 80%;
            object-fit: cover;
        }

        .profile-detail-section {
         
        }
`;