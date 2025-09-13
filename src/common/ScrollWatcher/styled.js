import styled, { keyframes } from "styled-components";

const scrollWatcherAnimation = keyframes`
  to {
    transform: scale(1);
  }
`;

export const ScrollWatcher = styled.div`
  height: 2px;
  position: fixed;
  top: 0;
  z-index: 100;
  background-color: #3d6af5;
  width: 100%;
  transform: scale(0.45);

  animation: ${scrollWatcherAnimation} linear;
  animation-timeline: scroll(y);
`;
