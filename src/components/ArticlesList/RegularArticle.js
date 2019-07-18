import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import StyledListHeading from "../common/StyledListHeading";
import StyledListCategory from "../common/StyledListCategory";

const StyledArticle = styled.article`
  display: flex;
  align-items: flex-start;
  border-top: 1px dashed #eee;
  @media screen and (min-width: 768px){
    width: 50%;
  }
`;

const StyledContent = styled.div`
  flex: 1;
`;

const StyledImage = styled.img`
  display: block;
  width: 20vw;
  height: 20vw;
  object-fit: cover;
  margin: 2rem 0;
  @media screen and (min-width: 480px){
    width: 30vw;
    height: auto;
  }
`;

const StyledListHeadingSmall = styled(StyledListHeading)`
  font-size: 1.2em;
  padding-right: 2rem;
`;

const RegularArticle = ({ article }) => {
  return (
    <StyledArticle>
      <StyledContent>
        <StyledListCategory>{article.category}</StyledListCategory>
        <Link to={`/articles/${article.id}`}>
          <StyledListHeadingSmall>{article.title}</StyledListHeadingSmall>
        </Link>
      </StyledContent>
      <StyledImage
        src={require(`../../assets/images/${article.featuredImg}`)}
        alt={article.featuredImg}
      />
    </StyledArticle>
  );
};

export default RegularArticle;
