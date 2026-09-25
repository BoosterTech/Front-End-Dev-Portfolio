import { useReducedMotion } from "framer-motion";
import { useState } from "react";
import styled, { keyframes } from "styled-components";

const isStandaloneLaunch = () =>
  window.matchMedia("(display-mode: standalone)").matches ||
  window.navigator.standalone === true;

const fadeOut = keyframes`
  0%, 70% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const iconIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.7);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const textIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const glow = keyframes`
  0%, 100% {
    box-shadow: 0 0 24px 4px rgba(var(--color-cyan-rgb), 0.35);
  }
  50% {
    box-shadow: 0 0 44px 12px rgba(var(--color-cyan-rgb), 0.55);
  }
`;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 3000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-lg);
  background: var(--color-background);
  animation: ${fadeOut} 1.2s ease forwards;
`;

const Logo = styled.img`
  width: 96px;
  height: 96px;
  border-radius: 28%;
  animation:
    ${iconIn} 0.5s cubic-bezier(0.2, 0.8, 0.3, 1.2) both,
    ${glow} 1.4s ease-in-out 0.5s 1;
`;

const Name = styled.span`
  font-size: 1.25rem;
  font-weight: 800;
  letter-spacing: 0.05em;
  background: linear-gradient(
    135deg,
    var(--color-primary),
    var(--color-accent)
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${textIn} 0.45s ease 0.3s both;
`;

/**
 * Branded launch intro shown ONLY when the app starts as an installed PWA
 * (display-mode: standalone / iOS navigator.standalone). Regular browser
 * visits never render it, so it cannot affect LCP or Lighthouse.
 */
const LaunchIntro = () => {
  const shouldReduceMotion = useReducedMotion();
  const [visible, setVisible] = useState(isStandaloneLaunch);

  if (!visible || shouldReduceMotion) return null;

  return (
    <Overlay aria-hidden="true" onAnimationEnd={() => setVisible(false)}>
      <Logo src={`${process.env.PUBLIC_URL}/icon.webp`} alt="" />
      <Name>Derek.dev</Name>
    </Overlay>
  );
};

export default LaunchIntro;
