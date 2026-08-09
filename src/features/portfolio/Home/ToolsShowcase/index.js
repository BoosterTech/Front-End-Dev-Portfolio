import { toLearn, toLearnDescriptions } from "content/skillsets";
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
} from "react-icons/fa";
import { SiStripe, SiOpenai, SiFramer } from "react-icons/si";
import { useSelector } from "react-redux";
import { selectLanguage } from "slices/languageSlice";

import { OrbitSection } from "./OrbitSection";
import {
  ToolsShowcaseWrapper,
  ShowcaseGrid,
  ShowcaseContent,
  SectionLabel,
  SectionTitle,
  GradientWord,
  SectionDescription,
  FeatureGrid,
  FeatureCard,
  FeatureIcon,
  FeatureText,
  FeatureTitle,
  FeatureSubtitle,
  OrbitSectionWrapper,
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
  MoreTooltip,
  MoreList,
  MoreItem,
} from "./styled";

const orbitTechnologies = [
  { id: "react", name: "React", icon: reactIcon },
  { id: "typescript", name: "TypeScript", icon: typeScriptIcon },
  { id: "redux", name: "Redux", icon: reduxIcon },
  { id: "redux-toolkit", name: "Redux Toolkit", icon: reduxToolkitIcon },
  { id: "styled", name: "Styled Components", icon: styledComponentsIcon },
  { id: "supabase", name: "Supabase", icon: supabaseIcon },
  { id: "react-query", name: "React Query", icon: reactQueryIcon },
  { id: "vercel", name: "Vercel", icon: vercelIcon },
];

const exploreItems = [
  {
    name: "Artificial Intelligence (AI)",
    icon: <FaBrain />,
    description: "Building AI-powered features",
  },
  { name: "Stripe", icon: <SiStripe />, description: "Payment infrastructure" },
  {
    name: "AI-Directed Engineering",
    icon: <FaRobot />,
    description: "AI-assisted development",
  },
  { name: "OpenAI API", icon: <SiOpenai />, description: "LLM integrations" },
  {
    name: "Framer Motion",
    icon: <SiFramer />,
    description: "Production-ready animations",
  },
  {
    name: "SaaS Architecture",
    icon: <FaSitemap />,
    description: "Scalable SaaS patterns",
  },
];

const features = [
  { icon: <FaBolt />, title: "Performance Optimized", subtitle: "Fast loads" },
  {
    icon: <FaExpandArrowsAlt />,
    title: "Scalable Architecture",
    subtitle: "Grows cleanly",
  },
  {
    icon: <FaLaptopCode />,
    title: "Developer Experience",
    subtitle: "Clean APIs",
  },
  {
    icon: <FaPaintBrush />,
    title: "Modern UI/UX",
    subtitle: "Polished interfaces",
  },
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
  const language = useSelector(selectLanguage);
  const moreItems = toLearn[language] || toLearn.English;

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
            centerLabel="Next.js"
          />
        </OrbitSectionWrapper>
        <ShowcaseContent>
          <SectionLabel variants={item}>MY TECHNOLOGY STACK</SectionLabel>
          <SectionTitle variants={item}>
            Build with the
            <br />
            <GradientWord>Best Tools</GradientWord>
          </SectionTitle>
          <SectionDescription variants={item}>
            I craft fast, scalable, and modern web applications using a powerful
            ecosystem of cutting-edge technologies.
          </SectionDescription>

          <FeatureGrid>
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                variants={item}
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FeatureIcon>{feature.icon}</FeatureIcon>
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
            CURRENTLY EXPLORING
          </ExploreLabel>
          <ExploreParagraph>
            Leveling up my skills and building the future, one line at a time.
          </ExploreParagraph>
        </ExploreHeader>
        <ExploreTrack>
          {exploreItems.map((item, index) => (
            <ExploreChip
              key={item.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + index * 0.05 }}
              whileHover={{ y: -4, scale: 1.02 }}
            >
              <ExploreChipHeader>
                {item.icon}
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
            transition={{ delay: 0.1 + exploreItems.length * 0.05 }}
            whileHover={{ scale: 1.02 }}
          >
            <MoreChipHeader>
              <FaEllipsisH />
              And More...
            </MoreChipHeader>
            <MoreChipDescription>Always learning.</MoreChipDescription>
            <MoreTooltip>
              <MoreList>
                {moreItems.map((skill) => (
                  <MoreItem key={skill}>
                    <strong>{skill}</strong>
                    {toLearnDescriptions[language]?.[skill] && (
                      <div>{toLearnDescriptions[language][skill]}</div>
                    )}
                  </MoreItem>
                ))}
              </MoreList>
            </MoreTooltip>
          </MoreChip>
        </ExploreTrack>
      </ExploreSection>
    </ToolsShowcaseWrapper>
  );
};
