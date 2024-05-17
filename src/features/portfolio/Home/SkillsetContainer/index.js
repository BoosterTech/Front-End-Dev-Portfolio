import {
  SkillsetWrapper,
  ListContainer,
  ListItem,
  SkillsetHeader,
} from "./styled";
import { skillsets, toLearn } from "./skillsets";
import { useTheme } from "styled-components";
import { useSelector } from "react-redux";
import { selectLanguage } from "../../../../Redux/languageSlice";

export const SkillsetList = ({ skills }) => {
  const language = useSelector(selectLanguage);

  return (
    <ListContainer>
      {skills[language].map((skill, index) => (
        <ListItem key={index}>{skill}</ListItem>
      ))}
    </ListContainer>
  );
};

export const SkillsetContainer = () => {
  const theme = useTheme();
  const language = useSelector(selectLanguage);

  return (
    <SkillsetWrapper>
      <SkillsetHeader>{theme[language].home.skillsetHeader} 🛠️</SkillsetHeader>
      <SkillsetList skills={skillsets} />
      <SkillsetHeader>
        {theme[language].home.learnNextHeader} 🚀{" "}
      </SkillsetHeader>
      <SkillsetList skills={toLearn} />
    </SkillsetWrapper>
  );
};
