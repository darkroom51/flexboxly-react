import React, { useContext } from "react";
import { AppContext } from "../../context";
import Hamburger from "../../assets/icons/menu.svg";

const MenuButton = () => {
  const { toggleMenu } = useContext(AppContext);

  return <button onClick={toggleMenu}>
    <img src={Hamburger} alt="" style={{width: '20px'}} />
  </button>;
};

export default MenuButton;
