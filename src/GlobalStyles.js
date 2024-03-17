import { createGlobalStyle } from "styled-components";
import { themes } from "./themes";
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
    background-color: ${({ theme }) => themes.color.background};
    font-size: 17px ;
    max-width: 100%;
    margin: auto;

    @media (max-width: ${({ theme }) => themes.breakpoint.mobile}) {
     text-align: center;
  }
}
`;

export const Main = styled.main`
  max-width: 70%;
  margin: auto;
`;
