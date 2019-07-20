import React, { useState } from "react";
import styled, { css } from "styled-components";

const StyledImage = styled.img`
  display: block;
  width: 100%;
  transition: all 0.3s ease;
  cursor: pointer;
  @media ${({ theme }) => theme.mq.small} {
    height: 40vh;
    object-fit: cover;
  }

  ${({ lightBox }) =>
    lightBox &&
    css`
      opacity: 0;
    `}
`;

const LightBoxImage = styled.img`
  display: block;
  width: 80%;
  visibility: hidden;
  opacity: 0;
  position: absolute;
  z-index: 1001;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.3s ease;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);

  ${({ lightBox }) =>
    lightBox &&
    css`
      visibility: visible;
      opacity: 1;
      @media (orientation: portrait) {
        width: 100%;
        height: auto;
      }
      @media (orientation: landscape) {
        width: auto;
        height: 90%;
      }
    `}
`;

const LightBoxOverlay = styled.div`
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.7);
  transition: all 0.2s linear;
  visibility: ${({ lightBox }) => (lightBox ? "visible" : "hidden")};
  opacity: ${({ lightBox }) => (lightBox ? 1 : 0)};
`;

const Lightbox = ({ image, alt }) => {
  let [opened, setOpened] = useState(false);
  const openLightBox = () => {
    return setOpened(true);
  };
  const closeLightBox = () => {
    return setOpened(false);
  };

  return (
    <>
      <StyledImage
        src={image}
        alt={alt}
        lightBox={opened}
        onClick={openLightBox}
      />
      <LightBoxImage src={image} alt={alt} lightBox={opened} />
      <LightBoxOverlay lightBox={opened} onClick={closeLightBox} />
    </>
  );
};

export default Lightbox;
