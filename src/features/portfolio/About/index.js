import GradientHeading from "common/GradientHeading";
import {
  FaBookOpen,
  FaLayerGroup,
  FaLightbulb,
  FaRobot,
  FaStar,
} from "react-icons/fa";
import { useSelector } from "react-redux";
import { selectLanguage } from "slices/languageSlice";
import { useTheme } from "styled-components";

import CodeTerminal from "./CodeTerminal";
import {
  Wrapper,
  TerminalColumn,
  ContentColumn,
  JourneyLabel,
  JourneyUnderline,
  JourneyParagraph,
  FeaturesGrid,
  FeatureCard,
  FeatureTitle,
  FeatureDescription,
} from "./styled";

const featureIcons = [FaLayerGroup, FaRobot, FaLightbulb, FaBookOpen];

/** @param {{ id: string }} props */
const About = ({ id }) => {
  const language = useSelector(selectLanguage);
  const theme = useTheme();
  const about = theme[language]?.about;

  return (
    <Wrapper id={id}>
      <TerminalColumn>
        <CodeTerminal />
      </TerminalColumn>
      <ContentColumn>
        <JourneyLabel>
          <FaStar />
          {about.journeyLabel}
        </JourneyLabel>
        <GradientHeading as="h2">{about.journeyHeader}</GradientHeading>
        <JourneyUnderline />
        <JourneyParagraph
          dangerouslySetInnerHTML={{ __html: about.journeyParagraph }}
        />
        <FeaturesGrid>
          {about.journeyFeatures.map((feature, index) => {
            const Icon = featureIcons[index];
            return (
              <FeatureCard key={feature.title}>
                <Icon />
                <FeatureTitle>{feature.title}</FeatureTitle>
                <FeatureDescription>{feature.description}</FeatureDescription>
              </FeatureCard>
            );
          })}
        </FeaturesGrid>
      </ContentColumn>
    </Wrapper>
  );
};

export default About;
