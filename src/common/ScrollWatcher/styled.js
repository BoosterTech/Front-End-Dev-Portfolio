import styled, { keyframes } from "styled-components";

const scrollWatcherAnimation = keyframes`
  to {
    transform: scale(1);
  }
`;

export const ScrollWatcher = styled.div`
  height: 4px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100vw;
  background: ${({ theme }) =>
    theme.mode === "dark"
      ? "linear-gradient(90deg, var(--color-accent), var(--color-primary))"
      : "linear-gradient(90deg, var(--color-primary), var(--color-accent))"};
  box-shadow: 0 2px 8px rgba(40,142,221,0.18), 0 1px 4px rgba(0,0,0,0.12);
  border-radius: 2px;
  transform: scale(0.45);

  animation: ${scrollWatcherAnimation} linear;
  animation-timeline: scroll(y);
`;
