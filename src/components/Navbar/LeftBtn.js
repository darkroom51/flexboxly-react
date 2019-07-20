import React from "react";
import AnimMenuButton from "./AnimMenuButton";
// import MenuButton from "./MenuButton";
// import BackButton from "./BackButton";

const LeftBtn = ({ page }) => {
  // return page === "home" ? <MenuButton /> : <BackButton />;
  return <AnimMenuButton page={page} />;
};

export default LeftBtn;
