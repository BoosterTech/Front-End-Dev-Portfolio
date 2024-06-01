import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
  color: black;
  font-size: 1rem;
  font-weight: 900;

  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    font-size: 0.7rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.sm}) {
    font-size: 0.52rem;
  }
`;

export const Wrapper = styled.section`
  display: block;
  margin: 15px auto 0;
  max-width: 100%;
  max-height: 300px;
  background-color: inherit;
  padding: 40px 100px 10px;
  transition: transform 3s ease;
  font-size: 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoint.xxxl}) {
    padding: 5px;
    text-align: center;
    border: none;
  }
`;

export const FooterWrapper = styled.div`
  display: flex;
  background-color: grey;
  height: 100px;
  max-width: 50%;
  margin: 0;
`;

export const IconsWrapper = styled.div`
  display: flex;
  gap: 30px;
  height: 50px;
  max-width: 100%;
  justify-content: center;
  margin-top: 5px;

  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    height: 35px;
    gap: 10px;
  }
`;

export const ContactIconStyled = styled.img`
  max-width: auto;
  padding: 5px;

  transition: transform 0.3s ease, scale 3s ease;
  border-radius: 100%;

  &:hover {
    transform: scale(1.2);
    cursor: pointer;
    border: 1px solid #1693e4;
  }
`;
