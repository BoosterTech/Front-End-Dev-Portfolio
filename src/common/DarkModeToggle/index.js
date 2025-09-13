import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const slideToggle = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(24px);
  }
`;

const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
`;

const ToggleWrapper = styled.div`
  position: relative;
  width: 52px;
  height: 28px;
  background: ${props => props.$isDark ? 'var(--color-primary)' : 'var(--color-secondary)'};
  border-radius: 14px;
  cursor: pointer;
  transition: background var(--transition-normal);
  border: 2px solid var(--color-border);
  
  &:hover {
    box-shadow: var(--shadow-md);
  }
`;

const ToggleSlider = styled.div`
  position: absolute;
  top: 2px;
  left: 2px;
  width: 20px;
  height: 20px;
  background: white;
  border-radius: 50%;
  transition: transform var(--transition-normal);
  transform: ${props => props.$isDark ? 'translateX(24px)' : 'translateX(0)'};
  box-shadow: var(--shadow-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
`;

const ToggleIcon = styled.span`
  font-size: 12px;
  transition: opacity var(--transition-fast);
`;

const ToggleLabel = styled.span`
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--color-text-secondary);
  user-select: none;
  
  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    display: none;
  }
`;

const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    
    if (newTheme) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <ToggleContainer>
      <ToggleLabel>Light</ToggleLabel>
      <ToggleWrapper $isDark={isDark} onClick={toggleTheme}>
        <ToggleSlider $isDark={isDark}>
          <ToggleIcon>
            {isDark ? '🌙' : '☀️'}
          </ToggleIcon>
        </ToggleSlider>
      </ToggleWrapper>
      <ToggleLabel>Dark</ToggleLabel>
    </ToggleContainer>
  );
};

export default DarkModeToggle;

