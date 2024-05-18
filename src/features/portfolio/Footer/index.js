import { useSelector } from "react-redux";
import { TextContainer, Wrapper } from "./styled";
import { selectLanguage } from "../../../Redux/languageSlice";
import { useTheme } from "styled-components";

const Footer = (ref) => {
  const language = useSelector(selectLanguage);
  const theme = useTheme();

  return (
    <Wrapper id="contact">
      <TextContainer>{theme[language].footer.footerParagraph}</TextContainer>
    </Wrapper>
  );
};

export default Footer;
