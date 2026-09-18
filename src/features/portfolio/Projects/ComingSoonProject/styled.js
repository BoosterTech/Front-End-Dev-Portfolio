import { fadeIn } from "common/animations";
import styled from "styled-components";

export const FullscreenContent = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FullscreenOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(var(--color-sun-backdrop-rgb), 0.85);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${fadeIn} 0.3s;
`;

export const FullscreenImage = styled.img`
  max-width: 90vw;
  max-height: 90vh;
  border-radius: 1.5rem;
  box-shadow: 0 8px 32px rgba(var(--color-black-rgb), 0.25);
  background: var(--color-white);
  transition:
    box-shadow 0.2s,
    opacity 0.5s ease;
  opacity: ${(props) => (props.$visible ? 1 : 0)};
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 2rem;
  right: 2rem;
  background: rgba(var(--color-sun-button-bg-rgb), 0.7);
  border: none;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-white);
  font-size: 2rem;
  cursor: pointer;
  z-index: 1100;
  box-shadow: 0 2px 8px rgba(var(--color-black-rgb), 0.18);
  transition: background 0.2s;
  &:hover {
    background: var(--color-primary);
    color: var(--color-white);
  }
`;

export const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  ${(props) => (props.$left ? "left: 1.5rem;" : "")}
  ${(props) => (props.$right ? "right: 1.5rem;" : "")}
  transform: translateY(-50%);
  background: rgba(var(--color-sun-button-bg-rgb), 0.45);
  border: none;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(var(--color-black-rgb), 0.18);
  color: var(--color-white);
  cursor: pointer;
  z-index: 10;
  padding: 0;
  transition:
    background 0.2s,
    color 0.2s;
  &:hover {
    background: var(--color-primary);
    color: var(--color-white);
  }
  svg {
    width: 28px;
    height: 28px;
    display: block;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3rem;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  @media (max-width: ${({ theme }) => theme.breakpoint.lg}) {
    flex-direction: column;
    gap: 2rem;
    align-items: center;
  }
`;

export const ImagesWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin-bottom: 1.5rem; */
  width: 80%;
  height: auto;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background: var(--color-background);
  border-radius: 1.5rem;
  box-shadow: 0 4px 24px rgba(var(--color-black-rgb), 0.12);
  margin: 2rem 0;
`;

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--color-text-primary);
`;

export const Image = styled.img`
  width: 100%;
  max-width: 640px;
  border-radius: 1rem;
  opacity: ${(props) => (props.$visible ? 1 : 0)};
  transition: opacity 0.5s ease;
  position: absolute;
  left: 0;
  top: 15%;
`;

export const SlideshowWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 640px;
  height: 480px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Description = styled.div`
  font-size: 1.1rem;
  color: var(--color-text-secondary);
  text-align: center;
  margin-bottom: 2rem;
`;

export const ComingSoonTag = styled.div`
  background: linear-gradient(90deg, var(--color-sun-orange), var(--color-sun-yellow));
  color: var(--color-sun-text);
  font-weight: 600;
  padding: 0.7rem 1.5rem;
  border-radius: 2rem;
  font-size: 1.2rem;
  box-shadow: 0 2px 8px rgba(var(--color-sun-yellow-rgb), 0.15);
`;
