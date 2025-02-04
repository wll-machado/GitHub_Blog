import { styled } from "styled-components";


export const PostListContainer = styled.section`
    margin-bottom: 14rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(26rem, 1fr));
    gap: 2rem;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`