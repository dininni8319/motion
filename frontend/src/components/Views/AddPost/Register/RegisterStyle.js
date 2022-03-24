import styled from 'styled-components';

export const RegisterStyle = styled.form`
   
   width: 100vw;
   height: 100vh;
   display: flex;
   padding: 0%;
   margin: 0%;
   flex-direction: column;
   align-items: center;
   background-color: ${props => props.theme.backgroundColor};

   input {
      border-bottom: 2px solid ${props => props.theme.backgroundColor};
      outline: none;
      padding: 5px;
   }

   label {
      font-size: 14px;
   }  
`

export const ButtonStyle = styled.button`
   color: ${props => props.theme.textWhiteColor};
   background-color: ${props => props.theme.buttoncolor};
   width: 15rem;
   height: 2.5rem;
   border-radius: 20px;
   margin-top: 40px
`