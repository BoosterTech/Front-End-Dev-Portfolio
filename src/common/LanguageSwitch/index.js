import { useLanguage } from "common/LanguageProvider";
import IRLIcon from "images/englishIcon.webp";
import PLIcon from "images/PolandIcon.png";
import ESPIcon from "images/SpainIcon.png";

import { Wrapper, Icon, IconsWrapper } from "./styled";

export const LanguageSwitch = () => {
  const { language, setLanguage } = useLanguage();

  const handleClick = (language) => () => {
    setLanguage(language);
  };

  return (
    <Wrapper role="group" aria-label="Language selector">
      <IconsWrapper>
        <Icon
          src={IRLIcon}
          alt="English"
          onClick={handleClick("English")}
          $isActive={language === "English"}
          role="button"
          tabIndex={0}
          aria-pressed={language === "English"}
          aria-label="Switch to English"
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              setLanguage("English");
            }
          }}
        />
        <Icon
          src={PLIcon}
          alt="Polish"
          onClick={handleClick("Polish")}
          $isActive={language === "Polish"}
          role="button"
          tabIndex={0}
          aria-pressed={language === "Polish"}
          aria-label="Switch to Polish"
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              setLanguage("Polish");
            }
          }}
        />
        <Icon
          src={ESPIcon}
          alt="Spanish"
          onClick={handleClick("Spanish")}
          $isActive={language === "Spanish"}
          role="button"
          tabIndex={0}
          aria-pressed={language === "Spanish"}
          aria-label="Switch to Spanish"
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              setLanguage("Spanish");
            }
          }}
        />
      </IconsWrapper>
    </Wrapper>
  );
};
