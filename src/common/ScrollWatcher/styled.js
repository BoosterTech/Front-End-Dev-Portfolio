import styled, { keyframes } from "styled-components";

const scrollWatcherAnimation = keyframes`
to{
    scale:1;
    height: 2px;
}
`;

export const ScrollWatcher = styled.div`
  height: 1px;
  position: fixed;
  top: 0;
  z-index: 100;
  background-color: #3D6AF5;
  width: 100%;
  scale: 0.2;

  animation: ${scrollWatcherAnimation} linear;
  animation-timeline: scroll(y);

`;
