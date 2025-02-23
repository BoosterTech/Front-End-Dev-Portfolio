import styled from "styled-components";
import { keyframes } from "styled-components";

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

export const HomeWrapper = styled.section`
  margin: 30px auto 0 auto;
  padding: 15px;
  width: 65%;
  /* font-size: 1rem; */

  @media (max-width: ${({ theme }) => theme.breakpoint.xxl}) {
    width: 100%;
    padding: 0;
  }
`;

export const ContentImageContainer = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: ${({ theme }) => theme.breakpoint.xl2}) {
    flex-direction: column;
  }
`;

export const ContentContainer = styled.div`
  width: auto;

  @media (max-width: ${({ theme }) => theme.breakpoint.xl2}) {
    order: 2;
  }
`;

export const ContentHeader = styled.h1`
  /* font-size: 1.7rem; */
  font-weight: 900;
  padding: 5px;
  cursor: none;
  transition: all 2s ease-in-out;

  &:hover img {
    transform: rotate(70deg);
  }

  &:not(:hover) img {
    transform: rotate(0);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.xl2}) {
    text-align: center;
    font-size: 1.7rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    font-size: 1.1rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.sm}) {
    font-size: 1.2em;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    font-size: 1.07rem;
  }
`;

export const HeaderImage = styled.img`
  display: inline-block;
  width: 45px;
  height: auto;
  margin-bottom: 0;
  margin-left: 2px;
  transform-origin: bottom;
  transition: transform 3s ease;

  @media (max-width: ${({ theme }) => theme.breakpoint.xl2}) {
    width: 45px;
    margin: auto;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    width: 35px;
  }
`;

export const HeaderParagraph = styled.p`
  padding: 10px 10px;
  font-weight: 500;
  font-size: 1.4rem;

  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    font-size: 1rem;
  }
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

  @media (max-width: ${({ theme }) => theme.breakpoint.xl2}) {
    order: 1;
    margin: auto;
    width: 220px;
    min-width: 220px;
    height: 220px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.xxs}) {
    width: 150px;
    min-width: 150px;
    height: 150px;
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
  margin: 40px auto 40px auto;
  flex-wrap: wrap;
  gap: 30px;
  align-items: center;
  /* border: 1px solid #9aa4ab; */
  border-radius: 15px;
  padding: 30px 20px;
  transition: all 3s ease;

  @media (max-width: ${({ theme }) => theme.breakpoint.lg}) {
    display: none;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.xl}) {
    gap: 20px;
  }
`;

export const TechStackItem = styled.img`
padding: 3px;
  width: auto;
  height: 50px;
  border: 1px solid black;
  border-radius: 5px;
  transition: transform 0.5s ease, height 3s ease;

  @media (hover: hover) {
    &:hover {
      transform: scale(1.6);
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.xl2}) {
    text-align: center;
    height: 30px;

    @media (hover: hover) {
      &:hover {
        transform: scale(2.3);
      }
    }
  }
`;
