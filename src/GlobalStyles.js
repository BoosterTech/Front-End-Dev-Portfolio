import { createGlobalStyle } from "styled-components";
import { base } from "styles/base";
import { tokens } from "styles/tokens";

export const GlobalStyles = createGlobalStyle`
${tokens}
${base}
`;
