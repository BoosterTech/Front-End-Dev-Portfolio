import styled from "styled-components";

export const Header = styled.div`
  text-align: center;
  margin: auto;
  padding: 80px 0 10px;
  color: black;
  font-size: 1.4rem;
  font-weight: 900;
  white-space: nowrap;

  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    font-size: 0.7rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.sm}) {
    font-size: 0.52rem;
  }
`;

export const Wrapper = styled.section`
  max-width: 100%;
  max-height: 500px;
  height: auto;
  background-color: inherit;
  padding: 60px auto 10px;
  margin-bottom: 20px;
  transition: transform 3s ease;
  font-size: 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoint.xxxl}) {
    text-align: center;
    border: none;
  }
`;

export const IconsWrapper = styled.div`
  display: flex;
  gap: 30px;
  height: 50px;
  width: 100vw;
  max-width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 5px;

  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    height: 40px;
    gap: 10px;
  }
`;

export const ContactIconStyled = styled.img`
  max-width: 50px;
  max-height: 50px;
  padding: 5px;
  transition: transform 0.3s ease, scale 3s ease;
  border-radius: 100%;
  border: 1px solid transparent;

  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    max-width: 40px;
    max-height: 40px;
  }

  &:hover {
    transform: scale(1.2);
    cursor: pointer;
    border: 1px solid #1693e4;
  }
`;
