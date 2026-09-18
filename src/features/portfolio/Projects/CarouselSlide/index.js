import { useLanguage } from "common/LanguageProvider";
import { FaExpand, FaExternalLinkAlt, FaGithub } from "react-icons/fa";

import {
  BottomBar,
  CTAButton,
  CTAContainer,
  ComingSoonBadge,
  ExpandHint,
  Overlay,
  Slide,
  SlideImage,
  TechBadge,
  TechBadges,
} from "./styled";


/** @param {{ project: import("../../../../types").Project; isActive: boolean; position: "left" | "center" | "right"; onClick: () => void; onExpand: () => void }} props */
const CarouselSlide = ({ project, isActive, position, onClick, onExpand }) => {
  const { language } = useLanguage();

  return (
    <Slide
      $isActive={isActive}
      $position={position}
      onClick={isActive ? onExpand : onClick}
      role="button"
      tabIndex={0}
      aria-label={project.title[language]}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          isActive ? onExpand() : onClick();
        }
      }}
    >
      <SlideImage
        src={project.imageURL}
        alt={`${project.title[language]} project screenshot`}
        loading="lazy"
      />
      <Overlay
        $comingSoon={project.variant === "comingSoon"}
        initial={false}
        animate={{
          y: isActive ? 0 : "100%",
        }}
        transition={{
          duration: 0.35,
          ease: [0.4, 0, 0.2, 1],
        }}
      >
        {project.variant !== "comingSoon" && (
          <BottomBar>
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
          </BottomBar>
        )}
      </Overlay>
      {project.variant === "comingSoon" && (
        <ComingSoonBadge>Coming Soon</ComingSoonBadge>
      )}
      {isActive && project.variant !== "comingSoon" && (
        <ExpandHint>
          <FaExpand />
        </ExpandHint>
      )}
    </Slide>
  );
};

export default CarouselSlide;
