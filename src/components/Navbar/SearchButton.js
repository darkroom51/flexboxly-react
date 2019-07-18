import React from "react";
import StyledIconButton from "../common/StyledIconButton";
import Icon from "../../assets/icons/search.svg";

const SearchButton = () => {
  return <StyledIconButton>
    <img src={Icon} alt="Open Search Field" />
  </StyledIconButton>;
};

export default SearchButton;
