import styled from "styled-components";

export const SlideshowNote = styled.div`
  position: absolute;
  text-align: center;
  font-size: 0.95rem;
  color: #5c5555ff;
  z-index: 10;
  bottom: 0.9rem;

  @media (max-width: ${({ theme }) => theme.breakpoint.lg}) {
    bottom: 0rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    font-size: 0.85rem;
    bottom: -2rem;
  }

  @media (max-width: 500px) {
    font-size: 0.8rem;
    bottom: -0.2rem;
  }
  @media (max-width: 430px) {
    bottom: 1rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.sm}) {
    font-size: 0.75rem;
    bottom: 0;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    font-size: 0.7rem;
    bottom: 1.5rem;
  }
`;

export const MusicGenerationHeader = styled.h1`
  font-size: 3rem;
  font-weight: 900;
  text-align: center;
  margin-bottom: 2rem;
  letter-spacing: 0.03em;
  background: linear-gradient(90deg, #2196f3 0%, #3f51b5 50%, #9c27b0 100%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;

  @media (max-width: ${({ theme }) => theme.breakpoint.xxxl}) {
    margin-top: 1.5rem;
    margin-bottom: 0.5rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.xxl}) {
    margin-top: 1rem;
    margin-bottom: 0.2rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.xl}) {
    margin-top: 1rem;
    margin-bottom: 0.5rem;
    font-size: 2.5rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.lg}) {
    margin-top: 1rem;
    margin-bottom: 0.5rem;
    font-size: 2rem;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    font-size: 1.5rem;
    margin-top: 0rem;
    margin-bottom: 1rem;
  }

  @media (max-width: 500px) {
    font-size: 1.2rem;
    margin-top: -1rem;
    margin-bottom: 1rem;
  }

  @media (max-width: 430px) {
    font-size: 1.1rem;
    margin-top: -2.5rem;
    margin-bottom: 0.5rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.sm}) {
    margin-top: -1rem;
    margin-bottom: 1rem;
    font-size: 1.4rem;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    margin-top: -3rem;
    margin-bottom: 1rem;
    font-size: 1rem;
  }
`;

export const ComingSoonImage = styled.img`
  position: absolute;
  top: -5rem;
  left: 0;
  width: 200px;
  height: auto;
  z-index: 10;
  pointer-events: none;
  transform: rotate(-25deg);

  @media (max-width: ${({ theme }) => theme.breakpoint.xl}) {
    top: -5.5rem;
    left: -0.5rem;
    width: 170px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.lg}) {
    top: -5rem;
    left: -2rem;
    width: 160px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    top: -4rem;
    left: -2rem;
    width: 130px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.sm}) {
    left: -2rem;
    top: -4rem;
    width: 120px;
  }
`;

export const FullscreenContent = styled.div`
  position: fixed;
  top: 0;
  left: 0;
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
  @keyframes fadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    padding: 1rem;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.sm}) {
    padding: 0.5rem;
    border-radius: 0.5rem;
    backdrop-filter: blur(5px);
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

  @media (max-width: ${({ theme }) => theme.breakpoint.lg}) {
    width: 40px;
    height: 40px;
    top: 1.5rem;
    right: 1.5rem;
    font-size: 1.5rem;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    width: 32px;
    height: 32px;
    top: 1rem;
    right: 1rem;
    font-size: 1.2rem;
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

  @media (max-width: ${({ theme }) => theme.breakpoint.lg}) {
    width: 40px;
    height: 40px;
    top: 50%;
    transform: translateY(-50%);
    ${(props) => (props.$left ? "left: 1rem;" : "")}
    ${(props) => (props.$right ? "right: 1rem;" : "")}
    svg {
      width: 24px;
      height: 24px;
    }
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    width: 32px;
    height: 32px;
    top: 50%;
    transform: translateY(-50%);
    ${(props) => (props.$left ? "left: 0.5rem;" : "")}
    ${(props) => (props.$right ? "right: 0.5rem;" : "")}
    svg {
      width: 20px;
      height: 20px;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.sm}) {
    width: 28px;
    height: 28px;
    top: 50%;
    transform: translateY(-50%);
    ${(props) => (props.$left ? "left: 0.5rem;" : "")}
    ${(props) => (props.$right ? "right: 0.5rem;" : "")}
    svg {
      width: 16px;
      height: 16px;
    }
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
  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    flex-direction: column;
    gap: 2rem;
    align-items: center;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.sm}) {
    flex-direction: column;
    gap: 1rem;
    align-items: center;
  }
`;

export const ImagesWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 95%;
  height: 400px;

  @media (max-width: ${({ theme }) => theme.breakpoint.xl}) {
    width: 100%;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.lg}) {
    height: 350px;
    width: 100%;
    margin-bottom: 0.5rem;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    height: 200px;
    margin-bottom: 3rem;
    margin-top: 2rem;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.sm}) {
    margin-top: 1rem;
    height: 180px;
  }
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
  box-shadow: 0 4px 24px rgba(68, 66, 66, 0.12);
  margin: auto;
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.97);

  @media (${({ theme }) => theme.breakpoint.lg}) {
    max-width: 100%;
    padding: 1.5rem;
  }
  @media (${({ theme }) => theme.breakpoint.md}) {
    padding: 1rem;
    margin: 1.5rem 0;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.sm}) {
    padding: 0.5rem;
    margin: 1rem 0;
    border-radius: 1rem;
    width: 100%;
  }
`;

export const Title = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.text};

  @media (max-width: ${({ theme }) => theme.breakpoint.xxxl}) {
    margin-top: 1.5rem;
    margin-bottom: 0.5rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.xxl}) {
    margin-top: 1.5rem;
    margin-bottom: 0.2rem;
    /* font-size: 2.5rem; */
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.xl}) {
    margin-top: 1rem;
    margin-bottom: 0.5rem;
    font-size: 2.5rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.lg}) {
    font-size: 1.8rem;
    margin-bottom: 0;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    font-size: 1rem;
    margin-bottom: -0rem;
    text-align: center;
  }

  @media (max-width: 430px) {
    margin-bottom: -2rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.sm}) {
    font-size: 1rem;
    margin-top: 30px;
    margin-bottom: -1rem;
    text-align: center;
  }
`;

export const Image = styled.img`
  width: 100%;
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

export const SlideshowWrapper = styled.div`
  position: relative;
  width: 640px;
  max-width: 100vw;
  height: 480px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.lg}) {
    width: 100%;
    height: 320px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
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
  p {
    font-size: 1.1rem;
  }
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
    padding,
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
  @media (max-width: ${({ theme }) => theme.breakpoint.sm}) {
    p,
    div {
      font-size: 0.85rem;
      line-height: 1.3;
      margin-bottom: var(--spacing-xs);
    }
  }
`;
