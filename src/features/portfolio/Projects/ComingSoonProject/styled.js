import styled from "styled-components";

export const FullscreenContent = styled.div`
  position: relative;
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
  width: 80%;
  height: auto;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background: ${({ theme }) => theme.background};
  border-radius: 1.5rem;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.12);
  margin: 2rem 0;
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
`;

export const Description = styled.div`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.textSecondary || theme.text};
  text-align: center;
  margin-bottom: 2rem;
`;

export const ComingSoonTag = styled.div`
  background: linear-gradient(90deg, #ffb347, #ffcc33);
  color: #222;
  font-weight: 600;
  padding: 0.7rem 1.5rem;
  border-radius: 2rem;
  font-size: 1.2rem;
  box-shadow: 0 2px 8px rgba(255, 204, 51, 0.15);
`;
