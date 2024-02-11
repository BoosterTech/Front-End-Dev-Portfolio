import MobileMenu from "./MobileMenu";
import {
  FirstListItem,
  PCmenuContainer,
  StyledList,
  StyledListItem,
} from "./styled";
import { menuItems } from "./menuItems";

export const Navigation = () => {
  return (
    <StyledList>
      <FirstListItem>Derek.dev</FirstListItem>
      <PCmenuContainer>
        {menuItems.map((item, index) => (
          <StyledListItem key={index}>{item}</StyledListItem>
        ))}
      </PCmenuContainer>
      <MobileMenu items={menuItems} />
    </StyledList>
  );
};
