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
  animation-duration: .5s;
  animation-name: fadein;

  @keyframes fadein {
    from {
      opacity:0;
    }
    to {
      opacity: 100%;
    }
  }

  img {
    width: 70%;
  }
`;

export default StyledIconButton;
