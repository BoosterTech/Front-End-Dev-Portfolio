import { createGlobalStyle } from "styled-components";
import { themes } from "./themes";

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
    max-width: 90%;
    margin: auto;
    padding:0 10px;

    @media (max-width: ${({ theme }) => themes.breakpoint.mobile}) {
     text-align: center;
  }
}
`;
