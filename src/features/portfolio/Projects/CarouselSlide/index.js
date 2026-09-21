import { useLanguage } from "common/LanguageProvider";
import { PROJECT_IMAGE_HEIGHT, PROJECT_IMAGE_WIDTH } from "content/projects";
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
        width={PROJECT_IMAGE_WIDTH}
        height={PROJECT_IMAGE_HEIGHT}
        loading="lazy"
      />
      {project.variant !== "comingSoon" && (
        <Overlay
          initial={false}
          animate={{
            y: isActive ? 0 : "100%",
          }}
          transition={{
            duration: 0.35,
            ease: [0.4, 0, 0.2, 1],
          }}
        >
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
        </Overlay>
      )}
      {project.variant === "comingSoon" && (
        <ComingSoonBadge
          src={`${process.env.PUBLIC_URL}/coming_soon_icon.png`}
          alt="Coming Soon"
        />
      )}
    </Slide>
  );
};

export default CarouselSlide;
