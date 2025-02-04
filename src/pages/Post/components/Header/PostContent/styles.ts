import { styled } from "styled-components";

export const PostContentContainer = styled.section`

    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 8rem;
    padding: 2.5rem 2rem;
    
    h1 , h2, h3{
        color: ${({ theme }) => theme.colors["brand-blue"]};
    }
`