import styled from 'styled-components';

export const AddPostStyle = styled.section`
    height: 100vh;
    width: 100vw;

    .btn-create-post {
        background-color: ${(props) => props.theme.buttoncolor};
        /* margin-bottom: 20px; */
    }
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

    .input-create-post {
      outline: none;
      width: 20rem;
      padding: 10px 20px;
    }


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