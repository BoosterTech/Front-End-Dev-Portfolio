import { MenuItem, MenuList, MobileMenuContainer } from "./styled";

import { FaHome, FaUser, FaProjectDiagram, FaEnvelope } from "react-icons/fa";

const MobileMenu = () => {
  return (
    <MobileMenuContainer>
      <MenuList>
        <MenuItem>
          {" "}
          <FaHome />
        </MenuItem>

        <MenuItem>
          {" "}
          <FaUser />
        </MenuItem>
        <MenuItem>
          {" "}
          <FaProjectDiagram />
        </MenuItem>
        <MenuItem>
          {" "}
          <FaEnvelope />
        </MenuItem>
      </MenuList>
    </MobileMenuContainer>
  );
};

export default MobileMenu;
