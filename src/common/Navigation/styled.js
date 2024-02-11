import styled from "styled-components";
import { themes } from "../../themes";
import { keyframes } from "styled-components";

const slideFromLeft = keyframes`
from{
transform: translate(calc(-20vw - 40%));

}
to{
  transform: translate(0);
}
`;

export const StyledList = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  align-items: center;
  background-color: ${({ theme }) => themes.color.navigationBackground};
  padding: 2rem 6rem;
  margin-top: 0;
  gap: 2rem;
  font-weight: 700;
  font-size: 1.2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Grey shadow */

  @media (max-width: ${({ theme }) => themes.breakpoint.mobile}) {
    flex-direction: column;
  }
`;

export const StyledListItem = styled.li`
  color: ${({ theme }) => themes.color.navigationFontColor};
  transition: color 0.3s ease;
  border: 1px solid transparent;
  padding: 2px 20px;
  border-radius: 50px;

  &:hover {
    border: 1px solid #1693e4;
    background-color: #b9e1fb;
    cursor: pointer;
    color: black;
  }

  @media (max-width: ${({ theme }) => themes.breakpoint.mobile}) {
    animation: ${slideFromLeft} 1 1s forwards;
  }
`;

export const FirstListItem = styled(StyledListItem)`
  margin-right: auto;

  &:hover {
    background-color: #f4f6f7;
    cursor: pointer;
  }

  @media (max-width: ${({ theme }) => themes.breakpoint.mobile}) {
    margin: auto;
  }
`;

export const PCmenuContainer = styled(StyledList)`
  padding: 0;
  border: none;
  box-shadow: none;

  @media (max-width: ${({ theme }) => themes.breakpoint.mobile}) {
    display: none;
  }
`;
