import styled from "styled-components";

export const ThemeButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  border-radius: var(--radius-md);
  padding: var(--spacing-sm);
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  cursor: pointer;
  color: var(--color-text-primary);
  transition: color var(--transition-fast);

  &:hover {
    color: var(--color-primary);
  }
`;
