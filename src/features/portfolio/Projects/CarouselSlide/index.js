import { useState } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { useSelector } from "react-redux";
import { selectLanguage } from "slices/languageSlice";

import {
  CTAButton,
  CTAContainer,
  ComingSoonBadge,
  Overlay,
  ProjectSummary,
  ProjectTitle,
  Slide,
  SlideImage,
  TechBadge,
  TechBadges,
} from "./styled";

const getShortDescription = (html) => {
  if (!html) return "";
  const match = html.match(/<p[^>]*>(.*?)<\/p>/);
  if (!match) return html.replace(/<[^>]+>/g, "").trim().slice(0, 90);
  const text = match[1].replace(/<[^>]+>/g, "").replace(/&nbsp;/g, " ").trim();
  return text.length > 90 ? `${text.slice(0, 90).trim()}…` : text;
};

/** @param {{ project: import("../../../../types").Project; isActive: boolean; onClick: () => void }} props */
const CarouselSlide = ({ project, isActive, onClick }) => {
  const language = useSelector(selectLanguage);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Slide
      $isActive={isActive}
      layout
      onClick={onClick}
      onHoverStart={() => isActive && setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      role="button"
      tabIndex={0}
      aria-label={project.title[language]}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }}
    >
      <SlideImage
        src={project.imageURL}
        alt={`${project.title[language]} project screenshot`}
      />
      <Overlay
        initial={false}
        animate={{
          y: isActive && isHovered ? 0 : "100%",
        }}
        transition={{
          duration: 0.35,
          ease: [0.4, 0, 0.2, 1],
        }}
      >
        <ProjectTitle>{project.title[language]}</ProjectTitle>
        <ProjectSummary>
          {getShortDescription(project.description[language])}
        </ProjectSummary>
        {project.technologies?.length > 0 && (
          <TechBadges>
            {project.technologies.map((tech) => (
              <TechBadge key={tech}>{tech}</TechBadge>
            ))}
          </TechBadges>
        )}
        <CTAContainer>
          {project.GitHubPagesURL && (
            <CTAButton
              href={project.GitHubPagesURL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              <FaExternalLinkAlt />
              {project.GitHubPagesURLTag?.[language] || "Live Demo"}
            </CTAButton>
          )}
          {project.GitHubRepoURL && (
            <CTAButton
              $secondary
              href={project.GitHubRepoURL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              <FaGithub />
              {project.GitHubRepoURLTag?.[language] || "GitHub"}
            </CTAButton>
          )}
        </CTAContainer>
      </Overlay>
      {project.variant === "comingSoon" && (
        <ComingSoonBadge>Coming Soon</ComingSoonBadge>
      )}
    </Slide>
  );
};

export default CarouselSlide;
