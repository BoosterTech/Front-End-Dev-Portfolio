import FrontEndSpinner from "./SpinnerSvg";
import imageOverlay from "../../../images/frontEndImg.jpg";
import {
  ContentContainer,
  Header,
  ImageContainer,
  Image,
  Wrapper,
} from "./styled";
import { useSelector } from "react-redux";
import { useTheme } from "styled-components";
import { selectLanguage } from "../../../Redux/languageSlice";

const About = () => {
  const language = useSelector(selectLanguage);
  const theme = useTheme();

  return (
    <Wrapper>
      <ImageContainer>
        <FrontEndSpinner alt="frontEndSpinner.svg" />
        <Image src={imageOverlay} alt="frontEndImage.jpg" />
      </ImageContainer>
      <ContentContainer>
        <Header>{theme[language].about.aboutMeHeader}</Header>
        <div
          dangerouslySetInnerHTML={{
            __html: theme[language].about.aboutMeParagraph,
          }}
        />
      </ContentContainer>
    </Wrapper>
  );
};

export default About;
