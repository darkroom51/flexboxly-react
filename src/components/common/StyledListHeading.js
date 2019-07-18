import styled from "styled-components";

const StyledListHeading = styled.h2`
  font-family: ${({ theme }) => theme.fontSans};
  font-weight: 500;
  text-transform: capitalize;
  font-size: 1.5em;
  color: ${({ theme }) => theme.mainBlack};
  margin-bottom: 2rem;
  transition: ${({ theme }) => theme.mainTransition};


  a & {
    &:hover {
      opacity: 0.7;
    }
  }

`;

export default StyledListHeading;