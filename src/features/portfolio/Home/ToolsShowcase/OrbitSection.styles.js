import { m } from "framer-motion";
import styled, { css, keyframes } from "styled-components";

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
`;

const marqueeScroll = keyframes`
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
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

export const CenterNode = styled(m.div)`
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
    rgba(var(--color-white-rgb), 0.35) 0%,
    rgba(var(--color-tooltip-rgb), 0.35) 45%,
    rgba(var(--color-panel-rgb), 0.85) 100%
  );
  border: 1px solid rgba(var(--color-white-rgb), 0.18);
  box-shadow:
    inset 0 0 30px rgba(var(--color-white-rgb), 0.1),
    0 0 40px 8px rgba(var(--color-tooltip-rgb), 0.25);
  backdrop-filter: blur(12px);
  pointer-events: auto;

  img {
    width: ${({ $size }) => $size * 0.42}px;
    height: ${({ $size }) => $size * 0.42}px;
    object-fit: contain;
  }
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

export const TechCardFloat = styled.div`
  width: 100%;
  height: 100%;
  will-change: transform;
  animation: ${float} 4s ease-in-out infinite;
  animation-delay: ${({ $delay }) => $delay}s;
`;

export const TechCard = styled(m.div)`
  width: 100%;
  height: 100%;
  border-radius: 18px;
  background: transparent;
  border: none;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  pointer-events: auto;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  ${({ $isCircleCard, $isPadded, $hasLabel }) =>
    ($isCircleCard || $hasLabel) &&
    css`
      border-radius: 50%;
      background: var(--color-white);
      border: 1px solid var(--color-accent);
      box-shadow:
        0 0 0 1px rgba(var(--color-cyan-rgb), 0.25),
        0 6px 18px var(--color-shadow);
      padding: ${$isPadded ? "10px" : "0"};

      ${
        $hasLabel &&
        css`
          flex-direction: row;
          gap: 4px;
          white-space: nowrap;

          img {
            width: auto;
            height: 28%;
            flex-shrink: 0;
          }
        `
      }
    `}
`;

export const TechName = styled.span`
  font-size: ${({ $fontSize }) => $fontSize}px;
  font-weight: 700;
  color: ${({ $onLight }) =>
    $onLight ? "var(--color-black)" : "var(--color-text-primary)"};
  text-align: center;
  line-height: 1.2;
`;

export const MarqueeTrack = styled.div`
  display: none;
  overflow: hidden;
  width: 100%;
  min-width: 0;
  padding: var(--spacing-md) 0;
  -webkit-mask-image: linear-gradient(
    90deg,
    transparent,
    rgba(var(--color-black-rgb), 1) 12%,
    rgba(var(--color-black-rgb), 1) 88%,
    transparent
  );
  mask-image: linear-gradient(
    90deg,
    transparent,
    rgba(var(--color-black-rgb), 1) 12%,
    rgba(var(--color-black-rgb), 1) 88%,
    transparent
  );

  @media (max-width: ${({ theme }) => theme.breakpoint.lg}) {
    display: block;
  }

  @media (prefers-reduced-motion: reduce) {
    overflow-x: auto;
    -webkit-mask-image: none;
    mask-image: none;
  }
`;

export const MarqueeContent = styled.div`
  display: flex;
  gap: var(--spacing-md);
  width: max-content;
  animation: ${marqueeScroll} 28s linear infinite;

  &:hover {
    animation-play-state: paused;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

export const MarqueeCard = styled(m.div)`
  flex: 0 0 auto;
  width: 76px;
  height: 76px;
  border-radius: 18px;
  background: transparent;
  border: none;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;

  img {
    flex: 1;
    min-height: 0;
    width: 100%;
    object-fit: contain;
  }

  ${({ $isCircleCard, $isPadded, $hasLabel }) =>
    ($isCircleCard || $hasLabel) &&
    css`
      border-radius: 50%;
      background: var(--color-white);
      border: 1px solid var(--color-accent);
      box-shadow:
        0 0 0 1px rgba(var(--color-cyan-rgb), 0.25),
        0 6px 18px var(--color-shadow);
      padding: ${$isPadded ? "8px" : "0"};

      ${
        $hasLabel &&
        css`
          flex-direction: row;
          gap: 4px;
          white-space: nowrap;

          img {
            flex: none;
            width: auto;
            height: 28%;
          }
        `
      }
    `}
`;
