import { fadeIn } from "common/animations";
import styled from "styled-components";

export const Wrapper = styled.footer`
  position: relative;
  overflow: hidden;
  background: linear-gradient(
    135deg,
    var(--color-footer-bg-start) 0%,
    var(--color-footer-bg-end) 100%
  );
  animation: ${fadeIn} 0.8s ease-out;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(
      90deg,
      transparent,
      var(--color-cyan),
      var(--color-cyan-light),
      var(--color-cyan),
      transparent
    );
    box-shadow: 0 0 20px rgba(var(--color-cyan-rgb), 0.6);
    z-index: 2;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

export const Container = styled.div`
  max-width: var(--container-max-width);
  margin: 0 auto;
  padding: var(--spacing-2xl) var(--spacing-xl);
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas:
    "brand"
    "copyright";
  gap: var(--spacing-sm) var(--spacing-lg);
  align-items: center;
  position: relative;
  z-index: 1;

  @media (max-width: ${({ theme }) => theme.breakpoint.sm}) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "brand"
      "copyright";
    text-align: center;
    gap: var(--spacing-lg);
  }
`;

export const BrandColumn = styled.div`
  grid-area: brand;
  text-align: left;

  @media (max-width: ${({ theme }) => theme.breakpoint.sm}) {
    text-align: center;
  }
`;

export const Brand = styled.h2`
  font-size: 1.75rem;
  font-weight: 800;
  color: var(--color-off-white);
  margin: 0 0 var(--spacing-xs) 0;
  display: inline-block;
  position: relative;

  &::after {
    content: "";
    display: block;
    width: 110px;
    height: 3px;
    background: linear-gradient(90deg, var(--color-cyan), transparent);
    margin-top: var(--spacing-xs);
    border-radius: 2px;
    box-shadow: 0 0 12px var(--color-cyan);
  }
`;

export const Tagline = styled.p`
  font-size: 0.9rem;
  color: var(--color-slate);
  margin: 0;
  line-height: 1.5;
`;

export const Copyright = styled.p`
  grid-area: copyright;
  color: var(--color-slate);
  font-size: 0.85rem;
  text-align: center;
  margin: var(--spacing-lg) 0 0 0;
  padding-top: var(--spacing-lg);
  border-top: 1px solid var(--color-footer-border);
`;

export const GridTexture = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 50%;
  opacity: var(--color-footer-texture-opacity);
  pointer-events: none;
  background-image:
    linear-gradient(rgba(var(--color-cyan-rgb), 0.05) 1px, transparent 1px),
    linear-gradient(
      90deg,
      rgba(var(--color-cyan-rgb), 0.05) 1px,
      transparent 1px
    );
  background-size: 52px 52px;
  mask-image: linear-gradient(
    90deg,
    rgba(var(--color-black-rgb), 0.5) 0%,
    transparent 100%
  );
  -webkit-mask-image: linear-gradient(
    90deg,
    rgba(var(--color-black-rgb), 0.5) 0%,
    transparent 100%
  );
`;

export const Constellation = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 50%;
  opacity: var(--color-footer-texture-opacity);
  pointer-events: none;
  background-image: radial-gradient(
    circle,
    var(--color-cyan) 1px,
    transparent 1.5px
  );
  background-size: 19px 19px;
  mask-image: linear-gradient(
    270deg,
    rgba(var(--color-black-rgb), 0.4) 0%,
    transparent 100%
  );
  -webkit-mask-image: linear-gradient(
    270deg,
    rgba(var(--color-black-rgb), 0.4) 0%,
    transparent 100%
  );
`;
