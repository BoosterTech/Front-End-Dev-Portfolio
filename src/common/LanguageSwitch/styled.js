import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  position: relative;
`;

export const GlobeButton = styled.button`
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  background: none;
  border: none;
  border-radius: var(--radius-md);
  padding: var(--spacing-xs) var(--spacing-sm);
  cursor: pointer;
  color: var(--color-text-primary);
  font-size: 0.85rem;
  font-weight: 600;
  transition: all var(--transition-fast);

  &:hover {
    color: var(--color-primary);
  }

  svg {
    font-size: 1.1rem;
    flex-shrink: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.lg}) {
    padding: var(--spacing-xs);
    font-size: 0;

    svg {
      font-size: 1.25rem;
    }
  }
`;

export const Dropdown = styled.div`
  position: absolute;
  top: calc(100% + var(--spacing-xs));
  left: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-lg);
  padding: var(--spacing-xs);
  min-width: 140px;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-4px);
  transition:
    opacity var(--transition-fast),
    transform var(--transition-fast),
    visibility var(--transition-fast);
  z-index: 1001;

  &.open {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
`;

export const DropdownItem = styled.button`
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  background: none;
  border: none;
  border-radius: var(--radius-sm);
  padding: var(--spacing-xs) var(--spacing-sm);
  cursor: pointer;
  color: var(--color-text-primary);
  font-size: 0.85rem;
  font-weight: 500;
  text-align: left;
  transition: all var(--transition-fast);

  &:hover {
    background: rgba(var(--color-primary-rgb, 99, 102, 241), 0.1);
    color: var(--color-primary);
  }

  ${(props) =>
    props.$isActive &&
    css`
      background: rgba(var(--color-primary-rgb, 99, 102, 241), 0.1);
      color: var(--color-primary);
      font-weight: 600;
    `}

  img {
    width: 22px;
    height: 22px;
    border-radius: 50%;
    border: 1px solid var(--color-border);
    flex-shrink: 0;
  }
`;
