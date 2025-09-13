import styled from "styled-components";

export const ImagesWrapper = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.5rem;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background: ${({ theme }) => theme.background};
  border-radius: 1.5rem;
  box-shadow: 0 4px 24px rgba(0,0,0,0.12);
  margin: 2rem 0;
`;

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.text};
`;

export const Image = styled.img`
  width: 320px;
  max-width: 90vw;
  border-radius: 1rem;
  margin-bottom: 1.5rem;
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
