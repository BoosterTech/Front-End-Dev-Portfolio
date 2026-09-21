import { Button } from "common/Button";
import { m } from "framer-motion";
import styled, { css } from "styled-components";

export const Slide = styled(m.div)`
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
          box-shadow: 0 8px 24px rgba(var(--color-primary-rgb), 0.18);
        `
      : css`
          transform: perspective(1200px)
            ${
              $position === "left"
                ? "rotateY(-14deg)"
                : $position === "right"
                  ? "rotateY(14deg)"
                  : "scale(0.92)"
            }
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

export const Overlay = styled(m.div)`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: flex-end;
  background: linear-gradient(180deg, transparent 0%, var(--color-surface) 40%);

  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    padding: 0 var(--spacing-sm) var(--spacing-sm);
  }
`;

export const BottomBar = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
  width: 100%;
  padding: var(--spacing-xs) var(--spacing-sm) var(--spacing-xxs);
  background: transparent;
`;

export const BottomRow = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  min-width: 0;
`;

export const TechBadges = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-wrap: nowrap;
  overflow: hidden;
  min-width: 0;
  gap: var(--spacing-xs);
  -webkit-mask-image: linear-gradient(
    90deg,
    rgba(var(--color-black-rgb), 1) 88%,
    transparent
  );
  mask-image: linear-gradient(
    90deg,
    rgba(var(--color-black-rgb), 1) 88%,
    transparent
  );
`;

export const TechBadge = styled.span`
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
  white-space: nowrap;
  padding: var(--spacing-xxs) var(--spacing-sm);
  font-size: 0.7rem;
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

  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    display: none;
  }
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

export const ComingSoonBadge = styled.img`
  position: absolute;
  bottom: -34px;
  left: 50%;
  transform: translateX(-50%);
  width: 150px;
  z-index: 3;
  filter: drop-shadow(0 2px 6px rgb(var(--color-black-rgb) / 0.45));
`;
