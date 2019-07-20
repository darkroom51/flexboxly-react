import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import { AppContext } from "../../context";
import StyledIconButton from "../common/StyledIconButton";

const StyledMenuIcon = styled.div`
  &,
  &:before,
  &:after {
    display: block;
    width: 18px;
    height: 2px;
    background-color: #000;
    border-radius: 1px;
    position: absolute;
    transition: transform 0.5s ease;
    ${({ page }) => (page === "article" ? "transform: rotate(-180deg)" : null)};
  }

  &:before {
    content: "";
    top: -5px;
    ${({ page }) =>
      page === "article"
        ? "transform: translate3d(6px, 1px, 0) rotate(45deg) scale(0.7, 1)"
        : null};
  }
  &:after {
    content: "";
    bottom: -5px;
    ${({ page }) =>
      page === "article"
        ? "transform: translate3d(6px, -1px, 0) rotate(-45deg) scale(0.7, 1)"
        : null};
  }
`;

const AnimMenuButton = ({ page, history }) => {
  const { toggleMenu } = useContext(AppContext);
  const historyBack = () => history.goBack();

  return (
    <StyledIconButton onClick={page === "home" ? toggleMenu : historyBack}>
      <StyledMenuIcon page={page} />
    </StyledIconButton>
  );
};

export default withRouter(AnimMenuButton);
