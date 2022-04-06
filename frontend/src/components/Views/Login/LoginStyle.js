import styled from 'styled-components';

export const LoginStyled = styled.form`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.backgroundColor};

    .row-form {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .section-img {
        position: relative;
        width: 60vw;
    }

    .section-img > img {
        width: 100%;
        height: 100vh;
        object-fit: cover;
    }

    .section-img::before {
        content: '';
        width: 100%;
        height: 100%;
        display: block;
        position: absolute;
        left: 0;
        top: 0;
        background: linear-gradient(
            102deg,
            rgba(196, 104, 255, 0.2),
            rgba(110, 145, 246, 0.2)
        );
    }

    input {
        border-bottom: 2px solid ${(props) => props.theme.backgroundColor};
        outline: none;
        padding: 5px;
    }

    h1 {
        padding: 20px 0;
    }

    h2,
    p,
    .icon-custom-style {
        position: absolute;
        left: 15%;
        color: rgba(255, 255, 255, 0.8);
        padding: 0 5px;
    }

    h2 {
        font-size: 30px;
        font-weight: 500;
        top: 40%;
    }

    p {
        top: 45%;
        font-size: small;
    }

    .icon-custom-style {
        top: 30%;
        left: 28%;
        transform: rotate(-5deg);
    }

    label {
        font-size: 12px;
    }
`;
export const InputSection = styled.section`
    width: 50%;
    margin-bottom: 20px;
`;
