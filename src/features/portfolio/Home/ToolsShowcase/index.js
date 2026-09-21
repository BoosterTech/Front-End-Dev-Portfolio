import useContent from "common/useContent";
import nextIcon from "images/nextIcon.png";
import reactIcon from "images/reactIcon.png";
import reactQueryIcon from "images/reactQueryIcon.png";
import reduxIcon from "images/reduxIcon.png";
import reduxToolkitIcon from "images/reduxToolkitIcon.jpg";
import styledComponentsIcon from "images/styledComponentsIcon.jpg";
import supabaseIcon from "images/supabaseIcon.png";
import typeScriptIcon from "images/typeScriptIcon.png";
import vercelIcon from "images/vercelIcon.png";
import {
  FaBolt,
  FaExpandArrowsAlt,
  FaLaptopCode,
  FaPaintBrush,
  FaBrain,
  FaRobot,
  FaSitemap,
  FaEllipsisH,
  FaStar,
} from "react-icons/fa";
import { SiStripe, SiFramer } from "react-icons/si";

import {
  ExploreSection,
  ExploreHeader,
  ExploreLabel,
  ExploreParagraph,
  ExploreTrack,
  ExploreChip,
  ExploreChipHeader,
  ExploreChipDescription,
  MoreChip,
  MoreChipHeader,
  MoreChipDescription,
} from "./exploreLayout";
import { OrbitSection } from "./OrbitSection";
import {
  ToolsShowcaseWrapper,
  ShowcaseGrid,
  ShowcaseContent,
  SectionLabel,
  SectionTitle,
  PlainTitlePart,
  GradientWord,
  SectionDescription,
  FeatureGrid,
  FeatureCard,
  FeatureIcon,
  FeatureText,
  FeatureTitle,
  FeatureSubtitle,
  OrbitSectionWrapper,
} from "./showcaseLayout";

const orbitTechnologies = [
  {
    id: "react",
    name: "React",
    icon: reactIcon,
    iconWidth: 259,
    iconHeight: 194,
  },
  {
    id: "typescript",
    name: "TypeScript",
    icon: typeScriptIcon,
    iconWidth: 225,
    iconHeight: 225,
  },
  {
    id: "redux",
    name: "Redux",
    icon: reduxIcon,
    iconWidth: 384,
    iconHeight: 192,
  },
  {
    id: "redux-toolkit",
    name: "Redux Toolkit",
    icon: reduxToolkitIcon,
    iconWidth: 384,
    iconHeight: 216,
  },
  {
    id: "styled",
    name: "Styled Components",
    icon: styledComponentsIcon,
    iconWidth: 225,
    iconHeight: 225,
  },
  {
    id: "supabase",
    name: "Supabase",
    icon: supabaseIcon,
    iconWidth: 384,
    iconHeight: 188,
  },
  {
    id: "react-query",
    name: "React Query",
    icon: reactQueryIcon,
    iconWidth: 513,
    iconHeight: 326,
  },
  {
    id: "vercel",
    name: "Vercel",
    icon: vercelIcon,
    iconWidth: 900,
    iconHeight: 500,
  },
];

const exploreIcons = [
  <FaBrain />,
  <SiStripe />,
  <FaRobot />,
  <SiFramer />,
  <FaSitemap />,
];

const featureIcons = [
  <FaBolt />,
  <FaExpandArrowsAlt />,
  <FaLaptopCode />,
  <FaPaintBrush />,
];

const container = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export const ToolsShowcase = () => {
  const { home } = useContent();
  const showcase = home.toolsShowcase;

  return (
    <ToolsShowcaseWrapper
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={container}
    >
      <ShowcaseGrid>
        <OrbitSectionWrapper>
          <OrbitSection
            technologies={orbitTechnologies}
            centerIcon={nextIcon}
            centerIconWidth={512}
            centerIconHeight={309}
            centerLabel="Next.js"
          />
        </OrbitSectionWrapper>
        <ShowcaseContent>
          <SectionLabel variants={item}>
            <FaStar />
            {home.skillsetHeader}
          </SectionLabel>
          <SectionTitle variants={item}>
            <PlainTitlePart>{showcase.titlePlain}</PlainTitlePart>{" "}
            <GradientWord>{showcase.titleAccent}</GradientWord>
          </SectionTitle>
          <SectionDescription variants={item}>
            {showcase.description}
          </SectionDescription>

          <FeatureGrid>
            {showcase.features.map((feature, index) => (
              <FeatureCard
                key={index}
                variants={item}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FeatureIcon>{featureIcons[index]}</FeatureIcon>
                <FeatureText>
                  <FeatureTitle>{feature.title}</FeatureTitle>
                  <FeatureSubtitle>{feature.subtitle}</FeatureSubtitle>
                </FeatureText>
              </FeatureCard>
            ))}
          </FeatureGrid>
        </ShowcaseContent>
      </ShowcaseGrid>

      <ExploreSection variants={item}>
        <ExploreHeader>
          <ExploreLabel>
            <FaEllipsisH />
            {home.learnNextHeader}
          </ExploreLabel>
          <ExploreParagraph>{showcase.exploreParagraph}</ExploreParagraph>
        </ExploreHeader>
        <ExploreTrack
          role="region"
          aria-label={showcase.exploreAriaLabel}
          tabIndex={0}
        >
          {showcase.exploreItems.map((item, index) => (
            <ExploreChip
              key={item.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + index * 0.05 }}
              whileHover={{ scale: 1.02 }}
            >
              <ExploreChipHeader>
                {exploreIcons[index]}
                {item.name}
              </ExploreChipHeader>
              <ExploreChipDescription>
                {item.description}
              </ExploreChipDescription>
            </ExploreChip>
          ))}
          <MoreChip
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 + showcase.exploreItems.length * 0.05 }}
          >
            <MoreChipHeader>
              <FaEllipsisH />
              {showcase.moreTitle}
            </MoreChipHeader>
            <MoreChipDescription>{showcase.moreSubtitle}</MoreChipDescription>
          </MoreChip>
        </ExploreTrack>
      </ExploreSection>
    </ToolsShowcaseWrapper>
  );
};
