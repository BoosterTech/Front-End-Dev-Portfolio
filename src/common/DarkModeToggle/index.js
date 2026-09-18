import React, { useState, useEffect } from "react";

import {
  ToggleContainer,
  ToggleWrapper,
  ToggleSlider,
  ToggleIcon,
  ToggleLabel,
} from "./styled";

const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.setAttribute("data-theme", "dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);

    if (newTheme) {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <ToggleContainer>
      <ToggleLabel>Light</ToggleLabel>
      <ToggleWrapper
        $isDark={isDark}
        onClick={toggleTheme}
        data-testid="dark-mode-toggle"
        role="switch"
        aria-checked={isDark}
        aria-label="Toggle dark mode"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            toggleTheme();
          }
        }}
      >
        <ToggleSlider $isDark={isDark}>
          <ToggleIcon>{isDark ? "🌙" : "☀️"}</ToggleIcon>
        </ToggleSlider>
      </ToggleWrapper>
      <ToggleLabel>Dark</ToggleLabel>
    </ToggleContainer>
  );
};

export default DarkModeToggle;
