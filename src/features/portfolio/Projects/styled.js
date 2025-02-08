import styled from "styled-components";

export const Wrapper = styled.section`
  display: block;
  max-width: 100%;
  height: auto;
  padding: 35px 15px;
  margin: auto;

  background-color: white;
  box-shadow: 0px 4px 12px 0px grey;
  border-radius: 5px;

  @media (max-width: ${({ theme }) => theme.breakpoint.lg}) {
    font-size: 1rem;
  }
`;

export const TitleWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  left: 50%;
  transform: translate(-50%, -43%);
  gap: 25px;

  @media (max-width: ${({ theme }) => theme.breakpoint.xl}) {
    transform: translate(-50%, -63%);
    gap: 15px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.sm}) {
    transform: translate(-50%, -69%);
    gap: 15px;
  }
`;

export const Header = styled.h1`
  font-weight: bolder;
  font-size: 3.1em;
  color: #0066af;
  padding: 5px 150px;
  margin: 0px auto 110px auto;
  text-align: center;

  max-width: fit-content;

  @media (max-width: ${({ theme }) => theme.breakpoint.xl}) {
    font-size: 2.1rem;
    margin-bottom: 30px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.sm}) {
    font-size: 1.8rem;
    padding: 0px 20px;
  }
`;

export const ProjectsWrapper = styled.div`
  margin-top: 130px;

  @media (max-width: ${({ theme }) => theme.breakpoint.xl}) {
    margin-top: 50px;
  }
`;

export const ProjectWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: auto;
  width: 100%;
  padding: 0;
  margin-bottom: 0;
  margin-top: 50px;
  padding-bottom: 50px;
  gap: 10px;

  @media (max-width: ${({ theme }) => theme.breakpoint.xxxl}) {
    flex-direction: column;
    border-bottom: ${({ $border }) => ($border ? "1px solid grey" : "none")};
    justify-content: center;
    align-items: center;
    gap: 30px;
    padding-bottom: 40px;
    margin-top: 80px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.xl}) {
    margin-top: 45px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    margin-top: 40px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.sm}) {
    margin-top: 40px;
  }
`;

export const ProjectIcon = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 100%;
  display: block;
  margin: auto;

  @media (max-width: ${({ theme }) => theme.breakpoint.xl}) {
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
  padding: 2px;

  @media (max-width: ${({ theme }) => theme.breakpoint.xxxl}) {
    width: 50%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.xxl}) {
    width: 60%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.xl}) {
    width: 80%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    width: 90%;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.xxs}) {
    width: 100%;
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
