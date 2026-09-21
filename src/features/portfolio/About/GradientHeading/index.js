import { gradientShift, waveHand } from "common/animations";
import styled from "styled-components";

const GradientHeading = styled.h1`
  font-size: clamp(2rem, 4vw, 3.2rem);
  font-weight: 800;
  margin: 0;
  color: var(--color-text-primary);
  line-height: 1.1;
  position: relative;

  background: linear-gradient(
    135deg,
    var(--color-text-primary) 0%,
    var(--color-primary) 50%,
    var(--color-accent) 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 200% 200%;
  animation: ${gradientShift} 15s ease-in-out infinite;

  &:hover img {
    animation: ${waveHand} 4s infinite;
  }
`;

export default GradientHeading;
