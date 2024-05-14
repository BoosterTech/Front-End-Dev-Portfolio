import {
  SkillsetWrapper,
  ListContainer,
  ListItem,
  SkillsetHeader,
} from "./styled";
import { skillsets, toLearn } from "./skillsets";

export const SkillsetList = ({ skills }) => {
  return (
    <ListContainer>
      {skills.map((skill, index) => (
        <ListItem key={index}>{skill}</ListItem>
      ))}
    </ListContainer>
  );
};

export const SkillsetContainer = () => {
  return (
    <SkillsetWrapper>
      <SkillsetHeader>My skillset Includes 🛠️</SkillsetHeader>
      <SkillsetList skills={skillsets} />
      <SkillsetHeader>What I want to learn next 🚀 </SkillsetHeader>
      <SkillsetList skills={toLearn} />
    </SkillsetWrapper>
  );
};
