import { keyframes } from "styled-components";

export const gradientShift = keyframes`
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
`;

export const waveHand = keyframes`
  0% { transform: rotate(0deg) scale(1.1); }
  10% { transform: rotate(20deg) scale(1.1); }
  20% { transform: rotate(-10deg) scale(1.1); }
  30% { transform: rotate(20deg) scale(1.1); }
  40% { transform: rotate(-10deg) scale(1.1); }
  50% { transform: rotate(20deg) scale(1.1); }
  60% { transform: rotate(-10deg) scale(1.1); }
  70% { transform: rotate(20deg) scale(1.1); }
  80% { transform: rotate(-10deg) scale(1.1); }
  90% { transform: rotate(10deg) scale(1.1); }
  100% { transform: rotate(0deg) scale(1.1); }
`;

export const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const fadeInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const fadeInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export { fadeInLeft as slideInLeft };
export { fadeInRight as slideInRight };

export const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const float = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-5px);
  }
`;

export const floatAbout = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
`;

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const slideFromLeft = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const pulse = keyframes`
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(37, 99, 235, 0.4);
  }
  50% {
    box-shadow: 0 0 0 10px rgba(37, 99, 235, 0);
  }
`;
