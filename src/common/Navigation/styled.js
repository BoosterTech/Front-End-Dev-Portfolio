import styled from "styled-components";
import { themes } from "../../themes";
import { keyframes } from "styled-components";
import { Link } from "react-scroll";

const slideFromLeft = keyframes`
from{
transform: translate(calc(-20vw - 40%));

}
to{
  transform: translate(0);
}
`;

export const StyledList = styled.nav`
  position: sticky;
  top: 0;
  z-index: 100;
  display: flex;
  flex-direction: row;
  list-style: none;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => themes.color.navigationBackground};
  padding: 1rem;
  margin-top: 0;
  gap: 2rem;
  font-weight: 700;
  font-size: 1.2rem;
  box-shadow: -1px -4px 29px 4px #c9c7c8;
  transition: all 1s ease;
  flex-grow: 1;

  &:second-child {
    justify-content: flex-start;
    flex-grow: 1;
  }

  &:last-child {
    justify-content: flex-end;
  }

  @media (max-width: ${({ theme }) => themes.breakpoint.lg}) {
    padding: 0.5rem;
    height: auto;
    gap: 1rem;
  }

  @media (max-width: ${({ theme }) => themes.breakpoint.md}) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

export const StyledListItem = styled.li`
  color: ${({ theme }) => themes.color.navigationFontColor};
  transition: color 0.3s ease;
  border: 1px solid transparent;
  padding: 2px 20px;
  border-radius: 50px;
  transition: all 0.3s ease;
  transition: border 1s, background-color 1s, color 1s;

  &:hover {
    border: 1px solid #1693e4;
    background-color: #b9e1fb;
    cursor: pointer;
    color: black;
  }

  @media (max-width: ${({ theme }) => themes.breakpoint.xs}) {
    animation: ${slideFromLeft} 1s forwards;
    padding: 2px 15px;
  }
`;

export const StyledScrollLink = styled(Link)`
  &.active ${StyledListItem} {
    border: 1px solid #1693e4;
    background-color: #b9e1fb;

    color: black;
  }
`;

export const DevWrapper = styled(StyledListItem)`
  margin-right: auto;
  transition: all 0.3s ease;

  &:hover {
    background-color: #f4f6f7;
    cursor: pointer;
  }

  @media (max-width: ${({ theme }) => themes.breakpoint.lg}) {
    display: none;
  }
`;

export const MenuContainer = styled(StyledList)`
  display: flex;
  flex-direction: row;
  padding: 0;
  border: none;
  box-shadow: none;

  @media (max-width: ${({ theme }) => themes.breakpoint.lg}) {
  }
`;
