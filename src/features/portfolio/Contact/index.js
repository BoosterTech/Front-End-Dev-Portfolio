import { icons } from "./contactIcons";
import { ContactIconStyled, IconsWrapper, Header, Wrapper } from "./styled";

import { useSelector } from "react-redux";
import { selectLanguage } from "../../../Redux/languageSlice";
import { useTheme } from "styled-components";

const Contact = () => {
  const language = useSelector(selectLanguage);
  const theme = useTheme();

  return (
    <Wrapper>
      <Header>{theme[language].contact.contactParagraph}</Header>
      <IconsWrapper>
        {icons.map((icon) => (
          <a
            style={{ display: "flex" }}
            key={icon.id}
            href={icon.link}
            target="blank"
            rel="noopener noreferre"
          >
            <ContactIconStyled key={icon.id} src={icon.iconURL} />
          </a>
        ))}
      </IconsWrapper>
    </Wrapper>
  );
};

export default Contact;
