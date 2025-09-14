import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import slowEntry from "./common/slowEntry";

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

:root {
  /* Light theme colors */
  --color-primary: #2563eb;
  --color-primary-hover: #1d4ed8;
  --color-secondary: #64748b;
  --color-accent: #06b6d4;
  --color-background: #ffffff;
  --color-surface: #f8fafc;
  --color-text-primary: #0f172a;
  --color-text-secondary: #475569;
  --color-border: #e2e8f0;
  --color-shadow: rgba(0, 0, 0, 0.1);
  
  /* Dark theme colors */
  --color-dark-primary: #3b82f6;
  --color-dark-primary-hover: #2563eb;
  --color-dark-secondary: #94a3b8;
  --color-dark-accent: #22d3ee;
  --color-dark-background: #0f172a;
  --color-dark-surface: #1e293b;
  --color-dark-text-primary: #f1f5f9;
  --color-dark-text-secondary: #cbd5e1;
  --color-dark-border: #334155;
  --color-dark-shadow: rgba(0, 0, 0, 0.3);
  
  /* Spacing */
  --spacing-xxs: 0.125rem;
  --spacing-xs: 0.25rem;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 1.5rem;
  --spacing-xl: 2rem;
  --spacing-2xl: 3rem;
  --spacing-3xl: 4rem;
  
  /* Border radius */
  --radius-sm: 0.375rem;
  --radius-md: 0.5rem;
  --radius-lg: 0.75rem;
  --radius-xl: 1rem;
  
  /* Shadows */
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  
  /* Transitions */
  --transition-fast: 150ms ease-in-out;
  --transition-normal: 250ms ease-in-out;
  --transition-slow: 350ms ease-in-out;
}

[data-theme="dark"] {
  --color-primary: var(--color-dark-primary);
  --color-primary-hover: var(--color-dark-primary-hover);
  --color-secondary: var(--color-dark-secondary);
  --color-accent: var(--color-dark-accent);
  --color-background: var(--color-dark-background);
  --color-surface: var(--color-dark-surface);
  --color-text-primary: var(--color-dark-text-primary);
  --color-text-secondary: var(--color-dark-text-secondary);
  --color-border: var(--color-dark-border);
  --color-shadow: var(--color-dark-shadow);
}

html {
  box-sizing: border-box;
  scroll-behavior: smooth;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

body {
  background: linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 50%, #bdbdbd 100%);
  /* fallback for dark mode */
  color: var(--color-text-primary);
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.6;
  max-width: 100%;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  animation: ${slowEntry} 0.6s ease-out;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Dark mode: override with solid color */
[data-theme="dark"] body {
  background: var(--color-background);
  transition: background-color var(--transition-normal), color var(--transition-normal);
}

h1, h2, h3, h4, h5, h6 {
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
  max-width: 1200px;
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
@media (max-width: 600px) {
  ::-webkit-scrollbar {
    display: none;
    width: 0 !important;
    background: transparent !important;
  }
  html {
    scrollbar-width: none !important;
    scrollbar-color: transparent transparent !important;
  }
  body {
    -ms-overflow-style: none !important; /* IE and Edge */
    overflow: -moz-scrollbars-none !important; /* Old Firefox */
  }
}
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: var(--color-surface);
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 50%, #06b6d4 100%);
  border-radius: var(--radius-md);
  box-shadow: 0 2px 6px rgba(0,0,0,0.08);
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(135deg, #1d4ed8 0%, #2563eb 100%);
}

[data-theme="dark"] ::-webkit-scrollbar-track {
  background: var(--color-dark-surface);
}
[data-theme="dark"] ::-webkit-scrollbar-thumb {
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 50%, #22d3ee 100%);
}

html {
  scrollbar-width: thin;
  scrollbar-color: #2563eb #f8fafc;
}
[data-theme="dark"] html {
  scrollbar-color: #3b82f6 #1e293b;
}

/* Focus styles for accessibility */
*:focus {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}

/* Selection styles */
::selection {
  background-color: var(--color-primary);
  color: white;
}
`;

export const Main = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-lg);

  @media (max-width: ${({ theme }) => theme.breakpoint.xl2}) {
    max-width: 100vw;
    width: 100vw;
    padding: 0 var(--spacing-md);
  }
`;
