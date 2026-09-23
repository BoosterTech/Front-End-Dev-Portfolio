import { useThemeMode } from "common/ThemeModeProvider";
import useContent from "common/useContent";

import { ThemeButton } from "./styled";
import { ThemeIcon } from "./ThemeIcon";

const DarkModeToggle = () => {
  const { isDark, toggleTheme } = useThemeMode();
  const { nav } = useContent();

  return (
    <ThemeButton
      onClick={toggleTheme}
      onMouseDown={(e) => e.stopPropagation()}
      data-testid="dark-mode-toggle"
      role="switch"
      aria-checked={isDark}
      aria-label={nav.themeToggleLabel}
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
