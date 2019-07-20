import React from "react";
import styled from "styled-components";
import StyledIconButton from "../common/StyledIconButton";
import Icon from "../../assets/icons/cancel.svg";
import Logo from "./Logo";

const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(255, 255, 255, 0.8);
  z-index: 100;
  transition: all 0.08s linear;
  visibility: ${({ menuOpened }) => (menuOpened ? "visible" : "hidden")};
  opacity: ${({ menuOpened }) => (menuOpened ? 1 : 0)};
`;

const StyledDrawer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: 70vw;
  min-width: 300px;
  max-width: 600px;
  padding: 20px 10px;
  background-color: rgba(255, 255, 255, 1);
  box-shadow: ${({ theme }) => theme.lightShadow};
  z-index: 101;
  transition: transform 0.2s linear;
  transform: translateX(${({ menuOpened }) => (menuOpened ? "0" : "-105%")});
`;

const StyledTopbar = styled.div`
  display: flex;
  align-items: center;
 `;

const DummyMenu = styled.ul`
  list-style: none;
  margin-top: 2rem;

  li {
    font-family: ${({theme})=>theme.fontSans};
    font-size: 1.3em;
    font-weight: 700;
    width: 100%;
    margin: 5px 0;
    padding: 10px;
  }

  li:hover {
    background: #efefef;
  }
`;

const MenuDrawer = ({ menuOpened, toggleMenu }) => {
  return (
    <>
      <StyledDrawer menuOpened={menuOpened}>
        <StyledTopbar>
          <StyledIconButton onClick={toggleMenu}>
            <img src={Icon} alt="Open Menu" />
          </StyledIconButton>
          <Logo />
        </StyledTopbar>
        <DummyMenu>
          <li>Home</li>
          <li>Latest</li>
          <li>About</li>
          <li>Contact</li>
        </DummyMenu>
      </StyledDrawer>
      <StyledOverlay menuOpened={menuOpened} onClick={toggleMenu} />
    </>
  );
};

export default MenuDrawer;
