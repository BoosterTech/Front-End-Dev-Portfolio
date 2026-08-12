import { translations } from "content/translations";
import { useSelector } from "react-redux";
import { selectLanguage } from "slices/languageSlice";

/** @returns {import("../types").Translations} */
const useContent = () => {
  const language = useSelector(selectLanguage);
  return translations[language] || translations.English;
};

export default useContent;
