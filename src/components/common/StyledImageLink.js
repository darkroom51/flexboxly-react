import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledImageLink = styled(Link)`
  display: block;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${({ theme }) => theme.mainMotif};
    transition: ${({ theme }) => theme.mainTransition};
    opacity: 0;
  }
  &:hover:after {
    opacity: 0.3;
  }
`;

export default StyledImageLink;