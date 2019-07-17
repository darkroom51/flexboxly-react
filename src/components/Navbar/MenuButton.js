import React, { useContext } from "react";
import { AppContext } from "../../context";

const MenuButton = () => {
  const { toggleMenu } = useContext(AppContext);

  return <button onClick={toggleMenu}>H</button>;
};

export default MenuButton;
