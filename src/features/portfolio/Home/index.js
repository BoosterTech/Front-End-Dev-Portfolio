import {
  ContentImageContainer,
  HomeWrapper,
  ImageContainer,
  ContentContainer,
  ProfileImage,
  TechStackContainer,
  TechStackItem,
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
import { FaArrowRight, FaDownload, FaStar } from "react-icons/fa";
import { menuItems } from "../../../common/Navigation/menuItems";

import profileImage from "../../../images/profileImage.png";
import reactIcon from "../../../images/reactIcon.png";
import reduxIcon from "../../../images/reduxIcon.png";
import styledComponentsicon from "../../../images/styledComponentsIcon.jpg";
import axiosIcon from "../../../images/axiosIcon.jpg";
import reduxToolkitIcon from "../../../images/reduxToolkitIcon.jpg";
import reactRouterIcon from "../../../images/reactRouterIcon.png";
import supabaseIcon from "../../../images/supabaseIcon.png";
import nextIcon from "../../../images/nextIcon.png";
import oAuthIcon from "../../../images/oAuthIcon.png";
import reactQueryIcon from "../../../images/reactQueryIcon.png";
import vercelIcon from "../../../images/vercelIcon.png";
import jwtIcon from "../../../images/jwtIcon.png";
import tailwindIcon from "../../../images/tailwindIcon.png";
import typeScriptIcon from "../../../images/typeScriptIcon.png";

import { SkillsetContainer } from "./SkillsetContainer";
import { useTheme } from "styled-components";
import React from "react";
import { useSelector } from "react-redux";
import { selectLanguage } from "../../../Redux/languageSlice";

const Home = ({ id }) => {
  const theme = useTheme();
  const language = useSelector(selectLanguage);

  const headerWords = theme[language].home.contentHeader.split(" ");
  const titleFirst = headerWords.slice(0, -1).join(" ");
  const titleLast = headerWords[headerWords.length - 1];
  const location = theme[language].home.location;
  const paragraphParts = theme[language].home.headerParagraph.split(location);
  const projectsItem = menuItems[language][2];

  const techStackIcons = [
    { src: reactIcon, name: "React" },
    { src: reduxIcon, name: "Redux" },
    { src: reduxToolkitIcon, name: "Redux Toolkit" },
    { src: axiosIcon, name: "Axios" },
    { src: reactRouterIcon, name: "React Router" },
    { src: styledComponentsicon, name: "Styled Components" },
    { src: nextIcon, name: "Next.js" },
    { src: supabaseIcon, name: "Supabase" },
    { src: oAuthIcon, name: "OAuth" },
    { src: reactQueryIcon, name: "React Query" },
    { src: vercelIcon, name: "Vercel" },
    { src: jwtIcon, name: "JWT" },
    { src: tailwindIcon, name: "Tailwind CSS" },
    { src: typeScriptIcon, name: "TypeScript" },
  ];

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
          <ProfileImage
            src={profileImage}
            alt="Dariusz Podczasik - Front-End Developer"
          />
        </ImageContainer>
      </ContentImageContainer>

      <TechStackContainer>
        {techStackIcons.map((item, index) => (
          <TechStackItem
            key={index}
            src={item.src}
            alt={item.name}
            title={item.name}
            index={index}
          />
        ))}
      </TechStackContainer>

      <SkillsetContainer />
    </HomeWrapper>
  );
};

export default Home;
