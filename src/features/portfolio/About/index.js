import FrontEndSpinner from "./SpinnerSvg";
import imageOverlay from "../../../images/frontEndImg.jpg";
import {
  ContentContainer,
  Header,
  ImageContainer,
  Image,
  SubHeader,
  Wrapper,
} from "./styled";

export const About = () => {
  return (
    <Wrapper>
      <ImageContainer>
        <FrontEndSpinner alt="frontEndSpinner.svg" />
        <Image src={imageOverlay} alt="frontEndImage.jpg" />
      </ImageContainer>
      <ContentContainer>
        <Header>ABOUT ME</Header>
        <SubHeader> Front-end Developer based in Trim, Ireland. </SubHeader>
        Hello, I'm Derek. <br />I am dedicated to crafting intuitive and
        engaging user interfaces and experiences. My expertise lies in
        leveraging React/Redux with Styled Components to deliver seamless and
        visually appealing solutions.
      </ContentContainer>
    </Wrapper>
  );
};

export default About;
