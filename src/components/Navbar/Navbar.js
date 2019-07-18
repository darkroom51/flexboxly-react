import React, { useContext } from "react";
import { AppContext } from "../../context";
import styled from 'styled-components';
import LeftBtn from "./LeftBtn";
import Logo from "./Logo";
import RightBtn from "./RightBtn";
import MenuDrawer from "./MenuDrawer";

const StyledHeader = styled.header`
  position: absolute;
  left: 0;
  top: 0;
  padding: 0 20px;
  width: 100%;
  height: ${({ theme }) => theme.menuOffset};
  background-color: ${({ theme }) => theme.mainWhite};
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Navbar = () => {
  const { page, menuOpened, toggleMenu } = useContext(AppContext);

  return (
    <StyledHeader>
      <LeftBtn page={page} />
      <Logo />
      <RightBtn page={page} />
      <MenuDrawer menuOpened={menuOpened} toggleMenu={toggleMenu} />
    </StyledHeader>
  );
};

export default Navbar;
