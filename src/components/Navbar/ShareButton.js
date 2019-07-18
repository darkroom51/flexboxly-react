import React from "react";
import StyledIconButton from "../common/StyledIconButton";
import Icon from "../../assets/icons/share.svg";

const SearchButton = () => {
  return <StyledIconButton>
    <img src={Icon} alt="Open Share Panel" />
  </StyledIconButton>;
};

export default SearchButton;
