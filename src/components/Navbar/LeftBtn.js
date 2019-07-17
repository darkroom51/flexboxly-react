import React from "react";
import MenuButton from "./MenuButton";
import BackButton from "./BackButton";

const LeftBtn = ({ page }) => {
  return page === "home" ? <MenuButton /> : <BackButton />;
};

export default LeftBtn;
