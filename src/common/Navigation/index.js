import {
  DevWrapper,
  MenuContainer,
  StyledList,
  StyledListItem,
  StyledScrollLink,
} from "./styled";
import { menuItems } from "./menuItems";
import { LanguageSwitch } from "../../common/LanguageSwitch";
import { useDispatch, useSelector } from "react-redux";
import { selectLanguage, setLanguage } from "../../Redux/languageSlice";
import { Link } from "react-scroll";
import { useEffect, useState } from "react";
import { FaEnvelope, FaHome, FaProjectDiagram, FaUser } from "react-icons/fa";
import { themes } from "../../themes";

const Navigation = () => {
  const breakpointXL = parseInt(themes.breakpoint.xl, 10);
  const breakpointMD = parseInt(themes.breakpoint.md, 10);

  const language = useSelector(selectLanguage);
  const dispatch = useDispatch();

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleClick = () => {
    dispatch(setLanguage("English"));
  };

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
        offset={-120}
        duration={700}
        key={1}
        onClick={handleClick}
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
              windowWidth < breakpointMD &&
              index === menuItems[language].length - 4
                ? -120
                : index === menuItems[language].length - 1
                ? -745
                : -100
            }
            duration={700}
            key={index}
          >
            <StyledListItem key={index}>
              {windowWidth < breakpointXL ? getIcon(item) : item}
            </StyledListItem>
          </StyledScrollLink>
        ))}
      </MenuContainer>
    </StyledList>
  );
};

export default Navigation;
