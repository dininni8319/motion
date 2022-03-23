import styled from 'styled-components';

export const NavbarStyle = styled.ul`
    width: 100vw;
    display: flex;
    min-height: 5vh;
    justify-content: space-around;
    align-items: center;
    border-bottom: 1px solid ${(props) => props.theme.greyColor};
    color: ${(props) => props.theme.blueColor};
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);
`;
