import imageOverlay from "images/frontEndImg.jpg";
import {
  ContentContainer,
  ImageContainer,
  Image,
  SpinnerImage,
  Wrapper,
} from "./styled";
import GradientHeading from "common/GradientHeading";
import RichText from "common/RichText";
import { useSelector } from "react-redux";
import { useTheme } from "styled-components";
import { selectLanguage } from "../../../Redux/languageSlice";

const About = ({id}) => {
  const language = useSelector(selectLanguage);
  const theme = useTheme();

  return (
    <Wrapper id={id}>
      <ImageContainer>
        <SpinnerImage
          src={process.env.PUBLIC_URL + "/spinner.svg"}
          alt="frontEndSpinner"
        />
        <Image src={imageOverlay} alt="frontEndImage.jpg" />
      </ImageContainer>
      <ContentContainer>
        <GradientHeading as="h2">
          {theme[language].about.aboutMeHeader}
        </GradientHeading>
        <RichText html={theme[language].about.aboutMeParagraph} />
      </ContentContainer>
    </Wrapper>
  );
};

export default About;
