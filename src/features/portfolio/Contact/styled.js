import styled, { keyframes } from "styled-components";

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

const pulse = keyframes`
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(37, 99, 235, 0.4);
  }
  50% {
    box-shadow: 0 0 0 10px rgba(37, 99, 235, 0);
  }
`;

export const Wrapper = styled.section`
  padding: var(--spacing-3xl) 0;
  margin: var(--spacing-3xl) 0;
  text-align: center;
  background: linear-gradient(135deg, var(--color-surface) 0%, var(--color-background) 100%);
  border-radius: var(--radius-xl);
  border: 1px solid var(--color-border);
  box-shadow: var(--shadow-lg);
  position: relative;
  overflow: hidden;
  animation: ${fadeInUp} 0.8s ease-out;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, var(--color-primary), var(--color-accent), var(--color-primary));
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 200px;
    height: 200px;
    background: radial-gradient(circle, var(--color-primary) 0%, transparent 70%);
    opacity: 0.05;
    border-radius: 50%;
    z-index: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.lg}) {
    margin: var(--spacing-2xl) 0;
    padding: var(--spacing-2xl) var(--spacing-lg);
  }
`;

export const Header = styled.h2`
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  font-weight: 800;
  margin: 0 0 var(--spacing-2xl) 0;
  background: linear-gradient(135deg, var(--color-text-primary), var(--color-primary));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  z-index: 1;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 4px;
    background: linear-gradient(90deg, var(--color-primary), var(--color-accent));
    border-radius: var(--radius-md);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    font-size: clamp(1.2rem, 5vw, 1.8rem);
    margin-bottom: var(--spacing-xl);
  }
`;

export const IconsWrapper = styled.div`
  display: flex;
  gap: var(--spacing-xl);
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  position: relative;
  z-index: 1;

  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    gap: var(--spacing-lg);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.sm}) {
    gap: var(--spacing-md);
  }
`;

export const ContactIconStyled = styled.img`
  width: 60px;
  height: 60px;
  padding: var(--spacing-sm);
  border-radius: 50%;
  border: 2px solid var(--color-border);
  background: var(--color-background);
  transition: all var(--transition-normal);
  cursor: pointer;
  animation: ${float} 3s ease-in-out infinite;
  animation-delay: ${props => (props.index || 0) * 0.2}s;
  
  &:hover {
    transform: translateY(-8px) scale(1.1);
    border-color: var(--color-primary);
    box-shadow: var(--shadow-xl);
    animation: ${pulse} 1.5s infinite, ${float} 3s ease-in-out infinite;
    background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
    filter: brightness(1.1);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    width: 50px;
    height: 50px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.sm}) {
    width: 45px;
    height: 45px;
  }
`;

