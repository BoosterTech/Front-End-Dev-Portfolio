import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyles = createGlobalStyle`
html{
    box-sizing: border-box;
}

::before,
::after{
    box-sizing: inherit;
}

body{
    background-color: ${({ theme }) => theme.color.background};
    font-size: 16px ;
    max-width: 100%;
    margin: auto;
}
`;

export const Main = styled.main`
  max-width: 70%;
  margin: auto;
`;
