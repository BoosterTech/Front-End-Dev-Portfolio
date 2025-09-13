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
} from "./styled";

import wavingHandImage from "../../../images/wavingHand.png";
import profileImage from "../../../images/profileImage.png";
import reactIcon from "../../../images/reactIcon.png";
import reduxIcon from "../../../images/reduxIcon.png";
import styledComponentsicon from "../../../images/styledComponentsIcon.jpg";
import axiosIcon from "../../../images/axiosIcon.jpg";
import reduxToolkitIcon from "../../../images/reduxToolkitIcon.jpg";
import reactRouterIcon from "../../../images/reactRouterIcon.png";
import supabaseIcon from  "../../../images/supabaseIcon.png";
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
          <ContentHeader>
            {theme[language].home.contentHeader
              .split("\n")
              .map((line, index) => (
                <React.Fragment key={index}>{line}</React.Fragment>
              ))}
            <HeaderImage src={wavingHandImage} alt="Waving hand emoji" />
          </ContentHeader>
          <HeaderParagraph>
            {theme[language].home.headerParagraph}
          </HeaderParagraph>
        </ContentContainer>
        <ImageContainer>
          <ProfileImage src={profileImage} alt="Dariusz Podczasik - Front-End Developer" />
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

