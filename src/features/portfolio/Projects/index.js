import {
  Header,
  ProjectIcon,
  ProjectsWrapper,
  TitleWrapper,
  Wrapper,
} from "./styled";
import projects from "./projects";
import Tile from "./Tile";
import ComingSoonProject from "./ComingSoonProject";
import gitHubIcon from "../../../images/gitHubIcon.png";

const Projects = ({ id }) => {
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
        {projects.map((project, index) => {
          // Render WTM Music AI Gen project with ComingSoonProject
          if (
            project.title?.English?.includes("WTM Music AI Gen")
          ) {
            return (
              <ComingSoonProject
                key={index}
                title={project.title.English}
                imageURL={project.imageURL}
                description={project.description.English}
              />
            );
          }
          return (
            <Tile
              key={index}
              title={project.title}
              description={project.description}
              imageURL={project.imageURL}
              GitHubPagesURL={project.GitHubPagesURL}
              GitHubRepoURL={project.GitHubRepoURL}
              border={project.border}
              GitHubPagesURLTag={project.GitHubPagesURLTag}
              GitHubRepoURLTag={project.GitHubRepoURLTag}
              index={index}
              available={project.available}
            />
          );
        })}
      </ProjectsWrapper>
    </Wrapper>
  );
};

export default Projects;
