// import MobileMenu from "./MobileMenu";
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

const Navigation = () => {
  const language = useSelector(selectLanguage);
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
            <StyledListItem key={index}>{item}</StyledListItem>
          </StyledScrollLink>
        ))}
      </PCmenuContainer>
      {/* <MobileMenu items={menuItems} /> */}
    </StyledList>
  );
};

export default Navigation;
