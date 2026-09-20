import { Link } from "react-scroll";
import styled, { css } from "styled-components";

const baseStyles = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-sm);
  min-height: 44px;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  border-radius: var(--radius-md);
  transition: color var(--transition-normal), background var(--transition-normal), border-color var(--transition-normal), box-shadow var(--transition-normal), transform var(--transition-normal);

  &:active {
    transform: scale(0.97);
  }

  &:focus-visible {
    outline: 2px solid var(--color-primary);
    outline-offset: 2px;
  }
`;

const primaryStyles = css`
  color: var(--color-white);
  background: linear-gradient(
    135deg,
    var(--color-primary),
    var(--color-accent)
  );
  border: 1px solid transparent;
  box-shadow: var(--shadow-sm);

  &:hover {
    box-shadow: var(--shadow-lg);
    color: var(--color-white);
    border-color: var(--color-white);
  }
`;

const outlineStyles = css`
  color: var(--color-text-primary);
  background: transparent;
  border: 1px solid var(--color-border);

  &:hover {
    border-color: var(--color-primary);
    color: var(--color-primary);
    background: rgba(var(--color-primary-rgb, var(--color-primary)), 0.08);
  }
`;

const primaryHoverTransparentStyles = css`
  color: var(--color-white);
  background: linear-gradient(
    135deg,
    var(--color-primary),
    var(--color-accent)
  );
  border: 1px solid var(--color-border);
  box-shadow: var(--shadow-md);

  &:hover {
    color: var(--color-primary);
    border-color: var(--color-primary);
    background: transparent;
    box-shadow: none;
  }
`;

const buttonStyles = css`
  ${baseStyles}
  padding: var(--spacing-sm) var(--spacing-lg);
  font-size: 0.95rem;

  ${({ $variant }) =>
    $variant === "primary"
      ? primaryStyles
      : $variant === "outline"
      ? outlineStyles
      : primaryHoverTransparentStyles}

  ${({ $size }) =>
    $size === "sm" &&
    css`
      min-height: 36px;
      padding: var(--spacing-xs) var(--spacing-md);
      font-size: 0.85rem;

      svg {
        width: 14px;
        height: 14px;
      }
    `}

  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    font-size: 0.9rem;
    padding: var(--spacing-xs) var(--spacing-md);
    justify-content: center;
    width: 100%;
  }
`;

export const Button = styled.a`
  ${buttonStyles}
`;

export const ScrollButton = styled(Link)`
  ${buttonStyles}
`;
