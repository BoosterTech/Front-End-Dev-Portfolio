import styled from "styled-components";

export const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
`;

export const ToggleWrapper = styled.div`
  position: relative;
  width: 52px;
  height: 28px;
  background: ${(props) => (props.$isDark ? "var(--color-primary)" : "var(--color-secondary)")};
  border-radius: 14px;
  cursor: pointer;
  transition: background var(--transition-normal);
  border: 2px solid var(--color-border);

  &:hover {
    box-shadow: var(--shadow-md);
  }
`;

export const ToggleSlider = styled.div`
  position: absolute;
  top: 2px;
  left: 2px;
  width: 20px;
  height: 20px;
  background: var(--color-white);
  border-radius: 50%;
  transition: transform var(--transition-normal);
  transform: ${(props) => (props.$isDark ? "translateX(24px)" : "translateX(0)")};
  box-shadow: var(--shadow-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
`;

export const ToggleIcon = styled.span`
  font-size: 12px;
  transition: opacity var(--transition-fast);
`;

export const ToggleLabel = styled.span`
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--color-text-secondary);
  user-select: none;

  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    display: none;
  }
`;
