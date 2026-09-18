import { motion } from "framer-motion";
import styled from "styled-components";

export const ExploreSection = styled(motion.div)`
  margin-top: var(--spacing-3xl);
  width: 100%;
  max-width: var(--container-max-width);
  margin-left: auto;
  margin-right: auto;
  background: transparent;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  padding: var(--spacing-xl);
  display: grid;
  grid-template-columns: minmax(200px, 260px) 1fr;
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
  scroll-snap-type: x proximity;
  padding: var(--spacing-sm) 0;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: ${({ theme }) => theme.breakpoint.lg}) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
    overflow: visible;
    scroll-snap-type: none;
  }
`;

export const ExploreChip = styled(motion.div)`
  flex: 0 0 auto;
  scroll-snap-align: start;
  width: clamp(140px, 45vw, 170px);
  display: flex;
  flex-direction: column;

  @media (min-width: ${({ theme }) => theme.breakpoint.lg}) {
    width: 100%;
  }
  gap: var(--spacing-xs);
  padding: var(--spacing-md);
  background: rgba(var(--color-white-rgb), 0.04);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  color: var(--color-text-primary);
  cursor: pointer;
  transition:
    border-color var(--transition-normal),
    background var(--transition-normal);

  &:hover {
    border-color: var(--color-accent);
    background: rgba(var(--color-tooltip-rgb), 0.12);
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
  scroll-snap-align: start;
  width: clamp(140px, 45vw, 170px);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
  padding: var(--spacing-md);
  background: linear-gradient(
    135deg,
    rgba(var(--color-tooltip-rgb), 0.2),
    rgba(var(--color-tooltip-rgb), 0.05)
  );
  border: 1px solid var(--color-primary);
  border-radius: var(--radius-lg);
  color: var(--color-text-primary);

  @media (min-width: ${({ theme }) => theme.breakpoint.lg}) {
    width: 100%;
  }
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
