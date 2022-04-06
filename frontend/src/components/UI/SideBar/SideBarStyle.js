import styled from 'styled-components';

export const SideBarStyle = styled.section`
    height: 8vh;
    width: 100vw;
    background-color: white;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 10px;
    overflow-x: scroll;

    ::-webkit-scrollbar {
        width: 4px;
        height: 5px;
        background-color: white;
    }

    ::-webkit-scrollbar-thumb {
       background: ${(props) => props.theme.greyColor};
       border-radius: 5px;
    }


    .user-profile-initials {
        color: ${(props) => props.theme.textWhiteColor};
        background-color: ${(props) => props.theme.buttoncolor};
        border-radius: 50%;
        width: 35px;
        height: 35px;
        text-align: center;
        padding-top: 6px;
        font-weight: 300;
    }
`;

export const SectionUserProfile = styled.section`
    width: 5rem;
    display: flex;
    margin: 2px;

    span {
        font-weight: 300;
    }
`;
