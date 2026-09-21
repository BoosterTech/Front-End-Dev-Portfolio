import { useContactVisibility } from "common/ContactVisibilityProvider";
import DarkModeToggle from "common/DarkModeToggle";
import { useLanguage } from "common/LanguageProvider";
import { LanguageSwitch } from "common/LanguageSwitch";
import { useEffect, useRef, useState } from "react";
import { FaEnvelope, FaHome, FaProjectDiagram, FaUser } from "react-icons/fa";
import { Link } from "react-scroll";

import { HamburgerIcon } from "./HamburgerIcon";
import { menuItems } from "./menuItems";
import {
  DevWrapper,
  HamburgerButton,
  MenuContainer,
  MobileMenuBackdrop,
  MobileNavItem,
  MobileMenuPanel,
  StyledList,
  StyledListItem,
  StyledScrollLink,
  TopRow,
} from "./styled";

const Navigation = () => {
  const { language, setLanguage } = useLanguage();
  const { isContactVisible } = useContactVisibility();

  const [isCompact, setIsCompact] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia(`(max-width: ${1100 - 1}px)`).matches
  );
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef(null);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateScroll = () => {
      if (window.innerWidth >= 768) {
        setHidden(false);
        ticking = false;
        return;
      }

      const currentY = window.scrollY;
      const delta = currentY - lastScrollY;

      if (currentY < 10) {
        setHidden(false);
      } else if (delta > 4) {
        setHidden(true);
      } else if (delta < -4) {
        setHidden(false);
      }

      lastScrollY = currentY;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScroll);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    const updateNavHeight = () => {
      const height = nav.offsetHeight;
      document.documentElement.style.setProperty(
        "--nav-height-actual",
        `${height}px`
      );
    };

    updateNavHeight();

    const ro = new ResizeObserver(updateNavHeight);
    ro.observe(nav);

    window.addEventListener("resize", updateNavHeight);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", updateNavHeight);
    };
  }, []);

  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${1100 - 1}px)`);
    const handler = (e) => setIsCompact(e.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    const mql = window.matchMedia(`(min-width: 768px)`);
    const handler = () => setIsMenuOpen(false);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    }
    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const handleClick = () => {
    setLanguage("English");
  };

  const getActiveClass = (index) => {
    if (isContactVisible && menuItems[language].length - 1 === index)
      return true;
  };

  const getIcon = (item) => {
    switch (item) {
      case "Home":
      case "Strona główna":
      case "Inicio":
        return <FaHome />;
      case "About me":
      case "O mnie":
      case "Acerca de":
        return <FaUser />;
      case "Projects":
      case "Projekty":
      case "Proyectos":
        return <FaProjectDiagram />;
      case "Contact":
      case "Kontakt":
      case "Contacto":
        return <FaEnvelope />;
      default:
        return null;
    }
  };

  return (
    <StyledList
      ref={navRef}
      className={hidden ? "nav-hidden" : ""}
      aria-label="Main navigation"
    >
      <TopRow>
        <LanguageSwitch onOpen={() => setIsMenuOpen(false)} />
        <DarkModeToggle />
      </TopRow>
      <Link
        activeClass="active"
        to={menuItems[language][0].slug}
        spy={true}
        smooth={true}
        offset={menuItems[language][0].offset}
        duration={700}
        key={1}
        onClick={handleClick}
      >
        <DevWrapper>
          <span>Derek.dev</span>
        </DevWrapper>
      </Link>

      <MenuContainer data-testid="desktop-menu">
        {menuItems[language].map((item, index) => {
          const isContact = index === menuItems[language].length - 1;
          const forceActive = isContact && isContactVisible;
          return (
            <StyledScrollLink
              activeClass="active"
              className={forceActive ? "active" : undefined}
              $isContactVisible={getActiveClass(index)}
              data-testid={`nav-link-${item.slug}`}
              to={item.slug}
              spy={true}
              smooth={true}
              offset={item.offset}
              duration={700}
              key={index}
            >
              <StyledListItem key={index}>
                {isCompact ? getIcon(item.name) : item.name}
              </StyledListItem>
            </StyledScrollLink>
          );
        })}
      </MenuContainer>
      <HamburgerButton
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle navigation menu"
        aria-expanded={isMenuOpen}
      >
        <HamburgerIcon $open={isMenuOpen} />
      </HamburgerButton>
      <MobileMenuBackdrop
        className={isMenuOpen ? "open" : ""}
        onClick={() => setIsMenuOpen(false)}
      />
      <MobileMenuPanel
        className={isMenuOpen ? "open" : ""}
        data-testid="mobile-menu"
      >
        {menuItems[language].map((item, index) => {
          const isContact = index === menuItems[language].length - 1;
          const forceActive = isContact && isContactVisible;
          return (
            <MobileNavItem
              activeClass="active"
              className={forceActive ? "active" : undefined}
              to={item.slug}
              spy={true}
              smooth={true}
              offset={item.offset}
              duration={700}
              key={index}
              onClick={() => setIsMenuOpen(false)}
            >
              {getIcon(item.name)}
              {item.name}
            </MobileNavItem>
          );
        })}
      </MobileMenuPanel>
    </StyledList>
  );
};

export default Navigation;
