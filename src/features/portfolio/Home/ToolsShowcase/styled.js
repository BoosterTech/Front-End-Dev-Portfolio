import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

const linePulse = keyframes`
  0%, 100% { stroke-opacity: 0.35; }
  50% { stroke-opacity: 0.85; }
`;

const twinkle = keyframes`
  0%, 100% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.4); }
`;

export const StarField = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;

  span {
    position: absolute;
    width: 2px;
    height: 2px;
    background: rgba(255, 255, 255, 0.7);
    border-radius: 50%;
    animation: ${twinkle} 3s ease-in-out infinite;
    box-shadow: 0 0 6px 1px rgba(255, 255, 255, 0.3);
  }
`;

export const GlowRing = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 180px;
  height: 180px;
  border-radius: 50%;
  border: 1px solid rgba(40, 142, 221, 0.35);
  box-shadow: 0 0 40px 8px rgba(40, 142, 221, 0.2),
    inset 0 0 40px 8px rgba(40, 142, 221, 0.15);
  pointer-events: none;
  z-index: 1;
`;

export const ToolsShowcaseWrapper = styled(motion.section)`
  width: 100%;
  padding: var(--spacing-3xl) var(--spacing-xl);
  background: transparent;
  border-top: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
  overflow: hidden;
  position: relative;
`;

export const ShowcaseGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.6fr;
  gap: var(--spacing-3xl);
  align-items: center;
  max-width: 1500px;
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
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--color-primary);
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

export const FeatureCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-md);
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  backdrop-filter: blur(8px);
  transition: border-color var(--transition-normal),
    background var(--transition-normal);

  &:hover {
    background: rgba(255, 255, 255, 0.06);
    border-color: var(--color-primary);
  }
`;

export const FeatureIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    135deg,
    rgba(40, 142, 221, 0.2),
    rgba(40, 142, 221, 0.05)
  );
  color: var(--color-primary);
  font-size: 1.2rem;
  flex-shrink: 0;
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

export const DesktopOrbit = styled(motion.div)`
  position: relative;
  width: 660px;
  height: 660px;
  display: none;

  @media (min-width: ${({ theme }) => theme.breakpoint.xl2}) {
    display: block;
  }
`;

export const OrbitCenter = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 180px;
  height: 180px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(40, 142, 221, 0.35) 0%,
    rgba(20, 60, 100, 0.6) 60%,
    transparent 100%
  );
  border: 2px solid rgba(40, 142, 221, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-sm);
  z-index: 3;
`;

export const CenterIcons = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);

  img {
    width: 42px;
    height: 42px;
    object-fit: contain;
  }
`;

export const CenterLabel = styled.span`
  font-size: 0.85rem;
  font-weight: 800;
  color: var(--color-text-primary);
  text-align: center;
`;

export const OrbitSvg = styled.svg`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;

  line {
    stroke: var(--color-primary);
    stroke-width: 1.5;
    stroke-linecap: round;
    filter: drop-shadow(0 0 4px var(--color-primary));
    animation: ${linePulse} 3s ease-in-out infinite;
  }
`;

export const ToolCard = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 145px;
  height: 88px;
  transform: translate(
    calc(-50% + var(--x, 0px)),
    calc(-50% + var(--y, 0px))
  );
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-xl);
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-sm) var(--spacing-md);
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25),
    0 0 0 1px rgba(40, 142, 221, 0.1);
  z-index: 2;
  cursor: pointer;

  &:hover {
    border-color: var(--color-primary);
    background: rgba(40, 142, 221, 0.15);
    box-shadow: 0 8px 28px rgba(0, 0, 0, 0.3),
      0 0 24px 4px rgba(40, 142, 221, 0.25);
  }

  img {
    width: 36px;
    height: 36px;
    object-fit: contain;
    flex-shrink: 0;
  }
`;

export const ToolInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
`;

export const ToolName = styled.span`
  font-size: 0.78rem;
  font-weight: 700;
  color: var(--color-text-primary);
  line-height: 1.2;
`;

export const ToolDescription = styled.span`
  font-size: 0.62rem;
  color: var(--color-text-secondary);
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const MobileOrbit = styled(motion.div)`
  display: flex;
  gap: var(--spacing-md);
  overflow-x: auto;
  padding: var(--spacing-md) 0;
  width: 100%;
  scrollbar-width: thin;
  scrollbar-color: var(--color-primary) transparent;

  &::-webkit-scrollbar {
    height: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--color-primary);
    border-radius: 3px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoint.xl2}) {
    display: none;
  }
`;

export const MobileToolCard = styled(motion.div)`
  flex: 0 0 auto;
  width: 100px;
  height: 120px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-sm);

  img {
    width: 40px;
    height: 40px;
    object-fit: contain;
  }
`;

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
  transition: border-color var(--transition-normal),
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
  transition: opacity 0.2s, visibility 0.2s;
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
