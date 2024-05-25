import {
  LinkContainer,
  ProjectDescription,
  ProjectHeader,
  ProjectImage,
  ProjectLink,
  ProjectWrapper,
} from "../styled";

const Tile = ({
  title,
  description,
  imageURL,
  GitHubPagesURL,
  GitHubRepoURL,
  inverted,
}) => {
  return (
    <ProjectWrapper>
      <ProjectImage src={imageURL} alt={`${title}_image`} />
      <ProjectDescription $inverted={inverted}>
        <ProjectHeader>{title}</ProjectHeader>
        <div
          dangerouslySetInnerHTML={{
            __html: description,
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
