import styled from 'styled-components';

export const CardStyle = styled.section`
    padding-top: 20px;
    background-color: ${(props) => props.theme.backgroundColor};
`;

export const SectionPosts = styled.section`
    margin-bottom: 10px;
    border-radius: 5px;
    background-color: ${(props) => props.theme.textWhiteColor};
    padding: 10px;
    min-height: 100px;

    img {
        width: 100%;
        height: 80%;
        object-fit: cover;
    }
    .section-comments {
        min-height: 10vh;
        border: 1px solid ${props => props.theme.backgroundColor};
    }

    .comment-custom-style {
        background: ${props => props.theme.backgroundColor};
        height: 100%;
        padding: 10px;
    }
    @media screen and (max-width: 700px) {
        width: 80%;
    }

    @media screen and (min-width: 700px) {
        width: 30%;
        height: auto;
    }
`;
