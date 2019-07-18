import styled from "styled-components";

const StyledArticleHeading = styled.h1`
  font-family: ${({ theme }) => theme.fontSerif};
  font-weight: 900;
  text-transform: capitalize;
  font-size: 2.1em;
  line-height: 1.2;
  font-style: italic;
  color: ${({ theme }) => theme.mainBlack};
  margin-bottom: 2rem;
  @media ${({ theme }) => theme.mq.small} {
    width: 70%;
  }
`;

export default StyledArticleHeading;
