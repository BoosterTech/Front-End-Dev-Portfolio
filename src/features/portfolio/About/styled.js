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
  padding: 0.45rem 1rem;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--color-primary);
  border: 1px solid var(--color-border);
  border-radius: 50px;
  align-self: flex-start;

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

export const PlainHeadingPart = styled.span`
  color: var(--color-text-primary);
  -webkit-text-fill-color: var(--color-text-primary);
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
  background: var(--color-terminal-bg);
  border: 1px solid rgba(var(--color-white-rgb), 0.1);
  border-radius: var(--radius-xl);
  box-shadow: 0 24px 60px rgba(var(--color-black-rgb), 0.5);
  overflow: hidden;
`;

export const TerminalImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
  transition: opacity 0.4s ease;

  html[data-theme="dark"] & {
    opacity: 0;
  }
`;

export const CodeTerminalHeader = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  padding: 14px 18px;
  background: rgba(var(--color-white-rgb), 0.03);
  border-bottom: 1px solid rgba(var(--color-white-rgb), 0.08);
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
    background: var(--color-code-red);
  }

  &:nth-child(2) {
    background: var(--color-code-yellow);
  }

  &:nth-child(3) {
    background: var(--color-code-green);
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
  font-size: clamp(0.7rem, 2vw, 0.8rem);
  line-height: 1.7;
  color: var(--color-code-text);
  overflow: auto;
  tab-size: 2;

  .comment {
    color: var(--color-code-comment);
  }

  .keyword {
    color: var(--color-code-keyword);
  }

  .type {
    color: var(--color-code-type);
  }

  .string {
    color: var(--color-code-string);
  }

  .property {
    color: var(--color-code-property);
  }

  .boolean {
    color: var(--color-code-boolean);
  }

  .variable {
    color: var(--color-code-variable);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.sm}) {
    padding: 18px;
  }
`;
