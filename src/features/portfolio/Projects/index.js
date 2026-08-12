import projects from "content/projects";
import gitHubIcon from "images/gitHubIcon.png";
import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import CarouselSlide from "./CarouselSlide";
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

  const handleSelect = (index) => setActiveIndex(index);
  const handlePrev = () =>
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  const handleNext = () =>
    setActiveIndex((prev) => (prev + 1) % projects.length);

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
      <ProjectsWrapper>
        <CarouselButton
          $left
          onClick={handlePrev}
          aria-label="Previous project"
        >
          <FiChevronLeft />
        </CarouselButton>
        <ProjectsTrack style={{ "--active-index": activeIndex }}>
          {projects.map((project, index) => (
            <CarouselSlide
              key={project.title.English}
              project={project}
              isActive={index === activeIndex}
              onClick={() => handleSelect(index)}
            />
          ))}
        </ProjectsTrack>
        <CarouselButton onClick={handleNext} aria-label="Next project">
          <FiChevronRight />
        </CarouselButton>
      </ProjectsWrapper>
      <NavDots>
        {projects.map((_, index) => (
          <NavDot
            key={index}
            $active={index === activeIndex}
            onClick={() => handleSelect(index)}
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
      </NavDots>
    </Wrapper>
  );
};

export default Projects;
