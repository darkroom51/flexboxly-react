import React from "react";
import styled from 'styled-components';
import SearchButton from "./SearchButton";
import ShareButton from "./ShareButton";

const StyledDiv = styled.div`
  margin-left: auto;
`;

const RightBtn = ({ page }) => {
  return <StyledDiv>
    {page === "home" ? <SearchButton /> : <ShareButton />}
  </StyledDiv>
};

export default RightBtn;
