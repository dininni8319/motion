import styled from 'styled-components';

export const NavbarStyle = styled.ul`
    width: 100vw;
    display: flex;
    min-height: 8vh;
    justify-content: space-around;
    align-items: center;
    border: 1px solid ${(props) => props.theme.pinkColor};
    color: ${(props) => props.theme.blueColor};
`;
