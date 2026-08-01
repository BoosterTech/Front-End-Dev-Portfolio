import styled from "styled-components";
import { keyframes } from "styled-components";
import { fadeInUp, slideInLeft, slideInRight, waveHand, gradientShift } from "../../../common/animations";
import { Link } from "react-scroll";

const imageBorderAnimation = keyframes`
   0%{
  border-radius: 65% 35% 67% 33% / 65% 36% 64% 35%  ;
}
50%{
   border-radius: 34% 66% 31% 69% / 36% 61% 39% 64%  ;
}
100%{
    border-radius: 65% 35% 67% 33% / 65% 36% 64% 35%  ;
}
`;

const techStackFloat = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
`;

export const HomeWrapper = styled.section`
  padding: calc(var(--spacing-3xl) + var(--nav-height)) 0 var(--spacing-3xl) 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.lg}) {
    padding: calc(var(--spacing-2xl) + var(--nav-height-mobile)) 0 var(--spacing-2xl) 0;
  }
  width: 100%;
  animation: ${fadeInUp} 0.8s ease-out;
`;

export const ContentImageContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: var(--spacing-3xl);
  align-items: center;
  margin-bottom: var(--spacing-3xl);

  @media (max-width: ${({ theme }) => theme.breakpoint.xl2}) {
    grid-template-columns: 1fr;
    gap: var(--spacing-2xl);
    text-align: center;
  }
`;

export const ContentContainer = styled.div`
  animation: ${slideInLeft} 0.8s ease-out 0.2s both;

  @media (max-width: ${({ theme }) => theme.breakpoint.xl2}) {
    order: 2;
    animation: ${fadeInUp} 0.8s ease-out 0.4s both;
  }
`;


export const TechStackSpan = styled.div`
  display: inline-block;
  font-size: 0.5em;
  font-weight: 600;
  /* opacity: 0.8; */
  /* margin-left: 0.5em; */
`;

export const HeaderImage = styled.img`
  display: inline-block;
  width: clamp(35px, 5vw, 50px);
  height: auto;
  margin-left: var(--spacing-sm);
  transform-origin: bottom center;
  transition: transform var(--transition-slow);
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1));

  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    width: clamp(30px, 6vw, 40px);
  }

  &:hover {
    animation: ${waveHand} 4s infinite;
  }
`;

export const HeaderParagraph = styled.p`
  font-size: clamp(1.1rem, 2.5vw, 1.5rem);
  font-weight: 500;
  color: var(--color-text-primary);
  line-height: 1.6;
  margin: 0;
  max-width: 600px;

  @media (max-width: ${({ theme }) => theme.breakpoint.xl2}) {
    max-width: none;
  }
`;

export const ImageContainer = styled.div`
  width: 280px;
  height: 280px;
  position: relative;
  box-shadow: 0 8px 32px rgba(6, 7, 7, 0.18),
    0 2px 8px rgba(0, 0, 0, 0.08);
  animation: ${slideInRight} 0.8s ease-out 0.3s both,
    ${imageBorderAnimation} 12s ease-in-out infinite 1s;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 260px;
    height: 260px;
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 0.45) 0%,
      var(--color-primary) 25%,
      var(--color-accent) 60%,
      rgba(0, 0, 0, 0.08) 85%,
      transparent 100%
    );
    border-radius: 50%;
    z-index: -1;
    opacity: 0.38;
    filter: blur(32px);
    animation: spin 20s linear infinite;
  }

  @keyframes spin {
    from {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    to {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.xl2}) {
    order: 1;
    margin: 0 auto var(--spacing-xl) auto;
    animation: ${fadeInUp} 0.8s ease-out 0.2s both,
      ${imageBorderAnimation} 12s ease-in-out infinite 1s;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.sm}) {
    width: 220px;
    height: 220px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.xxs}) {
    width: 180px;
    height: 180px;
  }
`;

export const ProfileImage = styled.img`
  position: relative;
  z-index: 2;
  width: 100%;
  height: 100%;
  object-fit: cover;
  box-shadow: 0 0 40px 14px rgba(40, 142, 221, 0.35),
    0 8px 32px rgba(206, 207, 207, 0.18), 0 2px 8px rgba(0, 0, 0, 0.08);
  border-radius: inherit;
  border: 1px solid var(--color-primary);
  transition: transform var(--transition-normal);
`;

