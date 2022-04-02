import styled from 'styled-components';

export const FormCommentStyled = styled.form`

    .btn-comment-form {
       background-color: ${props => props.theme.buttoncolor};
       color: white;
       border-radius: 5px;
       padding: 5px 20px;
       margin-bottom: 10px;
    }
    
    .comment-input {
        outline: none;
        border: 1px solid ${props => props.theme.backgroundColor}; 
        padding: 3px;
        /* width: 10rem; */
    }

`;