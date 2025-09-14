import styled, { keyframes } from "styled-components";

// Gradient animation from About/Home header
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

const float = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-5px);
  }
`;

export const Wrapper = styled.section`
  padding: var(--spacing-3xl) 0;
  margin: var(--spacing-md) 0;
  border-radius: var(--radius-xl);
  position: relative;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoint.lg}) {
    margin: var(--spacing-2xl) 0;
    padding: calc(var(--spacing-2xl) + 96px) var(--spacing-lg)
      var(--spacing-2xl) var(--spacing-lg);
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    margin: 0;
   padding: calc(var(--spacing-xl) + 96px) var(--spacing-lg)
      var(--spacing-2xl) var(--spacing-lg);
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-xl);
  animation: ${fadeInUp} 0.8s ease-out;

  @media (max-width: ${({ theme }) => theme.breakpoint.xl}) {
    gap: var(--spacing-xs);
    margin-bottom: var(--spacing-lg);
  }
`;

export const AvailableTag = styled.span`
  font-weight: 400;
  font-size: 1.1rem;
  margin-left: 0.5em;
  color: var(--color-text-secondary);
`;

export const Header = styled.h2`
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 800;
  margin-bottom: var(--spacing-lg);
  color: var(--color-text-primary);
  line-height: 1.2;
  position: relative;
  padding-bottom: 0.3em;
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

export const ProjectsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-3xl);

  @media (max-width: ${({ theme }) => theme.breakpoint.xl}) {
    gap: var(--spacing-2xl);
  }
`;

export const ProjectWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-3xl);
  align-items: center;
  padding: var(--spacing-xl);
  background: var(--color-background);
  border-radius: var(--radius-lg);
  border: 1px solid var(--color-border);
  box-shadow: var(--shadow-md);
  transition: all var(--transition-normal);
  animation: ${fadeInUp} 0.8s ease-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-xl);
    border-color: var(--color-primary);
  }

  &:not(:last-child) {
    border-bottom: ${({ $border }) =>
      $border ? `2px solid var(--color-border)` : "none"};
  }

  &:nth-child(even) {
    grid-template-columns: 1fr auto;
  }

  /* Force single column for all projects on small screens */
  @media (max-width: ${({ theme }) => theme.breakpoint.xxxl}) {
    grid-template-columns: 1fr !important;
    grid-auto-flow: row;
    gap: var(--spacing-xl);
    text-align: center;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.xl}) {
    gap: var(--spacing-lg);
    padding: var(--spacing-lg);
  }
`;

export const ProjectIcon = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 4px solid var(--color-primary);
  box-shadow: var(--shadow-lg);
  animation: ${float} 3s ease-in-out infinite;
  transition: transform var(--transition-normal);

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.xl}) {
    width: 80px;
    height: 80px;
  }
`;

export const ProjectHeader = styled.h3`
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 700;
  margin: 0 0 var(--spacing-md) 0;
  color: var(--color-text-primary);

  @media (max-width: ${({ theme }) => theme.breakpoint.xxxl}) {
    text-align: center;
  }
`;

export const ProjectImage = styled.img`
  width: 100%;
  max-width: 500px;
  height: auto;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
  transition: all var(--transition-normal);
  animation: ${fadeInUp} 0.8s ease-out 0.2s both;

  &:hover {
    transform: scale(1.02);
    box-shadow: var(--shadow-xl);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.xxxl}) {
    max-width: 400px;
    animation: ${fadeInUp} 0.8s ease-out 0.2s both;
    margin-left: auto;
    margin-right: auto;
    display: block;
    order: 1;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    max-width: 100%;
  }
`;

export const ProjectDescription = styled.div`
  animation: ${fadeInUp} 0.8s ease-out 0.3s both;

  p,
  div {
    font-size: 1.1rem;
    line-height: 1.7;
    color: var(--color-text-primary);
    margin-bottom: var(--spacing-md);

    &:last-of-type {
      margin-bottom: 0;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.xxxl}) {
    animation: ${fadeInUp} 0.8s ease-out 0.4s both;
    order: 2;
    p,
    div {
      font-size: 1rem;
      line-height: 1.5;
      margin-bottom: var(--spacing-sm);
    }
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    p,
    div {
      font-size: 0.95rem;
      line-height: 1.4;
      margin-bottom: var(--spacing-xs);
    }
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  margin-top: var(--spacing-xl);

  @media (max-width: ${({ theme }) => theme.breakpoint.xxxl}) {
    align-items: center;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.lg}) {
    margin-top: var(--spacing-lg);
  }
`;

export const ProjectLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: var(--spacing-sm) var(--spacing-lg);
  background: linear-gradient(
    135deg,
    var(--color-primary),
    var(--color-accent)
  );
  color: white;
  text-decoration: none;
  border-radius: var(--radius-md);
  font-weight: 600;
  font-size: 0.95rem;
  transition: all var(--transition-fast);
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
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: left var(--transition-normal);
  }

  &:hover {
    box-shadow: var(--shadow-lg);

    &::before {
      left: 100%;
    }
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    font-size: 0.9rem;
    width: 100%;
    padding: var(--spacing-xs) var(--spacing-md);
  }
`;

export const LinkTag = styled.span`
  position: relative;
`;
