import styled from "styled-components";

export const Wrapper = styled.section`
  display: block;
  max-width: 100%;
  height: auto;
  padding: 35px 15px;
  margin: auto;
  font-size: 1rem;
  background-color: white;
  box-shadow: 0px 4px 12px 0px grey;
  border-radius: 5px;

  @media (max-width: ${({ theme }) => theme.breakpoint.lg}) {
    font-size: 1rem;
  }
`;

export const Header = styled.h1`
  font-weight: bolder;
  font-size: 3.1em;
  color: #0066af;
  padding: 5px 150px;
  margin: 0px auto 110px auto;
  text-align: center;
  box-shadow: 0px 8px 12px 0px #dbd9d7;
  border-radius: 30px;
  max-width: fit-content;

  @media (max-width: ${({ theme }) => theme.breakpoint.xxl}) {
    padding: 3px 50px;
    margin-bottom: 50px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.xl}) {
    font-size: 2.6rem;
    margin-bottom: 30px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    font-size: 2.1rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.sm}) {
    font-size: 1.8rem;
    padding: 0px 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.xxs}) {
    font-size: 1.5rem;
    padding: 0px 10px;
    margin-bottom: 15px;
  }
`;

export const ProjectWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: auto;
  width: 100%;
  padding: 0;
  margin-bottom: 0;
  margin-top: 100px;
  padding-bottom: 50px;
  gap: 10px;

  @media (max-width: ${({ theme }) => theme.breakpoint.xxxxl}) {
    gap: 10px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.xxxl}) {
    flex-direction: column;
    margin-top: 50px;
    border-bottom: ${({ $border }) => ($border ? "1px solid grey" : "none")};
    justify-content: center;
    align-items: center;
    gap: 30px;
    padding-bottom: 40px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.xl}) {
    margin-top: 0;
  }
`;

export const ProjectIcon = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 100%;
  display: block;
  margin: auto;

  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    width: 90px;
    height: 90px;
  }
`;

export const ProjectHeader = styled.h2`
  margin-top: 0;
  font-size: 2rem;
  width: 100%;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.xxxl}) {
    font-size: 1.6rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.xl}) {
    margin-top: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.lg}) {
    padding: 0;
    font-size: 1.2em;
  }
`;

export const ProjectImage = styled.img`
  max-width: 100%;
  width: 45%;
  max-height: 100%;
  height: 100%;
  padding: 5px;
  border-radius: 10px;
  box-shadow: 0px 4px 12px 0px grey;
  margin: auto;

  @media (max-width: ${({ theme }) => theme.breakpoint.xxxl}) {
    height: auto;
    width: 50%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.xl}) {
    display: none;
  }
`;

export const ProjectDescription = styled.div`
  width: 40%;
  font-size: 1em;
  margin: auto;
  margin-top: 10px;
  text-align: left;
  order: ${(props) => (props.$inverted ? -1 : 1)};

  @media (max-width: ${({ theme }) => theme.breakpoint.xxxl}) {
    max-width: 100%;
    width: 100%;
    order: 0;
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 10px;
  margin-top: 60px;
  padding: 10px;

  @media (max-width: ${({ theme }) => theme.breakpoint.lg}) {
    margin-top: 30px;
  }
`;

export const ProjectLink = styled.a`
  width: auto;
  max-width: auto;
  font-size: 1em;
  color: #0066af;
  font-weight: bold;
  text-decoration: none;

  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    font-size: 0.85em;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.sm}) {
    font-size: 0.7em;
  }
`;

export const LinkTag = styled.span`
  width: auto;
  position: relative;
  &:after {
    content: "";
    position: absolute;
    width: 0%;
    height: 2px;
    bottom: 0;

    left: 50%;
    background-color: #0066aa;
    transition: all 0.5s ease;
    transform: translateX(-50%);
  }
  &:hover:after {
    width: 100%;
  }
`;
