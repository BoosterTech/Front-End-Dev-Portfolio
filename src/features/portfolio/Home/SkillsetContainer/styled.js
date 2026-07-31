import styled from "styled-components";

export const Tooltip = styled.div`
  position: absolute;
  left: 50%;
  top: calc(100% + 2px);
  transform: translateX(-50%);
  background: rgba(40, 142, 221, 0.95);
  color: #fff;
  padding: 8px 16px;
  border-radius: 16px;
  font-size: 0.95em;
  white-space: pre-line;
  box-shadow: 0 4px 16px rgba(40, 142, 221, 0.18);
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.2s;
  z-index: 100;
`;

export const SkillsetWrapper = styled.div`
  margin-top: 20px;
  width: auto;

  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    margin-top: 40px;
  }
`;

export const SkillsetHeader = styled.div`
  margin: 0 auto;
  text-align: center;
  margin-top: 10px;
  font-weight: 1000;
  font-size: 1.6rem;

  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    font-size: 1.1rem;
  }
`;

export const ListContainer = styled.ul`
  list-style: none;
  border-top: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: 1fr 1fr 1fr;
  gap: var(--spacing-sm) var(--spacing-xs);
  padding: var(--spacing-lg);

  @media (max-width: ${({ theme }) => theme.breakpoint.xl}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    grid-template-columns: 1fr;
    font-size: 1rem;
  }
`;

export const ListItem = styled.li`
  &:before {
    content: "●";
    color: var(--color-primary);
    padding-right: var(--spacing-sm);
  }
`;
