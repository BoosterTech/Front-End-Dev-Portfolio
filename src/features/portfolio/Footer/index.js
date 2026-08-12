import useContent from "common/useContent";

import { TextContainer, Wrapper } from "./styled";

const Footer = () => {
  const { footer } = useContent();

  return (
    <Wrapper id="contact">
      <TextContainer>{footer.footerParagraph}</TextContainer>
    </Wrapper>
  );
};

export default Footer;
