import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import StyledListHeading from "../common/StyledListHeading";
import StyledListCategory from "../common/StyledListCategory";
import StyledImageLink from "../common/StyledImageLink";

const StyledArticle = styled.article`
  display: flex;
  align-items: flex-start;
  border-top: 1px dashed ${({ theme }) => theme.lineGrey};
  width: 100%;
  @media ${({ theme }) => theme.mq.small} {
    width: 47%;
    &:nth-of-type(2n + 1) {
      margin-left: 6%;
    }
  }
  @media ${({ theme }) => theme.mq.medium} {
    font-size: 1.2em;
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
  @media ${({ theme }) => theme.mq.xsmall} {
    width: 30vw;
    height: auto;
  }
  @media ${({ theme }) => theme.mq.small} {
    width: 10vw;
    height: 10vw;
    object-fit: cover;
  }
`;

const StyledImageLinkAlt = styled(StyledImageLink)`
  margin: 2rem 0;
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
      <StyledImageLinkAlt to={`/articles/${article.id}`}>
        <StyledImage
          src={require(`../../assets/images/${article.featuredImg}`)}
          alt={article.featuredImg}
        />
      </StyledImageLinkAlt>
    </StyledArticle>
  );
};

export default RegularArticle;
