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
    reactIcon,
    reduxIcon,

    reduxToolkitIcon,
    axiosIcon,
    reactRouterIcon,
    styledComponentsicon,
    nextIcon,
    supabaseIcon,
    oAuthIcon,
    reactQueryIcon,
    vercelIcon,
    jwtIcon,
    tailwindIcon,
    typeScriptIcon,
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
            <HeaderImage src={wavingHandImage} alt="headerImage.png" />
          </ContentHeader>
          <HeaderParagraph>
            {theme[language].home.headerParagraph}
          </HeaderParagraph>
        </ContentContainer>
        <ImageContainer>
          <ProfileImage src={profileImage} alt="profileImage.png" />
        </ImageContainer>
      </ContentImageContainer>
      <TechStackContainer>
        {techStackIcons.map((item, index) => (
          <TechStackItem key={index} src={item} />
        ))}
      </TechStackContainer>
      <SkillsetContainer />
    </HomeWrapper>
  );
};

export default Home;
