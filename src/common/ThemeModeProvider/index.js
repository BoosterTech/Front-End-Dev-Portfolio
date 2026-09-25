import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { themeBackground } from "styles/tokens";

const ThemeModeContext = createContext({
  isDark: false,
  toggleTheme: () => {},
});

export const ThemeModeProvider = ({ children, initialIsDark }) => {
  const [isDark, setIsDark] = useState(() => {
    if (typeof initialIsDark === "boolean") return initialIsDark;
    const saved = localStorage.getItem("theme");
    if (saved) return saved === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
      localStorage.setItem("theme", "light");
    }
    const themeColor = themeBackground[isDark ? "dark" : "light"];
    document
      .querySelectorAll('meta[name="theme-color"]')
      .forEach((meta) => meta.setAttribute("content", themeColor));
  }, [isDark]);

  const toggleTheme = useCallback(() => setIsDark((prev) => !prev), []);

  return (
    <ThemeModeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeModeContext.Provider>
  );
};

export const useThemeMode = () => useContext(ThemeModeContext);
