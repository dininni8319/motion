import styled from 'styled-components';

export const FormCommentStyled = styled.form`
    .btn-comment-form {
       background-color: ${props => props.theme.buttoncolor};
       color: white;
       /* border-radius: 0px; */
       padding: 5px 20px;
    }
    
    input {
        outline: none;
        border-bottom: 2px solid ${props => props.theme.backgroundColor};
        
    }

`;