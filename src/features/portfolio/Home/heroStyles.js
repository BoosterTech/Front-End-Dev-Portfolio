import styled from "styled-components";
import { gradientShift, waveHand } from "../../../common/animations";
import { Link } from "react-scroll";
import { HeaderImage } from "./homeStyles";

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