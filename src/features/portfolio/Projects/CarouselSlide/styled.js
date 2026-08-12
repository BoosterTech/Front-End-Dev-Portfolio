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
    opacity 0.45s ease,
    border-color 0.45s ease,
    box-shadow 0.45s ease;

  ${({ $isActive }) =>
    $isActive
      ? css`
          z-index: 2;
          border-color: var(--color-primary);
          box-shadow: 0 0 28px rgba(37, 99, 235, 0.3);
        `
      : css`
          transform: scale(0.92);
          opacity: 0.55;
          filter: brightness(0.72);

          &:hover {
            opacity: 0.8;
            transform: scale(0.94);
          }
        `}

  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    aspect-ratio: 4 / 3;
  }
`;

export const SlideImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  pointer-events: none;
`;

export const Overlay = styled(motion.div)`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: var(--spacing-xl) var(--spacing-lg) var(--spacing-lg);
  background: linear-gradient(
    to top,
    rgba(10, 15, 28, 0.96) 0%,
    rgba(10, 15, 28, 0.75) 45%,
    transparent 100%
  );

  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    padding: var(--spacing-lg) var(--spacing-md) var(--spacing-md);
  }
`;

export const ProjectTitle = styled.h3`
  font-size: clamp(1.25rem, 2.2vw, 1.75rem);
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 var(--spacing-xs) 0;
  line-height: 1.2;
`;

export const ProjectSummary = styled.p`
  font-size: clamp(0.85rem, 1.2vw, 1rem);
  color: rgba(255, 255, 255, 0.85);
  margin: 0 0 var(--spacing-sm) 0;
  line-height: 1.5;
`;

export const TechBadges = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-xs);
  margin-bottom: var(--spacing-sm);
`;

export const TechBadge = styled.span`
  display: inline-flex;
  align-items: center;
  padding: var(--spacing-xxs) var(--spacing-sm);
  font-size: 0.75rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.95);
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: var(--radius-md);
  backdrop-filter: blur(4px);
`;

export const CTAContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
  margin-top: var(--spacing-xs);
`;

export const CTAButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-xs);
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--radius-md);
  font-size: 0.85rem;
  font-weight: 600;
  text-decoration: none;
  transition: all var(--transition-fast);

  ${({ $secondary }) =>
    $secondary
      ? css`
          color: #ffffff;
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.35);

          &:hover {
            background: rgba(255, 255, 255, 0.1);
            border-color: #ffffff;
          }
        `
      : css`
          color: #ffffff;
          background: var(--color-primary);
          border: 1px solid var(--color-primary);

          &:hover {
            background: var(--color-primary-hover);
            border-color: var(--color-primary-hover);
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
  color: #ffffff;
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
