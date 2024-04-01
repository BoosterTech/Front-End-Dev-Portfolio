import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  margin-right: auto;
  margin-left: 15px;
`;

export const Button = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  display: flex;
  align-items: center;
  color: inherit;
  outline-offset: 8px;
`;

export const Text1 = styled.span`
  font-size: 12px;
  margin: 0 11px;
  color: black;

  ${({ isCurrent }) =>
    !isCurrent &&
    css`
      font-size: 15px;
      font-weight: bold;
      color:#298EDD;
    `}
`;

export const Text2 = styled(Text1)`
  font-size: 12px;
  color: inherit;

  ${({ isCurrent }) =>
    isCurrent &&
    css`
      font-size: 15px;
      font-weight: bold;
      color: #298EDD;
    `}
`;

export const Box = styled.span`
  padding: 1px;
  border-radius: 16px;
  width: 48px;
  display: flex;
`;

export const IconWrapper = styled.span`
  position: relative;
  padding: 1px;
  border: 1px solid black;
  border-radius: 100%;
  height: 25px;
  width: 25px;
  display: flex;
  transition: transform 1s;

  ${({ moveToRight }) =>
    moveToRight &&
    css`
      transform: translateX(20px);
    `}
`;

export const Icon1 = styled.img`
  position: absolute;
  top: 1;
  left: 1;
  height: 25px;
  opacity: ${({ isCurrent }) => (isCurrent ? 1 : 0)};
  transition: opacity 2s ease;
`;

export const Icon2 = styled(Icon1)`
  opacity: ${({ isCurrent }) => (!isCurrent ? 1 : 0)};
`;
