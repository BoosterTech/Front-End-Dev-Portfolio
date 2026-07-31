import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const gradientShift = keyframes`
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
`;

export const Wrapper = styled.footer`
  background: linear-gradient(135deg, var(--color-surface), var(--color-background));
  border-top: 1px solid var(--color-border);
  margin-top: var(--spacing-3xl);
  padding: var(--spacing-sm) 0;
  text-align: center;
  position: relative;
  overflow: hidden;
  animation: ${fadeIn} 0.8s ease-out;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, var(--color-primary), var(--color-accent), var(--color-primary));
    background-size: 200% 200%;
    animation: ${gradientShift} 3s ease-in-out infinite;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 300px;
    height: 100px;
    background: radial-gradient(ellipse, var(--color-primary) 0%, transparent 70%);
    opacity: 0.03;
    z-index: 0;
  }
`;

export const TextContainer = styled.p`
  margin: 0;
  padding: var(--spacing-md);
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--color-text-secondary);
  position: relative;
  z-index: 1;
  
  &::before {
    content: '💻';
    margin-right: var(--spacing-sm);
  }
  
  &::after {
    content: '🚀';
    margin-left: var(--spacing-sm);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.lg}) {
    font-size: 0.9rem;
    padding: var(--spacing-sm);
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoint.sm}) {
    font-size: 0.85rem;
  }
`;

