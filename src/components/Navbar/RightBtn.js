import React from "react";
import SearchButton from "./SearchButton";
import ShareButton from "./ShareButton";

const RightBtn = ({ page }) => {
  return page === "home" ? <SearchButton /> : <ShareButton />;
};

export default RightBtn;
