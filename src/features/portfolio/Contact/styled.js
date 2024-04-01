import styled, { keyframes } from "styled-components";
import { themes } from "../../../themes";

const headerImageAmination = keyframes`
0%{
  transform: translateY(0);
}

30%{
  transform: translateY(-5px);
}

70%{
  transform: translateY(+10px);
}
100%{
  transform: translateY(0);
}
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
  color: black;
  font-size: 1.3em;
  font-weight: 900;

  @media (max-width: ${({ theme }) => themes.breakpoint.mobile}) {
    font-size: 1.1em;
  }
`;

export const HeaderImage = styled.img`
  width: 50px;
`;

export const Wrapper = styled.section`
  max-width: 100%;
  max-height: 300px;
  background-color: white;
  box-shadow: -1px -4px 29px 4px #c9c7c8;
  padding: 25px 100px;
  transition: transform 3s ease;

  &:hover{
    ${HeaderImage}{
      animation: ${headerImageAmination} 2s linear infinite;
    }
  }
`;

export const FooterWrapper = styled.div`
  display: flex;
  background-color: grey;
  height: 100px;
  max-width: 50%;
  margin: 0;
`;

export const IconsWrapper = styled.div`
  display: flex;
  gap: 30px;
  height: 70px;
  max-width: 100%;
  justify-content: center;

  @media (max-width: ${({ theme }) => themes.breakpoint.mobile}) {
    height: 50px;
  }
`;

export const ContactIconStyled = styled.img`
  max-width: auto;
  padding: 5px;

  transition: transform 0.3s ease, scale 3s ease;
  border-radius: 100%;

  &:hover {
    transform: scale(1.2);
    cursor: pointer;
    border: 1px solid #1693e4;
  }
`;