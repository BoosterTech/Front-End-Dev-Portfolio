import { menuItems } from "common/Navigation/menuItems";
import profileImage from "images/profileImage.png";
import React from "react";
import { FaArrowRight, FaDownload, FaStar } from "react-icons/fa";
import { useSelector } from "react-redux";
import { selectLanguage } from "slices/languageSlice";
import { useTheme } from "styled-components";

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
  const theme = useTheme();
  const language = useSelector(selectLanguage);

  const headerWords = theme[language].home.contentHeader.split(" ");
  const titleFirst = headerWords.slice(0, -1).join(" ");
  const titleLast = headerWords[headerWords.length - 1];
  const location = theme[language].home.location;
  const paragraphParts = theme[language].home.headerParagraph.split(location);
  const projectsItem = menuItems[language][2];

  return (
    <HomeWrapper id={id}>
      <ContentImageContainer>
        <ContentContainer>
          <WelcomeLabel>
            <FaStar />
            {theme[language].home.welcomeLabel}
          </WelcomeLabel>
          <HeroTitle>
            {titleFirst}
            <GradientText>{titleLast}</GradientText>
          </HeroTitle>
          <TechStackText>
            {theme[language].home.contentHeaderTechStack}{" "}
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
              {theme[language].home.viewMyWork}
              <FaArrowRight />
            </ViewMyWorkButton>
            <DownloadCVButton
              href={theme[language].home.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {theme[language].home.downloadCV}
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
