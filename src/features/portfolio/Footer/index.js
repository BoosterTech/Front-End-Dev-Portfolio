import {
  Brand,
  BrandColumn,
  Constellation,
  Container,
  Copyright,
  GridTexture,
  Tagline,
  Wrapper,
} from "./styled";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Wrapper id="footer">
      <GridTexture aria-hidden="true" />
      <Constellation aria-hidden="true" />
      <Container>
        <BrandColumn>
          <Brand>Derek.dev</Brand>
          <Tagline>Engineering excellence through code and design.</Tagline>
        </BrandColumn>
        <Copyright>
          &copy; {currentYear} Derek.dev &middot; All rights reserved.
        </Copyright>
      </Container>
    </Wrapper>
  );
};

export default Footer;
