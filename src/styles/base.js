import slowEntry from "common/slowEntry";
import { css } from "styled-components";

export const base = css`
  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    min-height: 100vh;
    overflow-x: hidden;
    overflow-x: clip;
    color: var(--color-text-primary);
    font-family:
      "Inter",
      -apple-system,
      BlinkMacSystemFont,
      "Segoe UI",
      "Roboto",
      "Oxygen",
      "Ubuntu",
      "Cantarell",
      sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.6;
    max-width: 100%;
    margin: 0;
    padding: 0;
    animation: ${slowEntry} 0.6s ease-out;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body::before {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url(${process.env.PUBLIC_URL}/backgroundLight.webp);
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
    z-index: -1;
  }

  [data-theme="dark"] body::before {
    background-image: url(${process.env.PUBLIC_URL}/backgroundDark.webp);
  }

  @media (max-width: 768px) {
    body::before {
      background-image: url(${process.env.PUBLIC_URL}/backgroundLightMobile.webp);
    }

    [data-theme="dark"] body::before {
      background-image: url(${process.env.PUBLIC_URL}/backgroundDarkMobile.webp);
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 700;
    line-height: 1.2;
    margin: 0 0 var(--spacing-md) 0;
    color: var(--color-text-primary);
  }

  h1 {
    font-size: clamp(2rem, 5vw, 3.5rem);
    font-weight: 800;
  }

  h2 {
    font-size: clamp(1.5rem, 4vw, 2.5rem);
    font-weight: 700;
  }

  h3 {
    font-size: clamp(1.25rem, 3vw, 2rem);
    font-weight: 600;
  }

  p {
    margin: 0 0 var(--spacing-md) 0;
    color: var(--color-text-secondary);
    line-height: 1.7;
  }

  a {
    color: var(--color-primary);
    text-decoration: none;
    transition: color var(--transition-fast);
  }

  a:hover {
    color: var(--color-primary-hover);
  }

  button {
    font-family: inherit;
    cursor: pointer;
    border: none;
    border-radius: var(--radius-md);
    transition: all var(--transition-fast);
  }

  img {
    max-width: 100%;
    height: auto;
  }

  /* Utility classes */
  .container {
    max-width: var(--container-max-width);
    margin: 0 auto;
    padding: 0 var(--spacing-lg);
  }

  .section-padding {
    padding: var(--spacing-3xl) 0;
  }

  .text-center {
    text-align: center;
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: var(--color-surface);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--color-secondary);
    border-radius: var(--radius-md);
  }

  ::-webkit-scrollbar-thumb:hover {
    background: var(--color-primary);
  }

  @media (max-width: 1024px) {
    /* Hide scrollbar for tablets and mobile devices */
    ::-webkit-scrollbar {
      display: none;
      width: 0;
      background: transparent;
    }

    * {
      scrollbar-width: none;
      -ms-overflow-style: none;
    }
  }

  /* Focus styles for accessibility — keyboard only */
  *:focus {
    outline: none;
  }

  *:focus-visible {
    outline: 2px solid var(--color-primary);
    outline-offset: 2px;
  }

  /* Selection styles */
  ::selection {
    background-color: var(--color-primary);
    color: var(--color-white);
  }
`;
