import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import StyledListHeading from "../common/StyledListHeading";
import StyledListCategory from "../common/StyledListCategory";

const StyledArticle = styled.article``;

const StyledImage = styled.img`
  display: block;
  width: 100%;
`;

const FeaturedArticle = ({ article }) => {
  return (
    <StyledArticle>
      <Link to={`/articles/${article.id}`}>
        <StyledImage
          src={require(`../../assets/images/${article.featuredImg}`)}
          alt={article.title}
        />
      </Link>
      <StyledListCategory>{article.category}</StyledListCategory>
      <Link to={`/articles/${article.id}`}>
        <StyledListHeading>{article.title}</StyledListHeading>
      </Link>
    </StyledArticle>
  );
};

export default FeaturedArticle;
