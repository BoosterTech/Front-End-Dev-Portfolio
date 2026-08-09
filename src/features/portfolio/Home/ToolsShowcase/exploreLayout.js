import { motion } from "framer-motion";
import styled from "styled-components";

export const ExploreSection = styled(motion.div)`
  margin-top: var(--spacing-3xl);
  width: 100%;
  max-width: 1500px;
  margin-left: auto;
  margin-right: auto;
  background: transparent;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  padding: var(--spacing-xl);
  display: grid;
  grid-template-columns: 260px 1fr;
  gap: var(--spacing-2xl);
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.lg}) {
    grid-template-columns: 1fr;
  }
`;

export const ExploreHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
`;

export const ExploreLabel = styled.span`
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--color-accent);
`;

export const ExploreParagraph = styled.p`
  font-size: 0.95rem;
  color: var(--color-text-secondary);
  line-height: 1.5;
  margin: 0;
`;

export const ExploreTrack = styled(motion.div)`
  display: flex;
  gap: var(--spacing-md);
  overflow-x: auto;
  padding: var(--spacing-sm) 0;
  scrollbar-width: thin;
  scrollbar-color: var(--color-accent) transparent;

  &::-webkit-scrollbar {
    height: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--color-accent);
    border-radius: 3px;
  }
`;

export const ExploreChip = styled(motion.div)`
  flex: 0 0 auto;
  width: 170px;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
  padding: var(--spacing-md);
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  color: var(--color-text-primary);
  cursor: pointer;
  transition:
    border-color var(--transition-normal),
    background var(--transition-normal);

  &:hover {
    border-color: var(--color-accent);
    background: rgba(40, 142, 221, 0.12);
  }
`;

export const ExploreChipHeader = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--color-text-primary);

  svg {
    color: var(--color-accent);
    font-size: 1.1rem;
  }
`;

export const ExploreChipDescription = styled.span`
  font-size: 0.7rem;
  color: var(--color-text-secondary);
  line-height: 1.4;
`;

export const MoreChip = styled(motion.div)`
  flex: 0 0 auto;
  position: relative;
  width: 170px;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
  padding: var(--spacing-md);
  background: linear-gradient(
    135deg,
    rgba(40, 142, 221, 0.2),
    rgba(40, 142, 221, 0.05)
  );
  border: 1px solid var(--color-primary);
  border-radius: var(--radius-lg);
  color: var(--color-text-primary);
  cursor: pointer;
`;

export const MoreChipHeader = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  font-size: 0.85rem;
  font-weight: 700;

  svg {
    color: var(--color-primary);
    font-size: 1.1rem;
  }
`;

export const MoreChipDescription = styled.span`
  font-size: 0.7rem;
  color: var(--color-text-secondary);
  line-height: 1.4;
`;

export const MoreTooltip = styled.div`
  position: absolute;
  bottom: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%);
  width: 220px;
  padding: var(--spacing-md);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
  opacity: 0;
  visibility: hidden;
  transition:
    opacity 0.2s,
    visibility 0.2s;
  z-index: 100;

  ${MoreChip}:hover & {
    opacity: 1;
    visibility: visible;
  }
`;

export const MoreList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
`;

export const MoreItem = styled.li`
  font-size: 0.8rem;
  color: var(--color-text-secondary);
  padding: var(--spacing-xs) 0;
  border-bottom: 1px solid var(--color-border);

  &:last-child {
    border-bottom: none;
  }
`;
