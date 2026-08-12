import styled, { css } from "styled-components";

const Card = styled.div`
  border-radius: var(--radius-lg);
  padding: var(--spacing-md);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);

  ${({ $glass }) =>
    $glass &&
    css`
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid var(--color-border);
      backdrop-filter: blur(8px);
    `}

  ${({ $bordered }) =>
    $bordered &&
    css`
      border: 1px solid var(--color-border);
    `}

  ${({ $hoverable }) =>
    $hoverable &&
    css`
      transition:
        border-color var(--transition-normal),
        background var(--transition-normal);

      &:hover {
        background: rgba(255, 255, 255, 0.06);
        border-color: var(--color-primary);
      }
    `}
`;

export default Card;
