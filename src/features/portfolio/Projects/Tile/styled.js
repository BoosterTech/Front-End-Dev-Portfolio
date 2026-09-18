import { fadeInUp } from "common/animations";
import { Button } from "common/Button";
import Card from "common/Card";
import styled from "styled-components";

export const AvailableTag = styled.span`
  font-weight: 400;
  font-size: 1.1rem;
  margin-left: 0.5em;
  color: var(--color-text-secondary);
`;

export const ProjectWrapper = styled(Card).attrs({
  $bordered: true,
  $hoverable: true,
})`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: var(--spacing-3xl);
  align-items: center;
  padding: var(--spacing-xl);
  background: var(--color-background);
  box-shadow: var(--shadow-md);
  transition: all var(--transition-normal);
  animation: ${fadeInUp} 0.8s ease-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-xl);
  }

  &:not(:last-child) {
    border-bottom: ${({ $border }) =>
      $border ? `2px solid var(--color-border)` : "none"};
  }

  &:nth-child(even) {
    grid-template-columns: 1fr auto;
  }

  /* Force single column for all projects on small screens */
  @media (max-width: ${({ theme }) => theme.breakpoint.lg}) {
    grid-template-columns: 1fr !important;
    grid-auto-flow: row;
    gap: var(--spacing-xl);
    text-align: center;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.xl}) {
    gap: var(--spacing-lg);
    padding: var(--spacing-lg);
  }
`;

export const ProjectHeader = styled.h3`
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 700;
  margin: 0 0 var(--spacing-md) 0;
  color: var(--color-text-primary);

  @media (max-width: ${({ theme }) => theme.breakpoint.lg}) {
    text-align: center;
  }
`;

export const ProjectImage = styled.img`
  width: 100%;
  max-width: 500px;
  height: auto;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
  transition: all var(--transition-normal);
  animation: ${fadeInUp} 0.8s ease-out 0.2s both;

  &:hover {
    transform: scale(1.02);
    box-shadow: var(--shadow-xl);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.lg}) {
    max-width: 400px;
    animation: ${fadeInUp} 0.8s ease-out 0.2s both;
    margin-left: auto;
    margin-right: auto;
    display: block;
    order: 1;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    max-width: 100%;
  }
`;

export const ProjectDescription = styled.div`
  animation: ${fadeInUp} 0.8s ease-out 0.3s both;

  p,
  div {
    font-size: 1.1rem;
    line-height: 1.7;
    color: var(--color-text-primary);
    margin-bottom: var(--spacing-md);

    &:last-of-type {
      margin-bottom: 0;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.lg}) {
    animation: ${fadeInUp} 0.8s ease-out 0.4s both;
    order: 2;
    p,
    div {
      font-size: 1rem;
      line-height: 1.5;
      margin-bottom: var(--spacing-sm);
    }
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    p,
    div {
      font-size: 0.95rem;
      line-height: 1.4;
      margin-bottom: var(--spacing-xs);
    }
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  margin-top: var(--spacing-xl);

  @media (max-width: ${({ theme }) => theme.breakpoint.lg}) {
    align-items: center;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.lg}) {
    margin-top: var(--spacing-lg);
  }
`;

export const ProjectLink = styled(Button).attrs({ $variant: "primary" })`
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
      rgba(var(--color-white-rgb), 0.2),
      transparent
    );
    transition: left var(--transition-normal);
  }

  &:hover {
    &::before {
      left: 100%;
    }
  }
`;

export const LinkTag = styled.span`
  position: relative;
`;
