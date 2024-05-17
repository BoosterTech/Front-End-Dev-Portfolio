import { icons } from "./contactIcons";
import {
  ContactIconStyled,
  IconsWrapper,
  Header,
  Wrapper,
  HeaderImage,
} from "./styled";

import headerImage from "../../../images/fingerPointingDown.jpg";
import { useSelector } from "react-redux";
import { selectLanguage } from "../../../Redux/languageSlice";
import { useTheme } from "styled-components";

const Contact = () => {
  const language = useSelector(selectLanguage);
  const theme = useTheme();

  return (
    <Wrapper>
      <Header>
        {theme[language].contact.contactParagraph}
        <HeaderImage src={headerImage} />{" "}
      </Header>
      <IconsWrapper>
        {icons.map((icon) => (
          <ContactIconStyled key={icon.id} src={icon.iconURL} />
        ))}
      </IconsWrapper>
    </Wrapper>
  );
};

export default Contact;
