import { SkillsetWrapper, ListContainer, ListItem, SkillsetHeader } from "./styled";
import skillsets from "./skillsets";

export const SkillsetList = () => {
  return (
    <ListContainer>
      {skillsets.map((skill, index) => (
        <ListItem key={index}>{skill}</ListItem>
      ))}
    </ListContainer>
  );
};

export const SkillsetContainer = () => {
  return (
    <SkillsetWrapper>
      <SkillsetHeader>My skillset Includes 🛠️</SkillsetHeader>
      <SkillsetList />
    </SkillsetWrapper>
  );
};
