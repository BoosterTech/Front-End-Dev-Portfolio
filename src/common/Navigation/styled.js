import { fadeIn, slideFromLeft } from "common/animations";
import { Link } from "react-scroll";
import styled from "styled-components";

export const StyledList = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  flex-direction: row;
  list-style: none;
  align-items: center;
  justify-content: space-between;
  background-color: var(--color-surface);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  padding: var(--spacing-sm) var(--spacing-xl);
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
`;

export const TopRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex: 0 0 auto;
  gap: var(--spacing-md);

  @media (max-width: ${({ theme }) => theme.breakpoint.lg}) {
    justify-content: flex-start;
  }
`;

export const StyledListItem = styled.li`
  color: var(--color-text-primary);
  transition: all var(--transition-fast);
  border: 1px solid transparent;
  padding: var(--spacing-sm) var(--spacing-lg);
  border-radius: 20px;
  cursor: pointer;
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
      rgba(var(--color-white-rgb), 0.1),
      transparent
    );
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

  @media (max-width: ${({ theme }) => theme.breakpoint.xl2}) {
    padding: 10px 14px;
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
  white-space: nowrap;

  &.active ${StyledListItem} {
    color: var(--color-white);
    background: linear-gradient(
      135deg,
      var(--color-primary),
      var(--color-accent)
    );
    border-color: var(--color-primary);
    box-shadow: var(--shadow-md);
    transform: translateY(-1px);

    svg {
      color: var(--color-primary);
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.xl2}) {
      background: none;
      background-color: transparent;
      box-shadow: none;
      color: var(--color-primary);
      border-color: var(--color-primary);
      transform: none;
      border-radius: 50px;
      svg {
        color: var(--color-primary);
      }
    }
  }

  /* Contact item active styles now apply to all active menu items */
`;

export const DevWrapper = styled.div`
  color: var(--color-text-primary);
  font-weight: 800;
  font-size: 1.5rem;
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--radius-md);
  transition: all var(--transition-fast);
  cursor: pointer;
  background: linear-gradient(
    135deg,
    var(--color-primary),
    var(--color-accent)
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 200% 200%;
  animation: gradientShift 3s ease-in-out infinite;
  position: static;
  left: auto;
  top: auto;
  transform: none;
  z-index: 10;
  display: flex;
  flex-wrap: nowrap;

  @keyframes gradientShift {
    0%,
    100% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
  }

  &:hover {
    filter: brightness(1.1);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.lg}) {
    font-size: 1.2rem;
    padding: var(--spacing-sm) var(--spacing-md);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.sm}) {
    font-size: 1rem;
  }
`;

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  flex: 0 1 auto;
  gap: var(--spacing-sm);

  @media (max-width: ${({ theme }) => theme.breakpoint.lg}) {
    display: none;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    gap: var(--spacing-xs);
  }
`;

export const HamburgerButton = styled.button`
  display: none;
  background: none;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: var(--spacing-sm);
  width: 40px;
  height: 40px;
  cursor: pointer;
  color: var(--color-text-primary);
  font-size: 1.25rem;
  align-items: center;
  justify-content: center;
  transition: all var(--transition-fast);

  &:hover {
    border-color: var(--color-primary);
    color: var(--color-primary);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.lg}) {
    display: flex;
  }
`;

export const MobileMenuBackdrop = styled.div`
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  height: calc(100vh - 100%);
  background: rgba(0, 0, 0, 0.4);
  opacity: 0;
  visibility: hidden;
  transition: opacity var(--transition-normal), visibility var(--transition-normal);
  z-index: 1;

  &.open {
    opacity: 1;
    visibility: visible;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.lg}) {
    display: block;
  }
`;

export const MobileMenuPanel = styled.div`
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background: var(--color-surface);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--color-border);
  box-shadow: var(--shadow-lg);
  padding: var(--spacing-md) var(--spacing-lg);
  flex-direction: column;
  gap: var(--spacing-xs);
  transform: translateY(-10px);
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: opacity var(--transition-normal), transform var(--transition-normal), visibility var(--transition-normal);
  z-index: 2;

  &.open {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.lg}) {
    display: flex;
  }
`;

export const MobileNavItem = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  padding: var(--spacing-md) var(--spacing-lg);
  border-radius: var(--radius-md);
  cursor: pointer;
  color: var(--color-text-primary);
  font-weight: 600;
  font-size: 1rem;
  min-height: 48px;
  transition: all var(--transition-fast);
  white-space: nowrap;

  svg {
    font-size: 1.2rem;
    color: var(--color-primary);
    flex-shrink: 0;
    width: 20px;
  }

  &.active {
    background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
    color: var(--color-white);

    svg {
      color: var(--color-white);
    }
  }
`;
