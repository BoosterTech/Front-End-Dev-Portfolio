import projects from "content/projects";
import { AnimatePresence } from "framer-motion";
import gitHubIcon from "images/gitHubIcon.png";
import { useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import CarouselSlide from "./CarouselSlide";
import ProjectModal from "./ProjectModal";
import {
  CarouselButton,
  Header,
  NavDot,
  NavDots,
  ProjectIcon,
  ProjectsTrack,
  ProjectsWrapper,
  TitleWrapper,
  Wrapper,
} from "./styled";

const Projects = ({ id }) => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [expandedProject, setExpandedProject] = useState(null);

  const handleSelect = (index) => setActiveIndex(index);
  const handlePrev = () =>
    setActiveIndex((prev) => Math.max(0, prev - 1));
  const handleNext = () =>
    setActiveIndex((prev) => Math.min(projects.length - 1, prev + 1));

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft" && activeIndex > 0) {
        handlePrev();
      } else if (e.key === "ArrowRight" && activeIndex < projects.length - 1) {
        handleNext();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex]);

  return (
    <Wrapper id={id}>
      <TitleWrapper>
        <a
          href="https://github.com/BoosterTech"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit my GitHub profile"
        >
          <ProjectIcon src={gitHubIcon} alt="GitHub Icon" />
        </a>
        <Header>Projects</Header>
      </TitleWrapper>
      <ProjectsWrapper role="region" aria-label="Projects carousel">
        {activeIndex > 0 && (
          <CarouselButton
            $left
            onClick={handlePrev}
            aria-label="Previous project"
          >
            <FiChevronLeft />
          </CarouselButton>
        )}
        <ProjectsTrack style={{ "--active-index": activeIndex }}>
          {projects.map((project, index) => {
            const position =
              index === activeIndex
                ? "center"
                : index < activeIndex
                ? "left"
                : "right";

            return (
              <CarouselSlide
                key={project.title.English}
                project={project}
                isActive={index === activeIndex}
                position={position}
                onClick={() => handleSelect(index)}
                onExpand={() => setExpandedProject(project)}
              />
            );
          })}
        </ProjectsTrack>
        {activeIndex < projects.length - 1 && (
          <CarouselButton onClick={handleNext} aria-label="Next project">
            <FiChevronRight />
          </CarouselButton>
        )}
      </ProjectsWrapper>
      <NavDots>
        {projects.map((_, index) => (
          <NavDot
            key={index}
            $active={index === activeIndex}
            onClick={() => handleSelect(index)}
            aria-label={`Go to project ${index + 1}`}
            aria-current={index === activeIndex ? "true" : undefined}
          />
        ))}
      </NavDots>
      <AnimatePresence>
        {expandedProject && (
          <ProjectModal
            project={expandedProject}
            onClose={() => setExpandedProject(null)}
          />
        )}
      </AnimatePresence>
    </Wrapper>
  );
};

export default Projects;
