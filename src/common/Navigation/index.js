import {
  DevWrapper,
  PCmenuContainer,
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
        offset={-200}
        duration={700}
        key={1}
      >
        <DevWrapper>
          <span>Derek.dev</span>
        </DevWrapper>
      </Link>

      <PCmenuContainer>
        {menuItems[language].map((item, index) => (
          <StyledScrollLink
            activeClass="active"
            to={item.toLowerCase()}
            spy={true}
            smooth={true}
            offset={index === menuItems[language].length - 1 ? -620 : -70}
            duration={700}
            key={index}
          >
            <StyledListItem key={index}>
              {windowWidth < 1024 ? getIcon(item) : item}
            </StyledListItem>
          </StyledScrollLink>
        ))}
      </PCmenuContainer>
    </StyledList>
  );
};

export default Navigation;
