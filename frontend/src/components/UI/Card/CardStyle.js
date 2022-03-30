import styled from 'styled-components';

export const CardStyle = styled.section`
    padding-top: 20px;
    background-color: ${(props) => props.theme.backgroundColor};
`;

// const brackPoints = {
//     mobile: '700px',
//     laptop: '1440px'
// }
export const SectionPosts = styled.section`
    margin-bottom: 10px;
    border-radius: 5px;
    background-color: ${(props) => props.theme.textWhiteColor};
    padding: 10px;

    img {
        width: 100%;
        height: 80%;
        object-fit: cover;
    }

    @media screen and (max-width: 700px) {
        width: 80%;
    }

    @media screen and (min-width: 700px) {
        width: 30%;
        height: auto;
    }
`;
