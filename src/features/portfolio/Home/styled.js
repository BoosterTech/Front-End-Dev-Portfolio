import styled from "styled-components";
import { keyframes } from "styled-components";
import { themes } from "../../../themes";

const imageBorderAnimation = keyframes`
0%{
  border-radius: 65% 35% 67% 33% / 65% 36% 64% 35%  ;
}
50%{
   border-radius: 34% 66% 31% 69% / 36% 61% 39% 64%  ;
}
100%{
    border-radius: 65% 35% 67% 33% / 65% 36% 64% 35%  ;
}
`;

// const wavingHandAnimation = keyframes`
// 0%{
//   transform: rotate(0);
// }
// 50%{
//   transform: rotate(70deg);
// }
// 100%{
//   transform: rotate(0);
// }
// `;

export const HomeWrapper = styled.section`
  margin: 150px auto;
  padding: 15px;
  width: 50%;

  @media (max-width: ${({ theme }) => themes.breakpoint.mobile}) {
    width: 100%;
  }
`;

export const ContentImageContainer = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: ${({ theme }) => themes.breakpoint.smallPC}) {
    flex-direction: column;
  }
`;

export const ContentContainer = styled.div`
  width: auto;

  @media (max-width: ${({ theme }) => themes.breakpoint.smallPC}) {
    order: 2;
    text-align: center;
  }
`;

export const ContentHeader = styled.h1`
  font-size: 2.8rem;
  font-weight: 900;
  padding: 15px;
  cursor: none;
  transition: all 2s ease-in-out;

  &:hover img {
    transform: rotate(70deg);
  }

  &:not(:hover) img {
    transform: rotate(0);
  }

  @media (max-width: ${({ theme }) => themes.breakpoint.mobile}) {
    font-size: 2rem;
  }
`;

export const HeaderImage = styled.img`
  display: inline-block;
  width: 50px;
  height: auto;
  margin-bottom: 0;
  transform-origin: bottom;
  transition: transform 3s ease;
`;

export const HeaderParagraph = styled.p`
  padding: 10px 10px;
  font-weight: 500;
  font-size: larger;
`;

export const ImageContainer = styled.div`
  width: 250px;
  min-width: 250px;
  height: 250px;
  margin: 10px;
  border: 3px solid black;
  border-radius: 70% 30% 23% 77% / 82% 18% 82% 18%;
  overflow: hidden;
  position: relative;
  animation: ${imageBorderAnimation} 11s ease-in-out infinite;

  @media (max-width: ${({ theme }) => themes.breakpoint.smallPC}) {
    order: 1;
    margin: auto;
  }
`;

export const ProfileImage = styled.img`
  width: 110%;
  height: 100%;
  object-fit: cover;
`;

export const TechStackContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  max-width: inherit;
  height: auto;
  margin: 40px auto auto;
  flex-wrap: wrap;
  gap: 30px;
  align-items: center;
  border: 1px solid #9aa4ab;
  border-bottom: 1px solid #9aa4ab;
  border-radius: 15px;
  padding: 30px 20px;
  transition: all 3s ease;

  @media (max-width: ${({ theme }) => themes.breakpoint.mobile}) {
    margin: auto;
    padding: 30px;
    width: fit-content;
  }
`;

export const TechStackHeader = styled.h3`
  padding-right: 10px;
  border-right: 1px solid #9aa4ab;
  font-weight: 100;

  @media (max-width: ${({ theme }) => themes.breakpoint.mobile}) {
    width: 100%;
    border-right: none;
    text-align: center;
  }
`;

export const TechStackItem = styled.img`
  width: auto;
  height: 50px;
  border: 1px solid black;
  border-radius: 5px;
  transition: transform 0.5s ease, height 3s ease;

  &:hover {
    transform: scale(1.7);
  }

  @media (max-width: ${({ theme }) => themes.breakpoint.mobile}) {
    margin-bottom: 35px;
    text-align: center;
    height: 30px;

    &:hover {
    transform: scale(2.3);
  }
  }
`;
