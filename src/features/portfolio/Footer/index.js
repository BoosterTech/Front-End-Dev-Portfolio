import { useSelector } from "react-redux";
import { selectLanguage } from "slices/languageSlice";
import { useTheme } from "styled-components";

import { TextContainer, Wrapper } from "./styled";

const Footer = () => {
  const language = useSelector(selectLanguage);
  const theme = useTheme();

  return (
    <Wrapper id="contact">
      <TextContainer>{theme[language].footer.footerParagraph}</TextContainer>
    </Wrapper>
  );
};

export default Footer;
