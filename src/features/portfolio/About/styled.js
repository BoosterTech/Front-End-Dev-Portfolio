import styled, { keyframes } from "styled-components";
// Gradient animation from Home ContentHeader
const gradientShift = keyframes`
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
`;

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

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const fadeInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const fadeInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const float = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
`;

export const Wrapper = styled.article`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: var(--spacing-3xl);
  align-items: center;
  padding: var(--spacing-3xl) 0;
  margin-bottom: var(--spacing-3xl);
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoint.xl2}) {
    grid-template-columns: 1fr;
    gap: var(--spacing-2xl);
    text-align: center;
    padding: var(--spacing-2xl) 0;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  animation: ${fadeInLeft} 0.8s ease-out, ${float} 6s ease-in-out infinite 1s;

  &::before {
    content: "";
    position: absolute;
    width: 260px;
    height: 260px;

    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 0.45) 0%,
      var(--color-primary) 25%,
      var(--color-accent) 60%,
      rgba(0, 0, 0, 0.08) 85%,
      transparent 100%
    );
    border-radius: 50%;
    z-index: -1;
    opacity: 0.38;
    filter: blur(32px);
    animation: ${spin} 20s linear infinite;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.xl2}) {
    order: -1;
    animation: ${fadeInLeft} 0.8s ease-out 0.2s both,
      ${float} 6s ease-in-out infinite 1.2s;
  }
`;

export const StyledSVG = styled.svg`
  position: relative;
  z-index: 2;
  animation: ${spin} 60s linear infinite;
  filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.1));
`;

export const Image = styled.img`
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -52%);
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 4px solid var(--color-surface);
  box-shadow: var(--shadow-lg);
  transition: transform var(--transition-normal);

  &:hover {
    transform: translate(-50%, -52%) scale(1.05);
  }
`;

export const Header = styled.h2`
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
  animation: ${gradientShift} 4s ease-in-out infinite;

  &:hover img {
    animation: ${waveHand} 4s infinite;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    font-size: clamp(2rem, 8vw, 2.5rem);
  }
`;

export const ContentContainer = styled.div`
  animation: ${fadeInRight} 0.8s ease-out 0.3s both;

  p,
  div {
    font-size: 1.1rem;
    line-height: 1.8;
    margin-bottom: var(--spacing-lg);
    color: var(--color-text-primary);

    &:last-of-type {
      margin-bottom: 0;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.xl2}) {
    animation: ${fadeInRight} 0.8s ease-out 0.5s both;
  }
`;
