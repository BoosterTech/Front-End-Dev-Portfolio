import styled, { keyframes } from "styled-components";
import { themes } from "../../../themes";

const spin = keyframes`
from{
    transform:rotate(0);
}
to{
    transform: rotate(360deg);
}`;

export const Wrapper = styled.article`
  display: flex;
  flex-direction: row;
  max-width: 100%;
  height: auto;

  padding-top: 100px;
  padding-bottom: 100px;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;

  @media (max-width: ${({ theme }) => themes.breakpoint.xl2}) {
    flex-direction: column;
    margin: 0 auto;
    padding-bottom: 10px;
    padding-top: 10px;
    font-size: 1rem;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  transition: all 3s ease;

  @media (max-width: ${({ theme }) => themes.breakpoint.xl2}) {
    transform: scale(0.7);
    margin: 0;
    padding: 0;
  }
`;

export const StyledSVG = styled.svg`
  position: relative;
  z-index: 2;
  animation: ${spin} 60s linear infinite;
`;

export const Image = styled.img`
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -52%);
  width: 150px;
  height: 150px;
  border-radius: 100%;
`;

export const Header = styled.h1`
  font-size: 1.4em;
  font-weight: bold;
  color: #0b93f3;
  margin: 0 0 25px 0;

  @media (max-width: ${({ theme }) => themes.breakpoint.xl2}) {
    font-size: 1.3em;
    text-align: center;
  }
`;

export const ContentContainer = styled.div`
  padding: 15px;
  margin-left: 30px;
  transition: all 3s ease;
  text-align: left;

  @media (max-width: ${({ theme }) => themes.breakpoint.xl2}) {
    margin: auto;
    padding: 0;
  }
`;
