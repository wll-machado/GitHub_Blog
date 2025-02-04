import { styled } from "styled-components";


export const SearchContainer = styled.form`
    width: 100%;
    margin-top: 4.5rem;
    margin-bottom: 3rem;

    header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: .75rem;
    }

    h3{
        font-size: ${({ theme }) => theme.textSizes["title-title-s"]};
        color: ${({ theme }) => theme.colors["base-subtitle"]};
      }

     span {
        font-size: ${({ theme }) => theme.textSizes["text-title-s"]};
        color : ${({ theme }) => theme.colors["base-span"]};
     }
     
     input { 
        width: 100%;
        height: 2.375rem;
        padding:  0.75rem 1rem;
        border-radius: 6px;
        border: 1px solid ${({ theme }) => theme.colors["base-border"]};
        background: ${({ theme }) => theme.colors["base-input"]};
        color: ${({ theme }) => theme.colors["base-text"]};
        font-size: ${({ theme }) => theme.textSizes["text-text-s"]};
        transition:  .4s;

        &::focus{
            border-color: ${({ theme }) => theme.colors["brand-blue"]};  
            outline:none ;
        }

        &::placeholder{
            color: ${({ theme }) => theme.colors["base-label"]};
        }
     }
`


