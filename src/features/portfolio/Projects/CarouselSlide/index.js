import { useLanguage } from "common/LanguageProvider";
import { PROJECT_IMAGE_HEIGHT, PROJECT_IMAGE_WIDTH } from "content/projects";
import { FaExpandArrowsAlt, FaExternalLinkAlt, FaGithub } from "react-icons/fa";

import {
  BottomBar,
  BottomRow,
  CTAButton,
  CTAContainer,
  ComingSoonBadge,
  ExpandButton,
  Overlay,
  Slide,
  SlideImage,
} from "./styled";

/** @param {{ project: import("../../../../types").Project; isActive: boolean; position: "left" | "center" | "right"; onClick: () => void; onExpand: () => void }} props */
const CarouselSlide = ({ project, isActive, position, onClick, onExpand }) => {
  const { language } = useLanguage();

  return (
    <Slide
      $isActive={isActive}
      $position={position}
      onClick={isActive ? onExpand : onClick}
    >
      <SlideImage
        src={project.imageURL}
        alt={`${project.title[language]} project screenshot`}
        width={PROJECT_IMAGE_WIDTH}
        height={PROJECT_IMAGE_HEIGHT}
        loading="lazy"
      />
      {isActive && project.variant !== "comingSoon" && (
        <ExpandButton
          onClick={(e) => {
            e.stopPropagation();
            onExpand();
          }}
          aria-label={project.title[language]}
        >
          <FaExpandArrowsAlt />
        </ExpandButton>
      )}
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
          src={`${process.env.PUBLIC_URL}/coming_soon_icon.webp`}
          alt="Coming Soon"
        />
      )}
    </Slide>
  );
};

export default CarouselSlide;
