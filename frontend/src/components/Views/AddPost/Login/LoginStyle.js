import styled from 'styled-components';

export const LoginStyled = styled.form`
    
    width: 100vw;
    display: flex;
    margin-top: 20px;
    flex-direction: column;
    align-items: center;
    
    .row-form {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    input {
       border-bottom: 2px solid ${props => props.theme.backgroundColor};
       outline: none
    }
    h1 {
       padding: 20px 0;
    }
`
export const InputSection = styled.section`
   
   width: 60%;
   margin-bottom: 20px;
`