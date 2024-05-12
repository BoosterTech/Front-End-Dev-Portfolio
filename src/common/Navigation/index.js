import MobileMenu from "./MobileMenu";
import {
  DevWrapper,
  PCmenuContainer,
  StyledList,
  StyledListItem,
} from "./styled";
import { menuItems } from "./menuItems";
import { LanguageSwitch } from "../../common/LanguageSwitch";

const Navigation = () => {
  return (
    <StyledList>
      <LanguageSwitch />
      <DevWrapper>
        <span>Derek.dev</span>
      </DevWrapper>

      <PCmenuContainer>
        {menuItems.map((item, index) => (
          <StyledListItem key={index}>{item}</StyledListItem>
        ))}
      </PCmenuContainer>
      {/* <MobileMenu items={menuItems} /> */}
    </StyledList>
  );
};

export default Navigation;
