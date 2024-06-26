import { Header, ProjectIcon, Wrapper } from "./styled";
import projects from "./projects";
import Tile from "./Tile";
import gitHubIcon from "../../../images/gitHubIcon.png";

const Projects = ({ id }) => {
  return (
    <Wrapper id={id}>
      <ProjectIcon src={gitHubIcon} alt="GitHub Icon" />
      <Header>Portfolio</Header>
      {projects.map((project, index) => (
        <Tile
          key={index}
          title={project.title}
          description={project.description}
          imageURL={project.imageURL}
          GitHubPagesURL={project.GitHubPagesURL}
          GitHubRepoURL={project.GitHubRepoURL}
          inverted={project.inverted}
          border={project.border}
          GitHubPagesURLTag={project.GitHubPagesURLTag}
          GitHubRepoURLTag={project.GitHubRepoURLTag}
        />
      ))}
    </Wrapper>
  );
};

export default Projects;
