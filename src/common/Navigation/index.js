import {
  DevWrapper,
  MenuContainer,
  StyledList,
  StyledListItem,
  StyledScrollLink,
  TopRow,
} from "./styled";
import { menuItems } from "./menuItems";
import { LanguageSwitch } from "../../common/LanguageSwitch";
import DarkModeToggle from "../../common/DarkModeToggle";
import { useDispatch, useSelector } from "react-redux";
import { selectLanguage, setLanguage } from "../../Redux/languageSlice";
import { Link } from "react-scroll";
import { useEffect, useState } from "react";
import { FaEnvelope, FaHome, FaProjectDiagram, FaUser } from "react-icons/fa";
import { themes } from "../../themes";
import { selectContactVisibility } from "../../Redux/generalSlice";

const Navigation = () => {
  const breakpointXL = parseInt(themes.breakpoint.xl2, 10);

  const isContactVisible = useSelector(selectContactVisibility);
  const language = useSelector(selectLanguage);
  const dispatch = useDispatch();

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClick = () => {
    dispatch(setLanguage("English"));
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
    <StyledList>
      <TopRow>
        <LanguageSwitch />
        <DarkModeToggle />
      </TopRow>
      <Link
        activeClass="active"
        to={menuItems[language][0].name.toLowerCase()}
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

      <MenuContainer>
        {menuItems[language].map((item, index) => {
          const isContact = index === menuItems[language].length - 1;
          const forceActive = isContact && isContactVisible;
          return (
            <StyledScrollLink
              activeClass="active"
              className={forceActive ? "active" : undefined}
              $isContactVisible={getActiveClass(index)}
              to={item.name.toLowerCase()}
              spy={true}
              smooth={true}
              offset={item.offset}
              duration={700}
              key={index}
            >
              <StyledListItem key={index}>
                {windowWidth < breakpointXL ? getIcon(item.name) : item.name}
              </StyledListItem>
            </StyledScrollLink>
          );
        })}
      </MenuContainer>
    </StyledList>
  );
};

export default Navigation;
