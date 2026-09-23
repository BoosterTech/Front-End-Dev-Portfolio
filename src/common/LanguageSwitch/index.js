import { useLanguage } from "common/LanguageProvider";
import useContent from "common/useContent";
import IRLIcon from "images/englishIcon.webp";
import PLIcon from "images/PolandIcon.webp";
import ESPIcon from "images/SpainIcon.webp";
import { useEffect, useRef, useState } from "react";
import { FaGlobe } from "react-icons/fa";

import { Dropdown, DropdownItem, GlobeButton, Wrapper } from "./styled";

const languages = [
  { name: "English", flag: IRLIcon, code: "EN" },
  { name: "Polish", flag: PLIcon, code: "PL" },
  { name: "Spanish", flag: ESPIcon, code: "ES" },
];

export const LanguageSwitch = ({ onOpen }) => {
  const { language, setLanguage } = useLanguage();
  const { nav } = useContent();
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    const handleScroll = () => {
      setIsOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggle = () => {
    const next = !isOpen;
    setIsOpen(next);
    if (next && onOpen) onOpen();
  };

  const handleSelect = (lang) => {
    setLanguage(lang);
    setIsOpen(false);
  };

  return (
    <Wrapper ref={ref} role="group" aria-label={nav.languageGroupLabel}>
      <GlobeButton
        onClick={toggle}
        aria-label={nav.languageSelectLabel}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <FaGlobe />
      </GlobeButton>
      <Dropdown className={isOpen ? "open" : ""} role="listbox">
        {languages.map((lang) => (
          <DropdownItem
            key={lang.name}
            $isActive={language === lang.name}
            onClick={() => handleSelect(lang.name)}
            role="option"
            aria-selected={language === lang.name}
          >
            <img src={lang.flag} alt="" />
            {lang.name}
          </DropdownItem>
        ))}
      </Dropdown>
    </Wrapper>
  );
};
