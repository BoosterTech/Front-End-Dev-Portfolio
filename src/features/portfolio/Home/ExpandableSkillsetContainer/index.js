import { useState } from "react";
import { SkillsetButton, SkillsetContainer, ListContainer, ListItem } from "./styled";
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

export const ExpandableSkillsetcontainer = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };
  return (
    <SkillsetContainer expanded={expanded}>
      <SkillsetButton onClick={toggleExpanded}>
        {expanded ? "<- hide skillset details" : "see skillset details -> "}
      </SkillsetButton>
      {expanded && <SkillsetList />}
    </SkillsetContainer>
  );
};
