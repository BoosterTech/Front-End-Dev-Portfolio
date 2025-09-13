import {
  SkillsetWrapper,
  ListContainer,
  ListItem,
  SkillsetHeader,
  Tooltip,
} from "./styled";
import { skillsets, toLearn, skillDescriptions } from "./skillsets";
import { useTheme } from "styled-components";
import { useSelector } from "react-redux";
import { selectLanguage } from "../../../../Redux/languageSlice";

export const SkillsetList = ({ skills }) => {
  const language = useSelector(selectLanguage);

  return (
    <ListContainer>
      {skills[language].map((skill, index) => {
        const hasDescription =
          skillDescriptions[language] && skillDescriptions[language][skill];
        return (
          <div
            style={{ position: "relative", display: "inline-block" }}
            key={index}
          >
            <ListItem
              onMouseEnter={
                hasDescription
                  ? (e) => {
                      const tooltip = e.currentTarget.querySelector(".tooltip");
                      if (tooltip) tooltip.style.opacity = 1;
                    }
                  : undefined
              }
              onMouseLeave={
                hasDescription
                  ? (e) => {
                      const tooltip = e.currentTarget.querySelector(".tooltip");
                      if (tooltip) tooltip.style.opacity = 0;
                    }
                  : undefined
              }
            >
              {skill}
              {hasDescription && (
                <Tooltip className="tooltip">
                  {skillDescriptions[language][skill]}
                </Tooltip>
              )}
            </ListItem>
          </div>
        );
      })}
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
