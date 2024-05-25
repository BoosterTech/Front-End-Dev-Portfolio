import { useSelector } from "react-redux";
import {
  LinkContainer,
  ProjectDescription,
  ProjectHeader,
  ProjectImage,
  ProjectLink,
  ProjectWrapper,
} from "../styled";
import { selectLanguage } from "../../../../Redux/languageSlice";

const Tile = ({
  title,
  description,
  imageURL,
  GitHubPagesURL,
  GitHubRepoURL,
  inverted,
}) => {
  const language = useSelector(selectLanguage);

  return (
    <ProjectWrapper>
      <ProjectImage src={imageURL} alt={`${title}_image`} />
      <ProjectDescription $inverted={inverted}>
        <ProjectHeader>{title}</ProjectHeader>
        <div
          dangerouslySetInnerHTML={{
            __html: description[language],
          }}
        />
        <LinkContainer>
          <ProjectLink href={GitHubPagesURL} target="_blank">
            {" "}
            Go to the Website
          </ProjectLink>
          <ProjectLink href={GitHubRepoURL} target="_blank">
            {" "}
            Go to the GitHub Repository
          </ProjectLink>
        </LinkContainer>
      </ProjectDescription>
    </ProjectWrapper>
  );
};

export default Tile;
