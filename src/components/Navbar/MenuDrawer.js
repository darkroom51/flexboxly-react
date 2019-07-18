import React from "react";
import styled from "styled-components";
import StyledIconButton from "../common/StyledIconButton";
import Icon from "../../assets/icons/cancel.svg";

const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(255, 255, 255, 0.8);
  z-index: 100;
`;

const StyledDrawer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: 300px;
  padding: 20px 10px;
  background-color: rgba(255, 255, 255, 1);
  box-shadow: ${({ theme }) => theme.lightShadow};
  z-index: 101;
`;

const DummyMenu = styled.ul`
  list-style: none;
  padding:0;
  margin:0;
  margin-top: 5rem;

  li {
    font-size: 1.3em;
    width:100%;
    margin: 5px 0;
    padding: 10px;
  }

  li:hover {
    background: #efefef;
  }
`;

const MenuDrawer = ({ menuOpened, toggleMenu }) => {
  if (menuOpened) {
    return (
      <StyledOverlay>
        <StyledDrawer>
          <StyledIconButton onClick={toggleMenu} style={{float:'right'}}>
            <img src={Icon} alt="Open Menu" />
          </StyledIconButton>
          <DummyMenu>
            <li>Home</li>
            <li>Latest</li>
            <li>Contact</li>
            <li>About</li>
          </DummyMenu>
        </StyledDrawer>
      </StyledOverlay>
    );
  }

  return null;
};

export default MenuDrawer;
