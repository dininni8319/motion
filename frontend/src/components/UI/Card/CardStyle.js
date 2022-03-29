import styled from 'styled-components';

export const CardStyle = styled.section`
     padding-top: 20px;
     background-color: ${props => props.theme.backgroundColor};
`;

export const SectionPosts = styled.section`
   width: 30%;
   height: auto;
   padding: 10px;
   margin-bottom: 10px;
   border-radius: 5px;
   background-color: ${props => props.theme.textWhiteColor};
   
   img {
       width: 100%;
       height: 80%;
       object-fit: cover;
   }
`;