import React from "react";

const MenuDrawer = ({ menuOpened }) => {
  if (menuOpened) {
    return <div>hello menu</div>;
  }

  return null;
};

export default MenuDrawer;
