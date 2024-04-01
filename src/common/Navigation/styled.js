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

export const StyledList = styled.nav`
  position: sticky;
  top: 0;
  z-index: 100;
  display: flex;
  flex-direction: row;
  list-style: none;
  align-items: center;
  background-color: ${({ theme }) => themes.color.navigationBackground};
  padding: 1rem 6rem;
  margin-top: 0;
  gap: 2rem;
  font-weight: 700;
  font-size: 1.2rem;
  box-shadow: -1px -4px 29px 4px #c9c7c8;
  transition: all 1s ease;

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
  transition: all 0.3s ease;

  &:hover {
    border: 1px solid #1693e4;
    background-color: #b9e1fb;
    cursor: pointer;
    color: black;
  }

  @media (max-width: ${({ theme }) => themes.breakpoint.mobile}) {
    animation: ${slideFromLeft} 1s forwards;
  }
`;

export const FirstListItem = styled(StyledListItem)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: auto;

  &:hover {
    background-color: #f4f6f7;
    cursor: pointer;
  }

  @media (max-width: ${({ theme }) => themes.breakpoint.mobile}) {
    margin: auto;
    flex-direction: column-reverse;
    gap:15px;
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