export const TechStackContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: var(--spacing-lg);
  margin: var(--spacing-3xl) 0;
  padding: var(--spacing-2xl) var(--spacing-xl);
  background: var(--color-surface);
  border-radius: var(--radius-xl);
  border: 1px solid var(--color-border);
  box-shadow: var(--shadow-sm);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.1),
      transparent
    );
    transition: left 2s ease-in-out;
  }

  &:hover::before {
    left: 100%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.lg}) {
    gap: var(--spacing-md);
    padding: var(--spacing-xl) var(--spacing-lg);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    gap: var(--spacing-sm);
    padding: var(--spacing-lg) var(--spacing-md);
  }
`;

export const TechStackItem = styled.img`
  width: 50px;
  height: 50px;
  object-fit: contain;
  padding: var(--spacing-xs);
  border: 2px solid var(--color-border);
  border-radius: var(--radius-md);
  background: var(--color-background);
  transition: all var(--transition-normal);
  cursor: pointer;
  animation: ${techStackFloat} 3s ease-in-out infinite;
  animation-delay: ${(props) => (props.index || 0) * 0.1}s;

  @media (hover: hover) {
    &:hover {
      transform: translateY(-8px) scale(1.1);
      border-color: var(--color-primary);
      box-shadow: var(--shadow-lg);
      background: linear-gradient(
        135deg,
        var(--color-primary),
        var(--color-accent)
      );
      filter: brightness(1.1);
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.xl2}) {
    width: 45px;
    height: 45px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    width: 40px;
    height: 40px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.sm}) {
    width: 35px;
    height: 35px;
  }
`;

export const WelcomeLabel = styled.span`
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-xs);
  padding: 0.45rem 1rem;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: transparent;
  background: linear-gradient(
    135deg,
    var(--color-primary) 0%,
    var(--color-accent) 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  border: 1px solid var(--color-border);
  border-radius: 50px;
  margin-bottom: var(--spacing-md);

  svg {
    color: var(--color-primary);
    width: 0.75rem;
    height: 0.75rem;
    flex-shrink: 0;
  }
`;

export const HeroTitle = styled.h1`
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: 800;
  line-height: 1.05;
  color: var(--color-text-primary);
  margin: 0 0 var(--spacing-sm) 0;

  &:hover ~ * ${HeaderImage} {
    animation: ${waveHand} 4s infinite;
  }
`;

export const GradientText = styled.span`
  display: inline;
  margin-left: 0.18em;
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

  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    display: block;
  }
`;

export const TechStackText = styled.p`
  font-size: 1.1rem;
  font-weight: 500;
  color: var(--color-primary);
  margin: 0 0 var(--spacing-md) 0;
`;

export const HeroDescription = styled.p`
  font-size: clamp(1.1rem, 2.5vw, 1.35rem);
  font-weight: 400;
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin: var(--spacing-xl) 0 0 0;
  max-width: 520px;

  @media (max-width: ${({ theme }) => theme.breakpoint.xl2}) {
    max-width: none;
  }
`;

export const LocationSpan = styled.span`
  color: var(--color-primary);
  font-weight: 600;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-md);
  margin-top: var(--spacing-xl);

  @media (max-width: ${({ theme }) => theme.breakpoint.xl2}) {
    justify-content: center;
  }
`;

export const ViewMyWorkButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-sm);
  padding: 0.85rem 1.75rem;
  font-size: 1rem;
  font-weight: 600;
  color: #ffffff;
  background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  text-decoration: none;
  cursor: pointer;
  transition: all var(--transition-normal);
  box-shadow: var(--shadow-md);

  &:hover {
    color: var(--color-primary);
        border-color: var(--color-primary);

    background: transparent;
    box-shadow: none;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.xl2}) {
    justify-content: center;
  }
`;

export const DownloadCVButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-sm);
  padding: 0.85rem 1.75rem;
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-text-primary);
  background: transparent;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  text-decoration: none;
  cursor: pointer;
  transition: all var(--transition-normal);

  &:hover {
    border-color: var(--color-primary);
    color: var(--color-primary);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.xl2}) {
    justify-content: center;
  }
`;

