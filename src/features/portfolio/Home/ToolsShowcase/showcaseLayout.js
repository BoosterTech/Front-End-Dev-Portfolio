import Card from "common/Card";
import { motion } from "framer-motion";
import styled from "styled-components";

export const ToolsShowcaseWrapper = styled(motion.section)`
  width: 100%;
  padding: var(--spacing-3xl) var(--spacing-xl);
  background: transparent;
  overflow: hidden;
  position: relative;
`;

export const ShowcaseGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.6fr;
  gap: var(--spacing-3xl);
  align-items: center;
  max-width: var(--container-max-width);
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoint.xl2}) {
    grid-template-columns: 1fr;
    gap: var(--spacing-2xl);
  }
`;

export const ShowcaseContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
`;

export const SectionLabel = styled.span`
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-sm);
  padding: 0.45rem 1rem;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--color-primary);
  border: 1px solid var(--color-border);
  border-radius: 50px;
  align-self: flex-start;
`;

export const SectionTitle = styled.h2`
  font-size: clamp(2rem, 4vw, 3.2rem);
  font-weight: 800;
  line-height: 1.1;
  color: var(--color-text-primary);
  margin: 0;
`;

export const GradientWord = styled.span`
  background: linear-gradient(
    135deg,
    var(--color-primary) 0%,
    var(--color-accent) 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const SectionDescription = styled.p`
  font-size: clamp(1rem, 1.4vw, 1.2rem);
  color: var(--color-text-secondary);
  line-height: 1.6;
  max-width: 500px;
  margin: 0;
`;

export const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-md);
  margin-top: var(--spacing-lg);

  @media (max-width: ${({ theme }) => theme.breakpoint.sm}) {
    grid-template-columns: 1fr;
  }
`;

export const FeatureCard = styled(Card).attrs({
  $glass: true,
  $hoverable: true,
  as: motion.div,
})`
  align-items: center;
`;

export const FeatureIcon = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-primary);
  font-size: 1.5rem;
  flex-shrink: 0;

  svg {
    width: 24px;
    height: 24px;
  }
`;

export const FeatureText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const FeatureTitle = styled.span`
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--color-text-primary);
`;

export const FeatureSubtitle = styled.span`
  font-size: 0.75rem;
  color: var(--color-text-secondary);
`;

export const OrbitSectionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 500px;

  @media (max-width: ${({ theme }) => theme.breakpoint.xl2}) {
    min-height: auto;
  }
`;
