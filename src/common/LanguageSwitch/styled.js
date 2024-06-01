import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  margin-right: auto;

  @media (max-width: ${({ theme }) => theme.breakpoint.lg}) {
    margin: auto;
  }
`;

export const IconsWrapper = styled.span`
  padding: 1px;
  border-radius: 16px;
  width: 48px;
`;

export const Icon = styled.img`
  top: 1;
  left: 1;
  height: 25px;
  margin: 4px 10px;
  border: 1px solid black;
  border-radius: 100%;
  padding: 1px;
  transition: all 0.3s ease;

  &:hover {
    cursor: pointer;
    transform: scale(1.6);
  }

  ${(props) =>
    props.$isActive &&
    css`
      border: 1px solid #298edd;
      transform: scale(1.6);
    `}

  @media (max-width: ${({ theme }) => theme.breakpoint.lg}) {
    width: 15px;
    height: 15px;
  }
`;
