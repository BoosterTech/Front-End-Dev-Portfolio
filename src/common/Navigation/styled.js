import styled from "styled-components";
import { keyframes } from "styled-components";
import { Link } from "react-scroll";

const slideFromLeft = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const StyledList = styled.nav`
  position: sticky;
  top: 0;
  z-index: 100;
  display: flex;
  flex-direction: row;
  list-style: none;
  align-items: center;
  justify-content: space-between;
  background-color: var(--color-surface);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  padding: var(--spacing-lg) var(--spacing-xl);
  margin: 0;
  font-weight: 600;
  font-size: 0.95rem;
  box-shadow: var(--shadow-sm);
  border-bottom: 1px solid var(--color-border);
  transition: all var(--transition-normal);
  animation: ${fadeIn} 0.6s ease-out;

  @media (max-width: ${({ theme }) => theme.breakpoint.lg}) {
    padding: var(--spacing-md) var(--spacing-lg);
    font-size: 0.9rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    flex-direction: column;
    gap: var(--spacing-md);
    padding: var(--spacing-md);
  }
`;

export const StyledListItem = styled.li`
  color: var(--color-text-secondary);
  transition: all var(--transition-fast);
  border: 1px solid transparent;
  padding: var(--spacing-sm) var(--spacing-lg);
  border-radius: var(--radius-lg);
  cursor: pointer;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
    transition: left var(--transition-slow);
  }

  @media (hover: hover) {
    &:hover {
      color: var(--color-primary);
      background-color: var(--color-surface);
      border-color: var(--color-border);
      transform: translateY(-1px);
      box-shadow: var(--shadow-md);
      
      &::before {
        left: 100%;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.lg}) {
    padding: var(--spacing-sm) var(--spacing-md);
    font-size: 1.2rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    animation: ${slideFromLeft} 0.6s ease-out forwards;
    padding: var(--spacing-sm) var(--spacing-md);
  }
`;

export const StyledScrollLink = styled(Link)`
  text-decoration: none;
  
  &.active ${StyledListItem} {
    color: var(--color-primary);
    background-color: var(--color-primary);
    background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
    color: white;
    border-color: var(--color-primary);
    box-shadow: var(--shadow-md);
    transform: translateY(-1px);
  }

  ${(props) =>
    props.$isContactVisible &&
    `${StyledListItem} {
      color: white;
      background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
      border-color: var(--color-primary);
      box-shadow: var(--shadow-md);
      transform: translateY(-1px);
    }`}
`;

export const DevWrapper = styled.div`
  color: var(--color-text-primary);
  font-weight: 800;
  font-size: 1.5rem;
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--radius-md);
  transition: all var(--transition-fast);
  cursor: pointer;
  background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 200% 200%;
  animation: gradientShift 3s ease-in-out infinite;

  @keyframes gradientShift {
    0%, 100% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
  }

  &:hover {
    transform: scale(1.05);
    filter: brightness(1.1);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    font-size: 1.2rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.sm}) {
    font-size: 1rem;
  }
`;

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--spacing-sm);

  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: var(--spacing-xs);
  }
`;

