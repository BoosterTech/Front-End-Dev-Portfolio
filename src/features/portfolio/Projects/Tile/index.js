import { useSelector } from "react-redux";
import {
  LinkContainer,
  LinkTag,
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
  border = true,
  GitHubPagesURLTag,
  GitHubRepoURLTag,
}) => {
  const language = useSelector(selectLanguage);

  return (
    <ProjectWrapper $border={border} $inverted={inverted}>
      <ProjectImage 
        src={imageURL} 
        alt={`${title[language]} project screenshot`} 
        $inverted={inverted}
      />
      <ProjectDescription $inverted={inverted}>
        <ProjectHeader>{title[language]}</ProjectHeader>
        <div
          dangerouslySetInnerHTML={{
            __html: description[language],
          }}
        />
        <LinkContainer>
          <ProjectLink href={GitHubPagesURL} target="_blank" rel="noopener noreferrer">
            <LinkTag>{GitHubPagesURLTag[language]}</LinkTag>
          </ProjectLink>
          <ProjectLink href={GitHubRepoURL} target="_blank" rel="noopener noreferrer">
            <LinkTag>{GitHubRepoURLTag[language]}</LinkTag>
          </ProjectLink>
        </LinkContainer>
      </ProjectDescription>
    </ProjectWrapper>
  );
};

export default Tile;

