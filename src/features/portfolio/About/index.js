import GradientHeading from "common/GradientHeading";
import useContent from "common/useContent";
import {
  FaBookOpen,
  FaLayerGroup,
  FaLightbulb,
  FaRobot,
  FaStar,
} from "react-icons/fa";

import CodeTerminal from "./CodeTerminal";
import {
  Wrapper,
  TerminalColumn,
  ContentColumn,
  JourneyLabel,
  JourneyUnderline,
  JourneyParagraph,
  PlainHeadingPart,
  FeaturesGrid,
  FeatureCard,
  FeatureTitle,
  FeatureDescription,
} from "./styled";

const featureIcons = [FaLayerGroup, FaRobot, FaLightbulb, FaBookOpen];

/** @param {{ id: string }} props */
const About = ({ id }) => {
  const { about } = useContent();

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
        <GradientHeading as="h2">
          <PlainHeadingPart>{about.journeyHeader.split(" ").slice(0, 2).join(" ")}</PlainHeadingPart>
          {" " + about.journeyHeader.split(" ").slice(2).join(" ")}
        </GradientHeading>
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
