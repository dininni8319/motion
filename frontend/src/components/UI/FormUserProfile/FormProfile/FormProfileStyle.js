import styled from 'styled-components';
import { RegisterStyle, ButtonStyle } from './../../../Views/Register/RegisterStyle';

export const FormProfileStyle = styled(RegisterStyle)`
    padding-left: 20px;
    
   .row-form {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: start;
    }
`;

export const ButtonProfileStyle = styled(ButtonStyle)`
    background-color: ${props => props.theme.buttonColorGold};
`;