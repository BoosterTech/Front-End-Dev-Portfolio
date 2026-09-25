import styled from "styled-components";

const IconWrapper = styled.div`
  width: 22px;
  height: 22px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Sun = styled.div`
  position: absolute;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: currentColor;
  transition:
    transform 0.4s cubic-bezier(0.4, 0, 0.2, 1),
    opacity 0.3s ease;

  &::before {
    content: "";
    position: absolute;
    top: -6px;
    left: -6px;
    right: -6px;
    bottom: -6px;
    border-radius: 50%;
    border: 2px solid currentColor;
    border-top-color: transparent;
    border-bottom-color: transparent;
    border-left-color: transparent;
    transition:
      transform 0.4s cubic-bezier(0.4, 0, 0.2, 1),
      opacity 0.3s ease;
    transform: rotate(0deg);
  }

  ${({ $isDark }) =>
    $isDark &&
    "transform: scale(0); opacity: 0; &::before { transform: scale(0); opacity: 0; }"}
`;

const Moon = styled.div`
  position: absolute;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  box-shadow: inset 5px -2px 0 0 currentColor;
  transform: scale(0);
  opacity: 0;
  transition:
    transform 0.4s cubic-bezier(0.4, 0, 0.2, 1),
    opacity 0.3s ease;

  ${({ $isDark }) => $isDark && "transform: scale(1); opacity: 1;"}
`;

export const ThemeIcon = ({ $isDark }) => (
  <IconWrapper>
    <Sun $isDark={$isDark} />
    <Moon $isDark={$isDark} />
  </IconWrapper>
);
