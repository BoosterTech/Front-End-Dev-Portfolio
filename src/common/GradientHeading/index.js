import { gradientShift, waveHand } from "common/animations";
import styled from "styled-components";

const GradientHeading = styled.h1`
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 800;
  margin-bottom: var(--spacing-lg);
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
  animation: ${gradientShift} 4s ease-in-out infinite;

  &:hover img {
    animation: ${waveHand} 4s infinite;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    font-size: clamp(2rem, 8vw, 2.5rem);
  }
`;

export default GradientHeading;
