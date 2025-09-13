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
  border = true,
  GitHubPagesURLTag,
  GitHubRepoURLTag,
  index,
}) => {
  const language = useSelector(selectLanguage);

  return (
    <ProjectWrapper $border={border}>
      {index % 2 === 0 ? (
        <>
          <ProjectImage 
            src={imageURL} 
            alt={`${title[language]} project screenshot`} 
          />
          <ProjectDescription>
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
        </>
      ) : (
        <>
          <ProjectDescription>
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
          <ProjectImage 
            src={imageURL} 
            alt={`${title[language]} project screenshot`} 
          />
        </>
      )}
    </ProjectWrapper>
  );
};

export default Tile;

