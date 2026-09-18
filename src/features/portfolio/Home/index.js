import { useLanguage } from "common/LanguageProvider";
import { menuItems } from "common/Navigation/menuItems";
import useContent from "common/useContent";
import lightProfileImage from "images/light_theme_profile.webp";
import profileImage from "images/profileImage.webp";
import { FaArrowRight, FaDownload, FaStar } from "react-icons/fa";

import {
  WelcomeLabel,
  HeroTitle,
  GradientText,
  TechStackText,
  HeroDescription,
  ButtonsContainer,
  ViewMyWorkButton,
  DownloadCVButton,
} from "./heroStyles";
import {
  ContentImageContainer,
  HomeWrapper,
  ImageContainer,
  ContentContainer,
  ProfileImage,
} from "./homeStyles";
import { ToolsShowcase } from "./ToolsShowcase";

const Home = ({ id }) => {
  const { home } = useContent();
  const { language } = useLanguage();

  const headerWords = home.contentHeader.split(" ");
  const titleFirst = headerWords.slice(0, -1).join(" ");
  const titleLast = headerWords[headerWords.length - 1];
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

          <HeroDescription>{home.headerParagraph}</HeroDescription>
          <ButtonsContainer>
            <ViewMyWorkButton
              to={projectsItem.name.toLowerCase()}
              spy={true}lug
              smooth={true}
              offset={projectsItem.offset}
              duration={700}
            >
              {home.viewMyWork}
              <FaArrowRight />
            </ViewMyWorkButton>
            <DownloadCVButton
              $variant="outline"
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
          <ProfileImage
            className="light"
            src={lightProfileImage}
            alt="profile_image"
          />
          <ProfileImage
            className="dark"
            src={profileImage}
            alt="profile_image"
          />
        </ImageContainer>
      </ContentImageContainer>

      <ToolsShowcase />
    </HomeWrapper>
  );
};

export default Home;
