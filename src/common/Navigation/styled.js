import styled from "styled-components";
import { themes } from "../../themes";

export const StyledList = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  background-color: ${({ theme }) => themes.color.navigationBackground};
  padding: 2rem 6rem;

  margin-top: 0;
  gap: 2rem;
  font-weight: 700;
  font-size: 1.1rem;
`;

export const StyledListItem = styled.li`
  color: ${({ theme }) => themes.color.navigationFontColor};
  transition: color 0.4s ease;

  &:hover {
    color: #2f64e9; //blue
    cursor: pointer;
  }
`;

export const FirstListItem = styled(StyledListItem)`
  margin-right: auto;

  &:hover {
    color: black;
  }
`;
