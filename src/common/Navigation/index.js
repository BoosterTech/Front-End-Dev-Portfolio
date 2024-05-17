import MobileMenu from "./MobileMenu";
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

const Navigation = () => {
  const language = useSelector(selectLanguage);
  return (
    <StyledList>
      <LanguageSwitch />
      <DevWrapper>
        <span>Derek.dev</span>
      </DevWrapper>

      <PCmenuContainer>
        {menuItems[language].map((item, index) => (
          <StyledListItem key={index}>{item}</StyledListItem>
        ))}
      </PCmenuContainer>
      {/* <MobileMenu items={menuItems} /> */}
    </StyledList>
  );
};

export default Navigation;
