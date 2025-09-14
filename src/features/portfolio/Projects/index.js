
import {
  Header,
  ProjectIcon,
  ProjectsWrapper,
  TitleWrapper,
  Wrapper,
} from "./styled";
import { motion } from "framer-motion";
import projects from "./projects";
import Tile from "./Tile";
import ComingSoonProject from "./ComingSoonProject";
import wtm2Image from "../../../images/wtm2.png";
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
          if (project.title?.English?.includes("AI Music Generation")) {
            return (
              <motion.div
                key={index}
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ type: "spring", stiffness: 60, damping: 18, duration: 0.7 }}
              >
                <ComingSoonProject
                  title={project.title.English}
                  imageURL={project.imageURL}
                  description={project.description.English}
                  extraImageURL={wtm2Image}
                />
              </motion.div>
            );
          }
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 2.2, ease: [0.25, 0.8, 0.25, 1] }}
            >
              <Tile
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
            </motion.div>
          );
        })}
      </ProjectsWrapper>
    </Wrapper>
  );
};

export default Projects;
