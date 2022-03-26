import styled from 'styled-components';

export const AddPostStyle = styled.section`
    height: 100vh;
    width: 80vw;
    background-color: ${(props) => props.theme.backgroundColor};

    .btn-create-post {
        background-color: ${(props) => props.theme.buttoncolor};
    }
`;

export const FormAddPostStyle = styled.form`
    width: 50%;
    height: 50%;
    margin: 20px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    background-color: ${(props) => props.theme.textWhiteColor};

    label {
        padding-bottom: 5px;
    }
`;
