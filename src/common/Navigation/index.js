// import MobileMenu from "./MobileMenu";
import {
  DevWrapper,
  PCmenuContainer,
  StyledList,
  StyledListItem,
} from "./styled";
import { menuItems } from "./menuItems";
import { LanguageSwitch } from "../../common/LanguageSwitch";
import { useSelector } from "react-redux";
import { selectLanguage } from "../../Redux/languageSlice";
import { Link } from "react-scroll";

const Navigation = () => {
  const language = useSelector(selectLanguage);
  return (
    <StyledList>
      <LanguageSwitch />
      <Link
        activeClass="active"
        to={menuItems[language][0].replace(/\s+/g, "").toLowerCase()} // convert item to lowercase and remove spaces
        spy={true}
        smooth={true}
        offset={-200}
        duration={1000}
        key={1}
      >
        <DevWrapper>
          <span>Derek.dev</span>
        </DevWrapper>
      </Link>

      <PCmenuContainer>
        {menuItems[language].map((item, index) => (
          <Link
            activeClass="active"
            to={item.toLowerCase()} // convert item to lowercase and remove spaces
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000}
            key={index}
          >
            <StyledListItem key={index}>{item}</StyledListItem>
          </Link>
        ))}
      </PCmenuContainer>
      {/* <MobileMenu items={menuItems} /> */}
    </StyledList>
  );
};

export default Navigation;
