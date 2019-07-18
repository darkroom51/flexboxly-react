import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import StyledListHeading from "../common/StyledListHeading";
import StyledListCategory from "../common/StyledListCategory";
import StyledParagraph from "../common/StyledParagraph";
import StyledImageLink from "../common/StyledImageLink";

const StyledArticle = styled.article`
  @media ${({ theme }) => theme.mq.small} {
    display: flex;
    flex-direction: row-reverse;
    margin: 3rem 0 5rem 0;
  }
  @media ${({ theme }) => theme.mq.medium} {
    font-size: 1.2em;
  }
`;

const StyledContent = styled.div`
  @media ${({ theme }) => theme.mq.small} {
    width: 50%;
    padding-right: 5vw;
  }
`;

const StyledImageContainer = styled.div`
  @media ${({ theme }) => theme.mq.small} {
    width: 50%;
  }
`;

const StyledImage = styled.img`
  display: block;
  width: 100%;
`;

const StyledListTLDR = styled(StyledParagraph)`
  color: ${({ theme }) => theme.mainGrey};
  display: none;
  @media ${({ theme }) => theme.mq.small} {
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
