import { useLanguage } from "common/LanguageProvider";

import {
  AvailableTag,
  LinkContainer,
  LinkTag,
  ProjectDescription,
  ProjectHeader,
  ProjectImage,
  ProjectLink,
  ProjectWrapper,
} from "./styled";

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
  available,
}) => {
  const { language } = useLanguage();

  const handleContainerClick = () => {
    window.open(GitHubPagesURL, "_blank");
  };

  return (
    <ProjectWrapper
      $border={border}
      onClick={handleContainerClick}
      style={{ cursor: "pointer" }}
    >
      <ProjectImage
        src={imageURL}
        alt={`${title[language]} project screenshot`}
        loading="lazy"
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
    </ProjectWrapper>
  );
};

export default Tile;
