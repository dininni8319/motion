import styled from 'styled-components';

export const LoginStyled = styled.form`

    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.backgroundColor};
    
    .row-form {
       width: 100%;
       display: flex; 
       flex-direction: column;
       align-items: center;
       /* background-color: ${props => props.theme.textWhiteColor}; */
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
         background: linear-gradient(102deg, rgba(196,104,255, 0.2), rgba(110,145,246, 0.2)); 
      }
   
      input {
         border-bottom: 2px solid ${props => props.theme.backgroundColor};
         outline: none

      }

      h1 {
         padding: 20px 0;
      }
      
      h2 {
         font-size: 35px;
         font-weight: 500;
         position: absolute;
         color: rgba(255, 255, 255, 0.8);
         top: 20%;
         left: 15%;
      }

      label {
         font-size: 14px;
      }
`
export const InputSection = styled.section`
   width: 40%;
   margin-bottom: 20px;
`