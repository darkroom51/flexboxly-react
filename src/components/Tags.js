import React from "react";
import styled from 'styled-components';

const tagsMockup = [
  "#TechDesign",
  "#Healthcare",
  "#Future"
];

const StyledList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: block;
  overflow: hidden;
  margin: 2rem 0;

  li {
    display: inline-block;
    line-height: 1.6em;
    font-family: ${({ theme }) => theme.fontSans};
    margin-right: 2rem;
    cursor: pointer;
  }
`;

const Tags = () => {
  return (
      <StyledList>
        {tagsMockup.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </StyledList>
  );
};

export default Tags;
