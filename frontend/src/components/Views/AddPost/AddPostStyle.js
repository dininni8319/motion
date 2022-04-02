import styled from 'styled-components';

export const AddPostStyle = styled.section`
    min-height: 100vh;
    width: 100vw;
   
`;

export const FormAddPostStyle = styled.form`
    width: 100%;
    height: 5rem;
    margin-bottom: 20px;
    padding: 20px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: ${(props) => props.theme.backgroundColor};

    .btn-create-post {
        background-color: ${(props) => props.theme.buttoncolor};
    }

    .input-create-post {
        outline: none;
        width: 20rem;
        padding: 10px 20px;
        border-radius: 20px;
    }

    @media screen and (max-width: 700px) {
        .input-create-post {
            width: 100%;
            margin-bottom: 10px;
        }

        min-height: 20vh;
        flex-direction: column-reverse;

        .input-file {
            width: 100%;
        }
    }
`;

export const InputSection = styled.section`
    display: flex;
    justify-content: center;
    padding-top: 10px;
    width: 100%;
`;

export const ButtonAddPostStyle = styled.section`
    color: ${(props) => props.theme.textWhiteColor};
    background-color: ${(props) => props.theme.buttoncolor};
    width: 15rem;
    height: 2.5rem;
    border-radius: 20px;
    text-align: center;
    padding-top: 5px;
`;
