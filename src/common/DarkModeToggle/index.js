import { useEffect, useState } from "react";

import { ThemeButton } from "./styled";
import { ThemeIcon } from "./ThemeIcon";

const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
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
    <ThemeButton
      onClick={toggleTheme}
      onMouseDown={(e) => e.stopPropagation()}
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
      <ThemeIcon $isDark={isDark} />
    </ThemeButton>
  );
};

export default DarkModeToggle;
