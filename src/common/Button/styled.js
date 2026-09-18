import { Link } from "react-scroll";
import styled, { css } from "styled-components";

const baseStyles = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-sm);
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  border-radius: var(--radius-md);
  transition: all var(--transition-normal);
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

  &:active {
    transform: translateY(0);
  }
`;

const outlineStyles = css`
  color: var(--color-text-primary);
  background: transparent;
  border: 1px solid var(--color-border);

  &:hover {
    border-color: var(--color-primary);
    color: var(--color-primary);
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

export const Button = styled.a`
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
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.xl2}) {
    justify-content: center;
  }
`;

export const ScrollButton = styled(Link)`
  ${baseStyles}
  padding: 0.85rem 1.75rem;
  font-size: 1rem;
  ${primaryHoverTransparentStyles}

  @media (max-width: ${({ theme }) => theme.breakpoint.xl2}) {
    justify-content: center;
  }
`;
