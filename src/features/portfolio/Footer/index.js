import { useSelector } from "react-redux";
import { TextContainer, Wrapper } from "./styled";
import { selectLanguage } from "../../../Redux/languageSlice";
import { useTheme } from "styled-components";

const Footer = () => {
  const language = useSelector(selectLanguage);
  const theme = useTheme();

  return (
    <Wrapper>
      <TextContainer>{theme[language].footer.footerParagraph}</TextContainer>
    </Wrapper>
  );
};

export default Footer;
