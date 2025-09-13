import styled from "styled-components";

export const FullscreenContent = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FullscreenOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(20, 20, 20, 0.85);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: fadeIn 0.3s;
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const FullscreenImage = styled.img`
  max-width: 90vw;
  max-height: 90vh;
  border-radius: 1.5rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);
  background: #fff;
  transition: box-shadow 0.2s, opacity 0.5s ease;
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
  background: rgba(30, 30, 30, 0.7);
  border: none;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 2rem;
  cursor: pointer;
  z-index: 1100;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.18);
  transition: background 0.2s;
  &:hover {
    background: ${({ theme }) => theme.primary};
    color: #fff;
  }
`;

export const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  ${(props) => (props.$left ? "left: 1.5rem;" : "")}
  ${(props) => (props.$right ? "right: 1.5rem;" : "")}
  transform: translateY(-50%);
  background: rgba(30, 30, 30, 0.45);
  border: none;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.18);
  color: #fff;
  cursor: pointer;
  z-index: 10;
  padding: 0;
  transition: background 0.2s, color 0.2s;
  &:hover {
    background: ${({ theme }) => theme.primary};
    color: #fff;
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
  @media (max-width: 900px) {
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
  width: 95%;
  height: 400px;
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background: ${({ theme }) => theme.background};
  border-radius: 1.5rem;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.12);
  margin: auto;
  width: 90%;
  /* max-width: 900px; */
  @media (max-width: 1200px) {
    max-width: 100%;
    padding: 1.5rem;
  }
  @media (max-width: 900px) {
    padding: 1rem;
    margin: 1.5rem 0;
  }
  @media (max-width: 600px) {
    padding: 0.5rem;
    margin: 1rem 0;
    border-radius: 1rem;
  }
`;

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.text};
`;

export const Image = styled.img`
  width: 640px;
  max-width: 100vw;
  border-radius: 1rem;
  opacity: ${(props) => (props.$visible ? 1 : 0)};
  transition: opacity 0.5s ease;
  position: absolute;
  left: 0;
  top: 15%;
`;

export const SlideshowWrapper = styled.div`
  position: relative;
  width: 640px;
  max-width: 100vw;
  height: 480px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 900px) {
    width: 100%;
    height: 320px;
  }
  @media (max-width: 600px) {
    width: 100%;
    height: 200px;
  }
`;

export const Description = styled.div`
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-md);
  text-align: center;
  p,
  div {
    font-size: 1.1rem;
    line-height: 1.7;
    color: var(--color-text-primary);
    margin-bottom: var(--spacing-md);
    &:last-of-type {
      margin-bottom: 0;
    }
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.xxxl}) {
    p,
    div {
      font-size: 1rem;
      line-height: 1.5;
      margin-bottom: var(--spacing-sm);
    }
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    p,
    div {
      font-size: 0.95rem;
      line-height: 1.4;
      margin-bottom: var(--spacing-xs);
    }
  }
`;

export const ComingSoonTag = styled.div`
  position: absolute;
  bottom: 1.5rem;
  width: 200px;
  height: 48px;
  background: linear-gradient(90deg, #ffcc33 70%, #ffb347 100%);
  color: #222;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 900px) {
    width: 100%;
    left: 0;
    top: 10%;
  }
  @media (max-width: 600px) {
    width: 100%;
    left: 0;
    top: 5%;
    border-radius: 0.5rem;
  }
  border-radius: 24px;
  font-size: 1.1rem;
  box-shadow: 0 2px 8px rgba(255, 204, 51, 0.18);
  letter-spacing: 0.05em;
  z-index: 20;
  border: 2px solid #fff;
  text-align: center;
  user-select: none;
  @media (max-width: 900px) {
    width: 160px;
    height: 40px;
    font-size: 1rem;
    bottom: 1rem;
    border-radius: 20px;
  }
  @media (max-width: 600px) {
    width: 120px;
    height: 32px;
    font-size: 0.95rem;
    bottom: 0.5rem;
    border-radius: 16px;
  }
`;
