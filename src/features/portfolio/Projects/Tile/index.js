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

  GitHubPagesURLTag,
  GitHubRepoURLTag,

}) => {
  const language = useSelector(selectLanguage);

  return (
    <ProjectWrapper>
      <ProjectImage src={imageURL} alt={`${title}_image`} />
      <ProjectDescription $inverted={inverted}>
        <ProjectHeader>{title[language]}</ProjectHeader>
        <div
          dangerouslySetInnerHTML={{
            __html: description[language],
          }}
        />
        <LinkContainer>
          <ProjectLink href={GitHubPagesURL} target="_blank">
            {GitHubPagesURLTag[language]}
          </ProjectLink>
          <ProjectLink href={GitHubRepoURL} target="_blank">
            {GitHubRepoURLTag[language]}
          </ProjectLink>
        </LinkContainer>
      </ProjectDescription>
    </ProjectWrapper>
  );
};

export default Tile;
