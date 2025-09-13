import styled from "styled-components";
import { keyframes } from "styled-components";

const waveHand = keyframes`
  0% { transform: rotate(0deg) scale(1.1); }
  10% { transform: rotate(20deg) scale(1.1); }
  20% { transform: rotate(-10deg) scale(1.1); }
  30% { transform: rotate(20deg) scale(1.1); }
  40% { transform: rotate(-10deg) scale(1.1); }
  50% { transform: rotate(20deg) scale(1.1); }
  60% { transform: rotate(-10deg) scale(1.1); }
  70% { transform: rotate(20deg) scale(1.1); }
  80% { transform: rotate(-10deg) scale(1.1); }
  90% { transform: rotate(10deg) scale(1.1); }
  100% { transform: rotate(0deg) scale(1.1); }
`;

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

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const techStackFloat = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
`;

export const HomeWrapper = styled.section`
  padding: var(--spacing-3xl) 0;
  width: 100%;
  animation: ${fadeInUp} 0.8s ease-out;

  @media (max-width: ${({ theme }) => theme.breakpoint.lg}) {
    padding: var(--spacing-2xl) 0;
  }
`;

export const ContentImageContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: var(--spacing-3xl);
  align-items: center;
  margin-bottom: var(--spacing-3xl);

  @media (max-width: ${({ theme }) => theme.breakpoint.xl2}) {
    grid-template-columns: 1fr;
    gap: var(--spacing-2xl);
    text-align: center;
  }
`;

export const ContentContainer = styled.div`
  animation: ${slideInLeft} 0.8s ease-out 0.2s both;

  @media (max-width: ${({ theme }) => theme.breakpoint.xl2}) {
    order: 2;
    animation: ${fadeInUp} 0.8s ease-out 0.4s both;
  }
`;

export const ContentHeader = styled.h1`
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 800;
  margin-bottom: var(--spacing-lg);
  color: var(--color-text-primary);
  line-height: 1.1;
  position: relative;

  background: linear-gradient(
    135deg,
    var(--color-text-primary) 0%,
    var(--color-primary) 50%,
    var(--color-accent) 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 200% 200%;
  animation: gradientShift 4s ease-in-out infinite;

  @keyframes gradientShift {
    0%,
    100% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
  }

  &:hover img {
    /* transform: rotate(20deg) scale(1.1); */
        animation: ${waveHand} 4s infinite;

  }

  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    font-size: clamp(2rem, 8vw, 2.5rem);
  }
`;

export const HeaderImage = styled.img`
  display: inline-block;
  width: clamp(35px, 5vw, 50px);
  height: auto;
  margin-left: var(--spacing-sm);
  transform-origin: bottom center;
  transition: transform var(--transition-slow);
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1));

  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    width: clamp(30px, 6vw, 40px);
  }

  &:hover {
    animation: ${waveHand} 4s infinite;
  }
`;

export const HeaderParagraph = styled.p`
  font-size: clamp(1.1rem, 2.5vw, 1.5rem);
  font-weight: 500;
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin: 0;
  max-width: 600px;

  @media (max-width: ${({ theme }) => theme.breakpoint.xl2}) {
    max-width: none;
  }
`;

export const ImageContainer = styled.div`
  width: 280px;
  height: 280px;
  position: relative;
  box-shadow: 0 8px 32px rgba(206, 207, 207, 0.18),
    0 2px 8px rgba(0, 0, 0, 0.08);
  animation: ${slideInRight} 0.8s ease-out 0.3s both,
    ${imageBorderAnimation} 12s ease-in-out infinite 1s;

  &::before {
    content: "";
    position: absolute;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    background: linear-gradient(
      45deg,
      var(--color-primary),
      var(--color-accent),
      var(--color-primary)
    );
    border-radius: inherit;
    z-index: -1;
    opacity: 0.3;
    filter: blur(60px);
    animation: ${imageBorderAnimation} 12s ease-in-out infinite 1s;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.xl2}) {
    order: 1;
    margin: 0 auto var(--spacing-xl) auto;
    animation: ${fadeInUp} 0.8s ease-out 0.2s both,
      ${imageBorderAnimation} 12s ease-in-out infinite 1s;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.sm}) {
    width: 220px;
    height: 220px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.xxs}) {
    width: 180px;
    height: 180px;
  }
`;

export const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  box-shadow: 0 0 40px 14px rgba(40, 142, 221, 0.35),
    0 8px 32px rgba(206, 207, 207, 0.18), 0 2px 8px rgba(0, 0, 0, 0.08);
  border-radius: inherit;
  border: 1px solid var(--color-primary);
  transition: transform var(--transition-normal);
`;

export const TechStackContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: var(--spacing-lg);
  margin: var(--spacing-3xl) 0;
  padding: var(--spacing-2xl) var(--spacing-xl);
  background: var(--color-surface);
  border-radius: var(--radius-xl);
  border: 1px solid var(--color-border);
  box-shadow: var(--shadow-sm);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.1),
      transparent
    );
    transition: left 2s ease-in-out;
  }

  &:hover::before {
    left: 100%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.lg}) {
    gap: var(--spacing-md);
    padding: var(--spacing-xl) var(--spacing-lg);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    gap: var(--spacing-sm);
    padding: var(--spacing-lg) var(--spacing-md);
  }
`;

export const TechStackItem = styled.img`
  width: 50px;
  height: 50px;
  object-fit: contain;
  padding: var(--spacing-xs);
  border: 2px solid var(--color-border);
  border-radius: var(--radius-md);
  background: var(--color-background);
  transition: all var(--transition-normal);
  cursor: pointer;
  animation: ${techStackFloat} 3s ease-in-out infinite;
  animation-delay: ${(props) => (props.index || 0) * 0.1}s;

  @media (hover: hover) {
    &:hover {
      transform: translateY(-8px) scale(1.1);
      border-color: var(--color-primary);
      box-shadow: var(--shadow-lg);
      background: linear-gradient(
        135deg,
        var(--color-primary),
        var(--color-accent)
      );
      filter: brightness(1.1);
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.xl2}) {
    width: 45px;
    height: 45px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    width: 40px;
    height: 40px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.sm}) {
    width: 35px;
    height: 35px;
  }
`;
