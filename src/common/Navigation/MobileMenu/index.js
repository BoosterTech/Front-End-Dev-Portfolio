import { useState } from "react";
import {
  HamburgerIcon,
  MenuButton,
  MenuItem,
  MenuList,
  MobileMenuContainer,
} from "./styled";

const MobileMenu = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <MobileMenuContainer>
      {" "}
      <MenuButton onClick={toggleMenu}>
        <HamburgerIcon isOpen={isOpen} />
        <HamburgerIcon isOpen={isOpen} />
        <HamburgerIcon isOpen={isOpen} />
      </MenuButton>
      {isOpen && (
        <MenuList>
          {items.map((item, index) => (
            <MenuItem key={index}>{item}</MenuItem>
          ))}
        </MenuList>
      )}
    </MobileMenuContainer>
  );
};

export default MobileMenu;
