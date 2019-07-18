import React, { useContext } from "react";
import { AppContext } from "../../context";
import StyledIconButton from "../common/StyledIconButton";
import Hamburger from "../../assets/icons/menu.svg";

const MenuButton = () => {
  const { toggleMenu } = useContext(AppContext);

  return <StyledIconButton onClick={toggleMenu}>
    <img src={Hamburger} alt="Open Menu" />
  </StyledIconButton>;
};

export default MenuButton;
