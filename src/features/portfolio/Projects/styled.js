import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
  height: auto;
  text-align: center;
  padding: 15px 0px;
  margin: 0 auto 5px auto;

  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
  }
`;

export const Header = styled.h1`
  font-weight: bolder;
  font-size: 2.5em;
  color: #0066af;
  padding: 0 15px;
  margin-bottom: 0;
  margin-top: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.xxl}) {
    font-size: 3em;
    padding: 0;
  }
`;

export const ProjectWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: auto;
  width: 100%;
  padding: 0;
  margin-bottom: 0;
  margin-top: 150px;
  padding-bottom: 50px;
  gap: 10px;

  @media (max-width: ${({ theme }) => theme.breakpoint.xxxl}) {
    flex-direction: column;
    margin-top: 50px;
    border-bottom: 1px solid grey;
    justify-content: center;
    align-items: center;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoint.xl}) {
    margin-top: 0;
  }
`;

export const ProjectIcon = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    width: 100px;
    height: 100px;
  }
`;

export const ProjectHeader = styled.h2`
  margin-top: 0;
  font-size: 2em;
  width: 100%;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.xxxl}) {
    margin-top: 20px;
    font-size: 2em;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    padding: 0;
    font-size: 1.4em;
  }
`;

export const ProjectImage = styled.img`
  max-width: 100%;
  width: 50%;
  max-height: 100%;
  height: 100%;
  padding: 5px;
  border-radius: 10px;
  box-shadow: 0px 4px 12px 0px grey;
  margin-left: ${(props) => (props.$inverted ? "auto" : "-30px")};

  @media (max-width: ${({ theme }) => theme.breakpoint.xxxl}) {
    height: auto;
    width: 50%;
    margin-left: 0;

    @media (max-width: ${({ theme }) => theme.breakpoint.xl}) {
      display: none;
    }
  }
`;

export const ProjectDescription = styled.div`
  width: 40%;
  font-size: 1.2em;
  margin: auto;
  margin-top: 10px;
  text-align: center;
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
`;

export const ProjectLink = styled.a`
  width: auto;
  max-width: auto;
  font-size: 1.2em;
  color: #0066af;
  font-weight: bold;
  text-decoration: none;
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
