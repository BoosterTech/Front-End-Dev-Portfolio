import styled from "styled-components";

export const SkillsetContainer = styled.div`
  width: auto;
  height: ${({ expanded }) => (expanded ? "auto" : "25px")};
  transition: all 3s ease;
`;

export const SkillsetButton = styled.button`
  display: block;
  margin: 0 auto;
  border: none;
  font-weight: bold;
  cursor: pointer;
`;

export const SkillsetText = styled.div`
  margin-top: 10px;

`;

export const ListContainer = styled.ul`
display: grid;
grid-template-columns: repeat(auto-fill,minmax(100px,1fr));
grid-gap: 10px;

`;

export const ListItem =styled.li`

`
