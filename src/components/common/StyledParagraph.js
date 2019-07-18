import styled from "styled-components";

const StyledParagraph = styled.p`
  font-size: 1em;
  line-height: 1.6;
  font-family: ${({ theme }) => theme.fontSerif};
  font-weight: 400;
  color: inherit;
  margin-bottom: 1rem;
`;

export default StyledParagraph;