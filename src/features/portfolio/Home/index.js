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
import reduxSagaIcon from "../../../images/reduxSagaIcon.jpg";
import styledComponentsicon from "../../../images/styledComponentsIcon.jpg";
import axiosIcon from "../../../images/axiosIcon.jpg";
import reduxToolkitIcon from "../../../images/reduxToolkitIcon.jpg";
import { SkillsetContainer } from "./SkillsetContainer";
import { useTheme } from "styled-components";
import React from "react";

const techStackIcons = [
  reactIcon,
  reduxIcon,
  reduxSagaIcon,
  reduxToolkitIcon,
  axiosIcon,
  styledComponentsicon,
];

const Home = () => {
  const theme = useTheme();

  return (
    <HomeWrapper>
      <ContentImageContainer>
        <ContentContainer>
          <ContentHeader>
            {theme.home.contentHeader.split("\n").map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
            <HeaderImage src={wavingHandImage} alt="headerImage.png" />
          </ContentHeader>
          <HeaderParagraph>{theme.home.headerParagraph}</HeaderParagraph>
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
