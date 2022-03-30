import styled from 'styled-components';

export const NavbarStyle = styled.ul`
    width: 100vw;
    display: flex;
    min-height: 5vh;
    justify-content: space-around;
    align-items: center;
    background-color: ${(props) => props.theme.whiteColor};
    border-bottom: 1px solid ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.grayColor};
    font-size: 14px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);

    li:first-child {
        font-size: x-large;
        font-weight: bolder;
    }
`;
