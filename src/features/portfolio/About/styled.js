import styled from "styled-components";
import { fadeInLeft, fadeInRight, floatAbout as float, spin } from "../../../common/animations";
export const Wrapper = styled.article`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: var(--spacing-3xl);
  align-items: center;
  padding: var(--spacing-3xl) 0;
  margin-bottom: var(--spacing-md);
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoint.xl2}) {
    grid-template-columns: 1fr;
    gap: var(--spacing-2xl);
    text-align: center;
  padding: calc(var(--spacing-2xl) + 96px) 0 var(--spacing-2xl) 0;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  animation: ${fadeInLeft} 0.8s ease-out, ${float} 6s ease-in-out infinite 1s;

  &::before {
    content: "";
    position: absolute;
    width: 260px;
    height: 260px;

    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 0.45) 0%,
      var(--color-primary) 25%,
      var(--color-accent) 60%,
      rgba(0, 0, 0, 0.08) 85%,
      transparent 100%
    );
    border-radius: 50%;
    z-index: -1;
    opacity: 0.38;
    filter: blur(32px);
    animation: ${spin} 20s linear infinite;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.xl2}) {
    order: -1;
    animation: ${fadeInLeft} 0.8s ease-out 0.2s both,
      ${float} 6s ease-in-out infinite 1.2s;
  }
`;

export const SpinnerImage = styled.img`
  position: relative;
  z-index: 2;
  width: 260px;
  height: 260px;
  animation: ${spin} 60s linear infinite;
  filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.1));
`;

export const Image = styled.img`
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -52%);
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 4px solid var(--color-surface);
  box-shadow: var(--shadow-lg);
  transition: transform var(--transition-normal);

  &:hover {
    transform: translate(-50%, -52%) scale(1.05);
  }
`;


export const ContentContainer = styled.div`
  animation: ${fadeInRight} 0.8s ease-out 0.3s both;

  p,
  div {
    font-size: 1.1rem;
    line-height: 1.8;
    margin-bottom: var(--spacing-lg);
    color: var(--color-text-primary);

    &:last-of-type {
      margin-bottom: 0;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.xl2}) {
    animation: ${fadeInRight} 0.8s ease-out 0.5s both;
  }
`;
