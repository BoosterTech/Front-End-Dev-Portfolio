import { createContext, useCallback, useContext, useEffect, useState } from "react";

const LANG_MAP = { English: "en", Polish: "pl", Spanish: "es" };

const LanguageContext = createContext({
  language: "English",
  setLanguage: () => {},
});

export const LanguageProvider = ({
  children,
  initialLanguage = "English",
}) => {
  const [language, setLanguage] = useState(initialLanguage);

  useEffect(() => {
    document.documentElement.lang = LANG_MAP[language] || "en";
  }, [language]);

  const set = useCallback((value) => setLanguage(value), []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage: set }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
