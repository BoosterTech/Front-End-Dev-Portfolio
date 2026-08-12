import Card from "common/Card";
import styled from "styled-components";

export const Wrapper = styled.article`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-3xl);
  align-items: center;
  padding: var(--spacing-3xl) 0;
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoint.xl2}) {
    grid-template-columns: 1fr;
    gap: var(--spacing-2xl);
    padding: var(--spacing-2xl) 0;
  }
`;

export const TerminalColumn = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoint.xl2}) {
    order: 1;
  }
`;

export const ContentColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
`;

export const JourneyLabel = styled.div`
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-sm);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--color-primary);

  svg {
    color: var(--color-accent);
  }
`;

export const JourneyUnderline = styled.div`
  width: 60px;
  height: 4px;
  border-radius: 2px;
  background: var(--color-primary);
  margin-top: -8px;
`;

export const JourneyParagraph = styled.div`
  font-size: 1rem;
  line-height: 1.8;
  color: var(--color-text-secondary);
  max-width: 560px;

  p {
    margin: 0 0 var(--spacing-md) 0;
  }

  p:last-child {
    margin-bottom: 0;
  }
`;

export const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-md);

  @media (max-width: ${({ theme }) => theme.breakpoint.sm}) {
    grid-template-columns: 1fr;
  }
`;

export const FeatureCard = styled(Card).attrs({
  $glass: true,
  $hoverable: true,
})`
  svg {
    width: 24px;
    height: 24px;
    color: var(--color-primary);
  }
`;

export const FeatureTitle = styled.h3`
  font-size: 1rem;
  font-weight: 700;
  color: var(--color-text-primary);
  margin: 0;
`;

export const FeatureDescription = styled.p`
  font-size: 0.85rem;
  line-height: 1.5;
  color: var(--color-text-secondary);
  margin: 0;
`;

export const CodeTerminalWindow = styled.div`
  position: relative;
  background: #0b1220;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-xl);
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.5);
  overflow: hidden;
`;

export const CodeTerminalHeader = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  padding: 14px 18px;
  background: rgba(255, 255, 255, 0.03);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
`;

export const CodeDots = styled.div`
  display: flex;
  gap: 8px;
`;

export const CodeDot = styled.span`
  width: 12px;
  height: 12px;
  border-radius: 50%;

  &:nth-child(1) {
    background: #ff5f56;
  }

  &:nth-child(2) {
    background: #ffbd2e;
  }

  &:nth-child(3) {
    background: #27c93f;
  }
`;

export const CodeTerminalTitle = styled.span`
  font-family: "Fira Code", "Courier New", monospace;
  font-size: 0.85rem;
  color: var(--color-text-secondary);

  span {
    color: var(--color-primary);
    margin-right: 6px;
  }
`;

export const CodeTerminalBody = styled.pre`
  margin: 0;
  padding: 24px;
  font-family: "Fira Code", "Courier New", monospace;
  font-size: 0.8rem;
  line-height: 1.7;
  color: #abb2bf;
  overflow: auto;
  tab-size: 2;

  .comment {
    color: #5c6370;
  }

  .keyword {
    color: #c678dd;
  }

  .type {
    color: #e5c07b;
  }

  .string {
    color: #98c379;
  }

  .property {
    color: #e06c75;
  }

  .boolean {
    color: #56b6c2;
  }

  .variable {
    color: #61afef;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.sm}) {
    font-size: 0.7rem;
    padding: 18px;
  }
`;
