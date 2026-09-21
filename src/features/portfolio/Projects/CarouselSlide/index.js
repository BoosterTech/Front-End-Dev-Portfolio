import { useLanguage } from "common/LanguageProvider";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

import {
  BottomBar,
  BottomRow,
  CTAButton,
  CTAContainer,
  ComingSoonBadge,
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
            <BottomRow>
              {project.technologies?.length > 0 && (
                <TechBadges>
                  {project.technologies.slice(0, 3).map((tech) => (
                    <TechBadge key={tech}>{tech}</TechBadge>
                  ))}
                  {project.technologies.length > 3 && (
                    <TechBadge>+{project.technologies.length - 3}</TechBadge>
                  )}
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
            </BottomRow>
          </BottomBar>
        )}
      </Overlay>
      {project.variant === "comingSoon" && (
        <ComingSoonBadge>Coming Soon</ComingSoonBadge>
      )}
    </Slide>
  );
};

export default CarouselSlide;
