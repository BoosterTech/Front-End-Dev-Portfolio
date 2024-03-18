import { icons } from "./contactIcons";
import {
  ContactIconStyled,
  IconsWrapper,
  Header,
  Wrapper,
  HeaderImage,
} from "./styled";

import headerImage from "../../../images/fingerPointingDown.jpg";

const Contact = () => {
  return (
    <Wrapper>
      <Header>
        Let's collaborate to bring visions to life!
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
