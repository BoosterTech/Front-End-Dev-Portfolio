import styled from "styled-components";

const Wrapper = styled.div`
  width: 20px;
  height: 16px;
  position: relative;
`;

const Line = styled.span`
  position: absolute;
  left: 0;
  top: 50%;
  width: 100%;
  height: 2px;
  background: currentColor;
  border-radius: 2px;
  transform-origin: center;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease;

  &:nth-child(1) {
    transform: translateY(-7px);
    ${({ $open }) => $open && "transform: translateY(0) rotate(45deg);"}
  }

  &:nth-child(2) {
    transform: translateY(0);
    ${({ $open }) => $open && "transform: translateY(0) scaleX(0); opacity: 0;"}
  }

  &:nth-child(3) {
    transform: translateY(7px);
    ${({ $open }) => $open && "transform: translateY(0) rotate(-45deg);"}
  }
`;

export const HamburgerIcon = ({ $open }) => (
  <Wrapper>
    <Line $open={$open} />
    <Line $open={$open} />
    <Line $open={$open} />
  </Wrapper>
);

