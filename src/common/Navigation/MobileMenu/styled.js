import styled, { keyframes } from "styled-components";
import { themes } from "../../../themes";
import { StyledListItem } from "../styled";

const slideFromRight = keyframes`
from{
transform: translate(calc(20vw + 40%));

}
to{
  transform: translate(0);
}
`;

export const MobileMenuContainer = styled.div`
  position: absolute;
  top: 125px;
  display: none;
  color: white;

  @media (max-width: ${({ theme }) => themes.breakpoint.xs}) {
    display: block;
  }
`;

export const MenuButton = styled.button`
  display: block;
  margin: auto;
  background-color: transparent;
  cursor: pointer;
  border: none;

  @media (max-width: ${({ theme }) => themes.breakpoint.mobile}) {
    animation: ${slideFromRight} 1s ease-out;
  }
`;

export const MenuList = styled.ul`
  display: flex;
  list-style-type: none;
  padding: 0;
  padding-top: 15px;
  margin: auto;
  text-align: center;
  opacity: 0.3;
  transition: opacity .5s ease;

  &:hover {
    opacity: 1;
  }
`;

export const MenuItem = styled(StyledListItem)`
  margin-bottom: 20px;
`;

export const HamburgerIcon = styled.div`
  width: 30px;
  height: 3px;
  background-color: #333;
  margin: 5px 0;
  transition: transform 0.7s ease, opacity 0.9s ease; /* Smooth transition for icon animation */
  border-radius: 5px;

  /* Rotate the icon to create an X when the menu is open */
  ${({ isOpen }) =>
    isOpen &&
    `
    &:nth-child(1) {
    transform: rotate(-45deg) translate( -5px, 6px);
    }
    &:nth-child(2) {
      opacity: 0;
    }
    &:nth-child(3) {
      transform: rotate(45deg) translate( -5px, -6px);
    }  
  `}
`;
