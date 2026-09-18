import { Button } from "common/Button";
import { motion } from "framer-motion";
import styled, { css } from "styled-components";

export const Slide = styled(motion.div)`
  position: relative;
  flex: 0 0 var(--card-width);
  aspect-ratio: 16 / 10;
  border-radius: var(--radius-xl);
  overflow: hidden;
  border: 1px solid var(--color-border);
  box-shadow: var(--shadow-lg);
  cursor: pointer;
  background: var(--color-surface);
  transition:
    transform 0.45s ease,
    transform-origin 0.45s ease,
    opacity 0.45s ease,
    filter 0.45s ease,
    border-color 0.45s ease,
    box-shadow 0.45s ease;

  ${({ $isActive, $position }) =>
    $isActive
      ? css`
          z-index: 2;
          border-color: var(--color-primary);
          box-shadow: 0 0 28px rgba(var(--color-primary-rgb), 0.3);
        `
      : css`
          transform: perspective(1200px)
            ${$position === "left"
              ? "rotateY(-14deg)"
              : $position === "right"
              ? "rotateY(14deg)"
              : "scale(0.92)"}
            scale(0.88);
          transform-origin: ${
            $position === "left"
              ? "right center"
              : $position === "right"
              ? "left center"
              : "center"
          };
          opacity: 0.5;
          filter: brightness(0.72);
        `}

  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    aspect-ratio: 4 / 3;
  }
`;

export const SlideImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: top center;
  display: block;
  pointer-events: none;
`;

export const Overlay = styled(motion.div)`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  background: ${({ $comingSoon }) =>
    $comingSoon ? "#000000" : "var(--color-surface)"};

  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    padding: 0 var(--spacing-sm) var(--spacing-sm);
  }
`;

export const BottomBar = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  gap: var(--spacing-md);
  width: 100%;
  padding: var(--spacing-sm) var(--spacing-md);
  background: transparent;

  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    padding: var(--spacing-sm) var(--spacing-md);
  }
`;

export const TechBadges = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-xs);
`;

export const TechBadge = styled.span`
  display: inline-flex;
  align-items: center;
  padding: var(--spacing-xxs) var(--spacing-sm);
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--color-text-primary);
  background: rgba(var(--color-text-primary-rgb), 0.08);
  border: 1px solid rgba(var(--color-text-primary-rgb), 0.18);
  border-radius: var(--radius-md);
  backdrop-filter: blur(4px);
`;

export const CTAContainer = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
  margin-left: auto;
`;

export const CTAButton = styled(Button)`
  padding: var(--spacing-sm) var(--spacing-md);
  font-size: 0.85rem;
  transition: all 0.3s ease;

  ${({ $secondary }) =>
    $secondary
      ? css`
          color: var(--color-text-primary);
          background: transparent;
          border: 1px solid rgba(var(--color-text-primary-rgb), 0.35);

          &:hover {
            background: rgba(var(--color-text-primary-rgb), 0.1);
            border-color: var(--color-text-primary);
          }
        `
      : css`
          color: var(--color-white);
          background: var(--color-primary);
          border: 1px solid var(--color-primary);

          &:hover {
            color: var(--color-white);
            background: var(--color-primary-hover);
            border-color: var(--color-white);
          }
        `}

  svg {
    width: 14px;
    height: 14px;
  }
`;

export const ComingSoonBadge = styled.span`
  position: absolute;
  top: var(--spacing-md);
  right: var(--spacing-md);
  padding: var(--spacing-xs) var(--spacing-sm);
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--color-white);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  background: linear-gradient(
    135deg,
    var(--color-primary),
    var(--color-accent)
  );
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-md);
  z-index: 3;
`;

export const ExpandHint = styled.div`
  position: absolute;
  top: var(--spacing-md);
  left: var(--spacing-md);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(var(--color-surface-rgb), 0.9);
  border: 1px solid var(--color-border);
  color: var(--color-text-primary);
  backdrop-filter: blur(8px);
  opacity: 0;
  transition: opacity var(--transition-normal);
  pointer-events: none;

  ${Slide}:hover & {
    opacity: 1;
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;
