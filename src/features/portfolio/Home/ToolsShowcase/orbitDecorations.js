import { motion } from "framer-motion";
import styled, { keyframes } from "styled-components";

const linePulse = keyframes`
  0%, 100% { stroke-opacity: 0.35; }
  50% { stroke-opacity: 0.85; }
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
  transform: translate(calc(-50% + var(--x, 0px)), calc(-50% + var(--y, 0px)));
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-xl);
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-sm) var(--spacing-md);
  backdrop-filter: blur(10px);
  box-shadow:
    0 8px 24px rgba(0, 0, 0, 0.25),
    0 0 0 1px rgba(40, 142, 221, 0.1);
  z-index: 2;
  cursor: pointer;

  &:hover {
    border-color: var(--color-primary);
    background: rgba(40, 142, 221, 0.15);
    box-shadow:
      0 8px 28px rgba(0, 0, 0, 0.3),
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
