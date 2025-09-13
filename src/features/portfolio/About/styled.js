import styled, { keyframes } from "styled-components";

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
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 4px;
    background: linear-gradient(90deg, var(--color-primary), var(--color-accent));
    border-radius: var(--radius-md);
    margin-bottom: var(--spacing-xl);
  }

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
    content: '';
    position: absolute;
    top: -20px;
    left: -20px;
    right: -20px;
    bottom: -20px;
    background: linear-gradient(45deg, var(--color-primary), var(--color-accent), var(--color-primary));
    border-radius: 50%;
    z-index: -1;
    opacity: 0.1;
    filter: blur(30px);
    animation: ${spin} 20s linear infinite;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.xl2}) {
    order: -1;
    animation: ${fadeInLeft} 0.8s ease-out 0.2s both, ${float} 6s ease-in-out infinite 1.2s;
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
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 800;
  margin: 0 0 var(--spacing-xl) 0;
  background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 60px;
    height: 4px;
    background: linear-gradient(90deg, var(--color-primary), var(--color-accent));
    border-radius: var(--radius-md);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.xl2}) {
    text-align: center;
    
    &::after {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

export const ContentContainer = styled.div`
  animation: ${fadeInRight} 0.8s ease-out 0.3s both;
  
  p {
    font-size: 1.1rem;
    line-height: 1.8;
    margin-bottom: var(--spacing-lg);
    color: var(--color-text-secondary);
    
    &:first-of-type {
      font-size: 1.2rem;
      font-weight: 500;
      color: var(--color-text-primary);
    }
    
    &:last-of-type {
      margin-bottom: 0;
    }
  }
  
  /* Style for technology mentions */
  p:contains("React"), p:contains("Next.js"), p:contains("TypeScript") {
    position: relative;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.xl2}) {
    animation: ${fadeInRight} 0.8s ease-out 0.5s both;
  }
`;

