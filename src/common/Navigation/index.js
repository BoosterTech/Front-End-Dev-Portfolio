import MobileMenu from "./MobileMenu";
import {
  FirstListItem,
  PCmenuContainer,
  StyledList,
  StyledListItem,
} from "./styled";
import { menuItems } from "./menuItems";
import { LanguageSwitch } from "../LanguageSwitch";

const Navigation = () => {
  return (
    <StyledList>
      <FirstListItem>
        <span>Derek.dev</span>
        <LanguageSwitch />
      </FirstListItem>

      <PCmenuContainer>
        {menuItems.map((item, index) => (
          <StyledListItem key={index}>{item}</StyledListItem>
        ))}
      </PCmenuContainer>
      <MobileMenu items={menuItems} />
    </StyledList>
  );
};

export default Navigation;
