import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import slowEntry from "./common/slowEntry";

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
    font-size: 18px ;
    max-width: 100%;
    margin: auto;
    animation: ${slowEntry} .5s ease;
    line-height: 1.2;
}
`;

export const Main = styled.main`
  max-width: 70%;
  margin: auto;
`;
