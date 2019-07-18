import React from "react";
import styled from "styled-components";
import LogoSvg from "../../assets/icons/logo.svg";

const StyledLogo = styled.img`
  width: 15rem;
  margin-left: 1.5rem;
`;

const Logo = () => {
  return <StyledLogo src={LogoSvg} alt="The Flexboxly" />;
};

export default Logo;
