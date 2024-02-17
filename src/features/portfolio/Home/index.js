import {
  ContentImageContainer,
  HomeWrapper,
  ImageContainer,
  ContentContainer,
  ContentHeader,
  HeaderImage,
  HeaderParagraph,
  ProfileImage,
  TechStackContainer,
  TechStackItem,
  TechStackHeader,
} from "./styled";

import wavingHandImage from "../../../images/wavingHand.png";
import profileImage from "../../../images/profileImage.png";
import reactIcon from "../../../images/reactIcon.png";
import reduxIcon from "../../../images/reduxIcon.png";
import reduxSagaIcon from "../../../images/reduxSagaIcon.jpg";
import styledComponentsicon from "../../../images/styledComponentsIcon.jpg";
import axiosIcon from "../../../images/axiosIcon.jpg";
import reduxToolkitIcon from "../../../images/reduxToolkitIcon.jpg";
import About from "../about";

const techStackIcons = [
  reactIcon,
  reduxIcon,
  reduxSagaIcon,
  reduxToolkitIcon,
  axiosIcon,
  styledComponentsicon,
];

const Home = () => {
  return (
    <HomeWrapper>
      <ContentImageContainer>
        <ContentContainer>
          <ContentHeader>
            Front-End React
            <br />
            Developer{" "}
            <HeaderImage src={wavingHandImage} alt="headerImage.png" />
          </ContentHeader>
          <HeaderParagraph>
            Hi, I'm Dariusz Podczasik. A passionate Front-End React Developer
            based in Trim, Ireland.
          </HeaderParagraph>
        </ContentContainer>
        <ImageContainer>
          <ProfileImage src={profileImage} alt="profileImage.png" />
        </ImageContainer>
      </ContentImageContainer>
      <TechStackContainer>
        <TechStackHeader>Tech Stack</TechStackHeader>
        {techStackIcons.map((item, index) => (
          <TechStackItem key={index} src={item} />
        ))}
      </TechStackContainer>
      <About />
    </HomeWrapper>
  );
};
export default Home;
