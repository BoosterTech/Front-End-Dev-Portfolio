import {
  DevWrapper,
  MenuContainer,
  StyledList,
  StyledListItem,
  StyledScrollLink,
} from "./styled";
import { menuItems } from "./menuItems";
import { LanguageSwitch } from "../../common/LanguageSwitch";
import { useSelector } from "react-redux";
import { selectLanguage } from "../../Redux/languageSlice";
import { Link } from "react-scroll";
import { useEffect, useState } from "react";
import { FaEnvelope, FaHome, FaProjectDiagram, FaUser } from "react-icons/fa";

const Navigation = () => {
  const language = useSelector(selectLanguage);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const activeLinks = document.querySelectorAll(".active");
      activeLinks.forEach((link) => {
        // Check if the link's target section is not in view
        const targetSection = document.getElementById(
          link.getAttribute("to")
        );
        if (targetSection) {
          const rect = targetSection.getBoundingClientRect();
          if (rect.top < 0 || rect.bottom > window.innerHeight) {
            // If the target section is not in view, remove the active class
            link.classList.remove("active");
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <StyledList>
      <LanguageSwitch />
      <Link
        activeClass="active"
        to={menuItems[language][0].toLowerCase()}
        spy={true}
        smooth={true}
        offset={-121}
        duration={700}
        key={1}
      >
        <DevWrapper>
          <span>Derek.dev</span>
        </DevWrapper>
      </Link>

      <MenuContainer>
        {menuItems[language].map((item, index) => (
          <StyledScrollLink
            activeClass="active"
            to={item.toLowerCase()}
            spy={true}
            smooth={true}
            offset={
              windowWidth < 600 && index === menuItems[language].length - 4
                ? -120
                : index === menuItems[language].length - 1
                ? -600
                : -100
            }
            duration={700}
            key={index}
          >
            <StyledListItem key={index}>
              {windowWidth < 1024 ? getIcon(item) : item}
            </StyledListItem>
          </StyledScrollLink>
        ))}
      </MenuContainer>
    </StyledList>
  );
};

export default Navigation;
