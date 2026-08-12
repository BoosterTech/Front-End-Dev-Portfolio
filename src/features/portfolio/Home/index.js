import { menuItems } from "common/Navigation/menuItems";
import useContent from "common/useContent";
import profileImage from "images/profileImage.png";
import { FaArrowRight, FaDownload, FaStar } from "react-icons/fa";
import { useSelector } from "react-redux";
import { selectLanguage } from "slices/languageSlice";

import {
  ContentImageContainer,
  HomeWrapper,
  ImageContainer,
  ContentContainer,
  ProfileImage,
  WelcomeLabel,
  HeroTitle,
  GradientText,
  TechStackText,
  HeroDescription,
  LocationSpan,
  ButtonsContainer,
  ViewMyWorkButton,
  DownloadCVButton,
} from "./styled";
import { ToolsShowcase } from "./ToolsShowcase";

const Home = ({ id }) => {
  const { home } = useContent();
  const language = useSelector(selectLanguage);

  const headerWords = home.contentHeader.split(" ");
  const titleFirst = headerWords.slice(0, -1).join(" ");
  const titleLast = headerWords[headerWords.length - 1];
  const location = home.location;
  const paragraphParts = home.headerParagraph.split(location);
  const projectsItem = menuItems[language][2];

  return (
    <HomeWrapper id={id}>
      <ContentImageContainer>
        <ContentContainer>
          <WelcomeLabel>
            <FaStar />
            {home.welcomeLabel}
          </WelcomeLabel>
          <HeroTitle>
            {titleFirst}
            <GradientText>{titleLast}</GradientText>
          </HeroTitle>
          <TechStackText>
            {home.contentHeaderTechStack}{" "}
            {/* <HeaderImage src={wavingHandImage} alt="Waving hand emoji" /> */}
          </TechStackText>

          <HeroDescription>
            {paragraphParts[0]}
            <LocationSpan>{location}</LocationSpan>
            {paragraphParts[1]}
          </HeroDescription>
          <ButtonsContainer>
            <ViewMyWorkButton
              to={projectsItem.name.toLowerCase()}
              spy={true}
              smooth={true}
              offset={projectsItem.offset}
              duration={700}
            >
              {home.viewMyWork}
              <FaArrowRight />
            </ViewMyWorkButton>
            <DownloadCVButton
              href={home.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {home.downloadCV}
              <FaDownload />
            </DownloadCVButton>
          </ButtonsContainer>
        </ContentContainer>
        <ImageContainer>
          <ProfileImage src={profileImage} alt="profile_image" />
        </ImageContainer>
      </ContentImageContainer>

      <ToolsShowcase />
    </HomeWrapper>
  );
};

export default Home;
