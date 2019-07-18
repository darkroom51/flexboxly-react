import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import StyledListHeading from "../common/StyledListHeading";
import StyledListCategory from "../common/StyledListCategory";
import StyledParagraph from "../common/StyledParagraph";

const StyledArticle = styled.article`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row-reverse;
    margin-bottom: 4rem;
  }
  @media screen and (min-width: 1024px) {
    font-size: 1.2em;
  }
`;

const StyledContent = styled.div`
  @media screen and (min-width: 768px) {
    width: 50%;
    padding-right: 5vw;
  }
`;

const StyledImageContainer = styled.div`
  @media screen and (min-width: 768px) {
    width: 50%;
  }
`;

const StyledImage = styled.img`
  display: block;
  width: 100%;
`;

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

const StyledListTLDR = styled(StyledParagraph)`
  color: ${({ theme }) => theme.mainGrey};
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
  }
`;

const FeaturedArticle = ({ article }) => {
  return (
    <StyledArticle>
      <StyledImageContainer>
        <StyledImageLink to={`/articles/${article.id}`}>
          <StyledImage
            src={require(`../../assets/images/${article.featuredImg}`)}
            alt={article.title}
          />
        </StyledImageLink>
      </StyledImageContainer>
      <StyledContent>
        <StyledListCategory>{article.category}</StyledListCategory>
        <Link to={`/articles/${article.id}`}>
          <StyledListHeading>{article.title}</StyledListHeading>
        </Link>
        <StyledListTLDR>{article.tldr}</StyledListTLDR>
      </StyledContent>
    </StyledArticle>
  );
};

export default FeaturedArticle;
