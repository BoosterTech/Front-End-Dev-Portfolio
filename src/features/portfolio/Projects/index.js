import {
  Header,
  ProjectIcon,
  ProjectsWrapper,
  TitleWrapper,
  Wrapper,
} from "./styled";
import projects from "./projects";
import Tile from "./Tile";
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
        {projects.map((project, index) => (
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
          />
        ))}
      </ProjectsWrapper>
    </Wrapper>
  );
};

export default Projects;
