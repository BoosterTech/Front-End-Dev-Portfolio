import React from "react";
import { Container, Title, Image, Description, ComingSoonTag } from "./styled";

const ComingSoonProject = ({ title, imageURL, description }) => (
  <Container>
    <Title>{title}</Title>
    <Image src={imageURL} alt={title} />
    <Description dangerouslySetInnerHTML={{ __html: description }} />
    <ComingSoonTag>Coming Soon</ComingSoonTag>
  </Container>
);

export default ComingSoonProject;
