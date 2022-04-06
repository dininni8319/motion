import styled from 'styled-components';

export const NavbarStyle = styled.ul`
    width: 100vw;
    display: flex;
    min-height: 7vh;
    justify-content: space-around;
    align-items: center;
    background-color: ${(props) => props.theme.whiteColor};
    border-bottom: 1px solid ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.grayColor};
    font-size: 14px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);

    li:first-child {
        font-size: x-large;
        font-weight: bolder;
    }

    .nav-img {
        width: 35px;
        height: 35px;
        border-radius: 50%;
        background: rgb(2,0,36);
        background: linear-gradient(76deg, rgba(2,0,36,1) 0%, rgba(193,196,198,1) 1%);
    }

    .icon-custom-style {
        color: ${props => props.theme.goldColor};
        cursor: pointer;
    }
`;
