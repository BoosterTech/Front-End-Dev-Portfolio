import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  margin-right: auto;
`;

export const IconsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  padding: 1px;
  border-radius: 16px;
`;

export const Icon = styled.img`
  height: 28px;
  margin: var(--spacing-xs) var(--spacing-sm);
  border: 1px solid var(--color-border);
  border-radius: 50%;
  padding: 1px;
  transition: all var(--transition-normal);

  &:hover {
    cursor: pointer;
    transform: scale(1.6);
  }

  ${(props) =>
    props.$isActive &&
    css`
      border: 1px solid var(--color-primary);
      transform: scale(1.6);
    `}

  @media (max-width: ${({ theme }) => theme.breakpoint.sm}) {
    width: 20px;
    height: 20px;
  }
`;
