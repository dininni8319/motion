import styled from 'styled-components';

export const RegisterStyle = styled.form`
   
   width: 100vw;
   display: flex;
   margin-top: 20px;
   flex-direction: column;
   align-items: center;
    
   input {
       border-bottom: 2px solid ${props => props.theme.backgroundColor};
       outline: none
   }
   
`

export const ButtonStyle = styled.button`
   color: ${props => props.theme.textWhiteColor};
   background-color: ${props => props.theme.buttoncolor};
   width: 15rem;
   height: 2.5rem;
   border-radius: 20px;
   margin-top: 30px
`