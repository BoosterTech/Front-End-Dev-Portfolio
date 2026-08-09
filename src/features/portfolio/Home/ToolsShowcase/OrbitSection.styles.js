import { motion } from "framer-motion";
import styled, { keyframes } from "styled-components";

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-6px); }
`;

export const OrbitContainer = styled.div`
  position: relative;
  margin: 0 auto;
`;

export const LinesSvg = styled.svg`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
  overflow: visible;

  line {
    stroke-linecap: round;
  }
`;

export const CenterWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  transform: translate(-50%, -50%);
  z-index: 2;
  pointer-events: none;
`;

export const CenterNode = styled(motion.div)`
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: radial-gradient(
    circle at 35% 35%,
    rgba(255, 255, 255, 0.35) 0%,
    rgba(40, 142, 221, 0.35) 45%,
    rgba(10, 30, 55, 0.85) 100%
  );
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow:
    inset 0 0 30px rgba(255, 255, 255, 0.1),
    0 0 40px 8px rgba(40, 142, 221, 0.25);
  backdrop-filter: blur(12px);
  pointer-events: auto;

  img {
    width: ${({ $size }) => $size * 0.42}px;
    height: ${({ $size }) => $size * 0.42}px;
    object-fit: contain;
  }
`;

export const CenterLabel = styled.span`
  font-size: ${({ $size }) => Math.max(10, $size * 0.095)}px;
  font-weight: 800;
  color: var(--color-text-primary);
  letter-spacing: 0.02em;
`;

export const TechCardWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: ${({ $width }) => $width}px;
  height: ${({ $height }) => $height}px;
  z-index: 2;
  pointer-events: none;
`;

export const TechCard = styled(motion.div)`
  width: 100%;
  height: 100%;
  border-radius: 18px;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0.03) 100%
  );
  border: 1px solid rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(16px);
  box-shadow:
    0 12px 40px rgba(0, 0, 0, 0.25),
    0 0 0 1px rgba(40, 142, 221, 0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 14px;
  cursor: pointer;
  pointer-events: auto;
  transition:
    box-shadow 0.3s ease,
    border-color 0.3s ease;

  &:hover {
    border-color: rgba(40, 142, 221, 0.6);
    box-shadow:
      0 18px 50px rgba(0, 0, 0, 0.35),
      0 0 28px 4px rgba(40, 142, 221, 0.25);
  }

  img {
    width: ${({ $iconSize }) => $iconSize}px;
    height: ${({ $iconSize }) => $iconSize}px;
    object-fit: contain;
  }
`;

export const CardInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  animation: ${float} 4s ease-in-out infinite;
  animation-delay: ${({ $delay }) => $delay}s;
`;

export const TechName = styled.span`
  font-size: ${({ $fontSize }) => $fontSize}px;
  font-weight: 700;
  color: var(--color-text-primary);
  text-align: center;
  line-height: 1.2;
`;

export const MobileTrack = styled.div`
  display: none;
  gap: var(--spacing-md);
  overflow-x: auto;
  padding: var(--spacing-md) 0;
  scrollbar-width: thin;
  scrollbar-color: var(--color-primary) transparent;

  &::-webkit-scrollbar {
    height: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--color-primary);
    border-radius: 3px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    display: flex;
  }
`;

export const MobileCard = styled(motion.div)`
  flex: 0 0 auto;
  width: 110px;
  height: 100px;
  border-radius: 18px;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0.03) 100%
  );
  border: 1px solid rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(16px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;

  img {
    width: 32px;
    height: 32px;
    object-fit: contain;
  }
`;
