import { useLanguage } from "common/LanguageProvider";
import { translations } from "content/translations";

/** @returns {import("../types").Translations} */
const useContent = () => {
  const { language } = useLanguage();
  return translations[language] || translations.English;
};

export default useContent;
