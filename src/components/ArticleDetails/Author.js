import React from "react";
import styled from "styled-components";

const StyledAuthor = styled.div`
  margin: 2rem 0 4rem;
  display: flex;
  align-items: center;
`;

const StyledImage = styled.img`
  display: block;
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const StyledAuthorName = styled.p`
  font-size: 1.3em;
  margin-left: 1.5rem;
  color: ${({ theme }) => theme.grey6};

  a {
    display: inline-block;
    position: relative;
    color: ${({ theme }) => theme.mainBlack};
    margin-left: 1rem;

    &:after {
      content: "";
      position: absolute;
      bottom: -6px;
      left: 0;
      right: 0;
      height: 3px;
      background-color: ${({ theme }) => theme.grey9};
    }

    &:hover {
      color: ${({ theme }) => theme.grey6};
    }
  }
`;

const Author = ({ name, img }) => {
  return (
    <StyledAuthor>
      <StyledImage
        src={img ? require(`../../assets/images/${img}`) : null}
        alt={name}
      />
      <StyledAuthorName>
        by <a href="#" rel="author" target="_blank">{name}</a>
      </StyledAuthorName>
    </StyledAuthor>
  );
};

export default Author;
