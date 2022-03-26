import styled from 'styled-components';

export const AddPostStyle = styled.section`
    height: 100vh;
    width: 100vw;

    .btn-create-post {
        background-color: ${(props) => props.theme.buttoncolor};
        margin-bottom: 20px;
    }
`;

export const FormAddPostStyle = styled.form`
    width: 100%;
    height: 10%;
    margin: 20px;
    padding: 20px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: ${(props) => props.theme.backgroundColor};
 
    .input-create-post {
      outline: none;
      width: 30rem;
      padding: 5px 10px;
}


`;
