import styled from 'styled-components';

export const SideBarStyle = styled.section`
    height: 7vh;
    width: 100vw;
    background-color: white;
    display: flex;
    align-items: center;
    padding: 0 10px;
    border-bottom: 1px solid ${props => props.theme.backgroundColor};
    
    .user-profile-initials {
        color: ${props => props.theme.textWhiteColor};
        background-color: ${props => props.theme.buttoncolor};
        border-radius: 50%;
        font-size: small;
    }
`;

export const SectionUserProfile = styled.section`
    width: 5rem;
    display: flex;
    margin: 2px;
    
    span {
        font-weight:300;
    }


`