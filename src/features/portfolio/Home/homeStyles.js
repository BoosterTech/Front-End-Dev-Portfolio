import { fadeInUp, slideInLeft, slideInRight } from "common/animations";
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
  padding: var(--nav-height-actual, var(--nav-height)) 0 var(--spacing-3xl) 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.lg}) {
    padding: var(--nav-height-actual, var(--nav-height-mobile)) 0
      var(--spacing-2xl) 0;
  }
  width: 100%;
  animation: ${fadeInUp} 0.8s ease-out;
`;

export const ContentImageContainer = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: var(--spacing-3xl);
  align-items: center;
  align-content: center;
  min-height: calc(100vh - var(--nav-height-actual, var(--nav-height)));
  margin-bottom: var(--spacing-3xl);

  @media (max-width: ${({ theme }) => theme.breakpoint.xl2}) {
    grid-template-columns: minmax(0, 1fr);
    gap: var(--spacing-2xl);
    min-height: calc(
      100vh - var(--nav-height-actual, var(--nav-height-mobile))
    );
    text-align: center;
    padding-top: var(--spacing-xl);
  }

  @media (max-height: 500px) {
    min-height: auto;
  }
`;

export const ContentContainer = styled.div`
  min-width: 0;
  animation: ${slideInLeft} 0.8s ease-out 0.2s both;

  @media (max-width: ${({ theme }) => theme.breakpoint.xl2}) {
    order: 2;
    animation: ${fadeInUp} 0.8s ease-out 0.4s both;
  }
`;

export const ImageContainer = styled.div`
  width: 300px;
  height: 300px;
  position: relative;
  box-shadow:
    0 8px 32px rgba(var(--color-black-rgb), 0.18),
    0 2px 8px rgba(var(--color-black-rgb), 0.08);
  animation:
    ${slideInRight} 0.8s ease-out 0.3s both,
    ${imageBorderAnimation} 12s ease-in-out infinite 1s;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 280px;
    height: 280px;
    background: radial-gradient(
      circle,
      rgba(var(--color-white-rgb), 0.45) 0%,
      var(--color-primary) 25%,
      var(--color-accent) 60%,
      rgba(var(--color-black-rgb), 0.08) 85%,
      transparent 100%
    );
    border-radius: 50%;
    z-index: -1;
    opacity: 0.38;
    filter: blur(32px);
    animation: spin 20s linear infinite;
  }

  @keyframes spin {
    from {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    to {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.xl2}) {
    order: 1;
    margin: 0 auto var(--spacing-xl) auto;
    animation:
      ${fadeInUp} 0.8s ease-out 0.2s both,
      ${imageBorderAnimation} 12s ease-in-out infinite 1s;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.sm}) {
    width: 230px;
    height: 230px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.xxs}) {
    width: 190px;
    height: 190px;
  }
`;

export const ProfileImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  object-fit: cover;
  box-shadow:
    0 0 40px 14px rgba(var(--color-tooltip-rgb), 0.35),
    0 8px 32px rgba(var(--color-white-rgb), 0.18),
    0 2px 8px rgba(var(--color-black-rgb), 0.08);
  border-radius: inherit;
  border: 1px solid var(--color-primary);
  transition:
    opacity 0.4s ease,
    transform var(--transition-normal);
`;
