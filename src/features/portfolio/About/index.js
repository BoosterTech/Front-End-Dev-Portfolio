import FrontEndSpinner from "./SpinnerSvg";
import imageOverlay from "../../../images/frontEndImg.jpg";
import {
  ContentContainer,
  Header,
  ImageContainer,
  Image,
  Wrapper,
} from "./styled";

const About = () => {
  return (
    <Wrapper>
      <ImageContainer>
        <FrontEndSpinner alt="frontEndSpinner.svg" />
        <Image src={imageOverlay} alt="frontEndImage.jpg" />
      </ImageContainer>
      <ContentContainer>
        <Header>ABOUT ME</Header>
        <p>
          Hi, I'm Derek, Frontend Developer dedicated to crafting exceptional
          user interfaces and experiences.
        </p>
        My primary focus revolves around leveraging cutting-edge technologies to
        deliver polished solutions that resonate with users.
        <br />
        React serves as the cornerstone of my development approach, facilitating
        the creation of dynamic, multi-page applications with seamless
        navigation and optimized performance.
        <br /> Additionally, Styled-Components offers a pragmatic approach to
        styling, allowing me to streamline the design process and maintain
        consistency across projects.
        <br />
        Furthermore, Redux & Axios enhance the development workflow, promoting
        code integrity and scalability.
        <br /> This robust stack empowers me to efficiently develop
        high-performance, responsive web applications that meet the demands of
        today's digital landscape. <br />
        Driven by a passion for clean and intuitive design, I ensure that every
        interface I create not only meets but exceeds user expectations.
        <p> Best regards,</p>
      </ContentContainer>
    </Wrapper>
  );
};

export default About;
