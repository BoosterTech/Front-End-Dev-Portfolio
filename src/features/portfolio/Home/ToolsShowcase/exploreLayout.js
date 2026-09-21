import { m } from "framer-motion";
import styled from "styled-components";

export const ExploreSection = styled(m.div)`
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
    padding: var(--spacing-lg);
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
  color: var(--color-primary);
`;

export const ExploreParagraph = styled.p`
  font-size: 0.95rem;
  color: var(--color-text-secondary);
  line-height: 1.5;
  margin: 0;
`;

export const ExploreTrack = styled(m.div)`
  display: flex;
  gap: var(--spacing-md);
  overflow-x: auto;
  scroll-snap-type: x proximity;
  padding: var(--spacing-sm) var(--spacing-lg);
  margin: 0 calc(-1 * var(--spacing-lg));
  scrollbar-width: none;
  -ms-overflow-style: none;
  -webkit-mask-image: linear-gradient(
    90deg,
    transparent,
    rgba(var(--color-black-rgb), 1) 8%,
    rgba(var(--color-black-rgb), 1) 92%,
    transparent
  );
  mask-image: linear-gradient(
    90deg,
    transparent,
    rgba(var(--color-black-rgb), 1) 8%,
    rgba(var(--color-black-rgb), 1) 92%,
    transparent
  );

  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: ${({ theme }) => theme.breakpoint.lg}) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
    overflow: visible;
    scroll-snap-type: none;
    margin: 0;
    padding: var(--spacing-sm) 0;
    -webkit-mask-image: none;
    mask-image: none;
  }
`;

export const ExploreChip = styled(m.div)`
  flex: 0 0 auto;
  scroll-snap-align: start;
  width: clamp(120px, 38vw, 150px);
  min-height: 84px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: var(--spacing-xs);
  padding: var(--spacing-md);
  background: rgba(var(--color-white-rgb), 0.04);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  color: var(--color-text-primary);
  transition:
    border-color var(--transition-normal),
    background var(--transition-normal);

  &:hover {
    border-color: var(--color-accent);
    background: rgba(var(--color-tooltip-rgb), 0.12);
  }

  @media (min-width: ${({ theme }) => theme.breakpoint.lg}) {
    width: 100%;
  }
`;

export const ExploreChipHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-sm);
  font-size: 0.78rem;
  font-weight: 700;
  color: var(--color-text-primary);

  svg {
    color: var(--color-accent);
    font-size: 1.4rem;
    flex-shrink: 0;
  }
`;

export const ExploreChipDescription = styled.span`
  font-size: 0.7rem;
  color: var(--color-text-secondary);
  line-height: 1.4;

  @media (max-width: ${({ theme }) => theme.breakpoint.lg}) {
    display: none;
  }
`;

export const MoreChip = styled(m.div)`
  flex: 0 0 auto;
  scroll-snap-align: start;
  width: clamp(120px, 38vw, 150px);
  min-height: 84px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
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
  justify-content: center;
  gap: var(--spacing-sm);
  font-size: 0.78rem;
  font-weight: 700;

  svg {
    color: var(--color-primary);
    font-size: 1.4rem;
    flex-shrink: 0;
  }
`;

export const MoreChipDescription = styled.span`
  font-size: 0.7rem;
  color: var(--color-text-secondary);
  line-height: 1.4;

  @media (max-width: ${({ theme }) => theme.breakpoint.lg}) {
    display: none;
  }
`;
