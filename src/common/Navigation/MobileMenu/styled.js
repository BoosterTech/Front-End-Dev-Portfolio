import styled, { keyframes } from "styled-components";
import { themes } from "../../../themes";
import { StyledListItem } from "../styled";

export const MobileMenuContainer = styled.div`
  color: white;

  @media (max-width: ${({ theme }) => themes.breakpoint.xs}) {
    display: block;
  }
`;

export const MenuList = styled.ul`
  display: flex;
  list-style-type: none;
  padding: 0;
  /* padding-top: 5px; */
  margin: auto;
  text-align: center;

`;

export const MenuItem = styled(StyledListItem)`
  /* margin-bottom: 20px; */
`;
