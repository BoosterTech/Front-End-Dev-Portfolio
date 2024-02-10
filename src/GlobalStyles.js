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
}
`;
