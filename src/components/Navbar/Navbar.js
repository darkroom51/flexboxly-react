import React, { useContext } from "react";
import { AppContext } from "../../context";
import LeftBtn from "./LeftBtn";
import Logo from "./Logo";
import RightBtn from "./RightBtn";
import MenuDrawer from "./MenuDrawer";

const Navbar = () => {
  const { page, menuOpened } = useContext(AppContext);

  return (
    <div style={{ background: "silver" }}>
      <LeftBtn page={page} />
      <Logo />
      <RightBtn page={page} />
      <MenuDrawer menuOpened={menuOpened} />
    </div>
  );
};

export default Navbar;
