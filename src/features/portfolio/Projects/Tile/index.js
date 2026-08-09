import {
  LinkContainer,
  LinkTag,
  ProjectDescription,
  ProjectHeader,
  ProjectImage,
  ProjectLink,
  ProjectWrapper,
  AvailableTag,
} from "features/portfolio/Projects/styled";
import { useSelector } from "react-redux";
import { selectLanguage } from "slices/languageSlice";

/** @param {import("../../../../types").TileProps} props */
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
  available,
}) => {
  const language = useSelector(selectLanguage);

  const handleContainerClick = () => {
    window.open(GitHubPagesURL, "_blank");
  };

  return (
    <ProjectWrapper
      $border={border}
      onClick={handleContainerClick}
      style={{ cursor: "pointer" }}
    >
      {index % 2 === 0 ? (
        <>
          <ProjectImage
            src={imageURL}
            alt={`${title[language]} project screenshot`}
          />
          <ProjectDescription>
            <ProjectHeader>
              {title[language]}
              {available && <AvailableTag>({available})</AvailableTag>}
            </ProjectHeader>
            <div
              dangerouslySetInnerHTML={{
                __html: description[language],
              }}
            />
            <LinkContainer>
              <ProjectLink
                href={GitHubPagesURL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkTag>{GitHubPagesURLTag[language]}</LinkTag>
              </ProjectLink>
              <ProjectLink
                href={GitHubRepoURL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkTag>{GitHubRepoURLTag[language]}</LinkTag>
              </ProjectLink>
            </LinkContainer>
          </ProjectDescription>
        </>
      ) : (
        <>
          <ProjectDescription>
            <ProjectHeader>
              {title[language]}
              {available && <AvailableTag>({available})</AvailableTag>}
            </ProjectHeader>
            <div
              dangerouslySetInnerHTML={{
                __html: description[language],
              }}
            />
            <LinkContainer>
              <ProjectLink
                href={GitHubPagesURL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkTag>{GitHubPagesURLTag[language]}</LinkTag>
              </ProjectLink>
              <ProjectLink
                href={GitHubRepoURL}
                target="_blank"
                rel="noopener noreferrer"
              >
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
