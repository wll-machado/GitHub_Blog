import { styled } from "styled-components";


export const ExternalLinkContainer = styled.a`
border: none;
background: none;
color: ${({ theme }) => theme.colors["brand-blue"]};
font-size: ${({ theme }) => theme.textSizes["components-link"]};
text-transform: uppercase;
display: flex;
align-items: center;
gap: 0.5rem;
line-height: 19px;
font-weight: 700;
border-bottom: 1px solid transparent;
height: 19px;
cursor: pointer;
svg{
    width: .75rem;
    height: .75rem;
}

&:hover{
    border-color: ${({ theme }) => theme.colors["brand-blue"]};
}
`

export const ExternalLinkButtonContainer = styled.button`
border: none;
background: none;
color: ${({ theme }) => theme.colors["brand-blue"]};
font-size: ${({ theme }) => theme.textSizes["components-link"]};
text-transform: uppercase;
display: flex;
align-items: center;
gap: 0.5rem;
line-height: 19px;
font-weight: 700;
border-bottom: 1px solid transparent;
height: 19px;
cursor: pointer;
svg{
    width: .75rem;
    height: .75rem;
}

&:hover{
    border-color: ${({ theme }) => theme.colors["brand-blue"]};
}
`