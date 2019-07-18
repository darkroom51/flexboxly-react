// import React from "react";
import styled from "styled-components";

const StyledIconButton = styled.button`
  display: inline-block;
  background: transparent;
  border: none;
  width: 48px;
  height: 48px;
  color: ${({ theme }) => theme.mainBalck};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  img {
    width: 62%;
  }
`;

export default StyledIconButton;
