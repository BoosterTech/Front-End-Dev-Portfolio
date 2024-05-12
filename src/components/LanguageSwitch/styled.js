import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  margin-right: auto;
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
  margin: 0 15px;
  border: 1px solid black;
  border-radius: 100%;
  padding: 1px;

  &:hover {
    cursor: pointer;
    border: 1px solid #298edd;
  }
  &:active {
    transform: scale(0.9);
  }
`;
