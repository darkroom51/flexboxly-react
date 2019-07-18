import React from "react";
import styled from "styled-components";
import Author from "./Author";
import StyledListCategory from "../common/StyledListCategory";
import StyledParagraph from "../common/StyledParagraph";

const ArticleDetails = ({ article }) => {
  const {
    title,
    tldr,
    body,
    category,
    featuredImg,
    author,
    authorImg
  } = article;

  const mockupTag = "poverty";

  const StyledArticleHeading = styled.h1`
    font-family: ${({ theme }) => theme.fontSerif};
    font-weight: 900;
    text-transform: capitalize;
    font-size: 2.1em;
    line-height: 1.2;
    font-style: italic;
    color: ${({ theme }) => theme.mainBlack};
    margin-bottom: 2rem;
  `;

  const StyledArticleTLDR = styled(StyledParagraph)`
    color: ${({ theme }) => theme.mainGrey};
  `;

  const StyledArticleBody = styled(StyledParagraph)`
    &:first-letter {
      float: left;
      font-size: 5em;
      line-height: 0.7em;
      font-weight: 700;
      padding: 0.15em 0.1em 0 0;
    }
  `;

  const StyledImageContainer = styled.div`
    margin: 0 -2rem;
    poistion: relative;
  `;

  const StyledImage = styled.img`
    width: 100%;
    cursor: pointer;
  `;

  return (
    <article>
      <StyledImageContainer>
        <StyledImage
          src={featuredImg ? require(`../../assets/images/${featuredImg}`) : null}
          alt={title}
        />
      </StyledImageContainer>
      <StyledListCategory>
        {category} - {mockupTag}
      </StyledListCategory>
      <StyledArticleHeading>{title}</StyledArticleHeading>
      <StyledArticleTLDR>{tldr}</StyledArticleTLDR>
      <Author name={author} img={authorImg} />
      <StyledArticleBody>{body}</StyledArticleBody>
    </article>
  );
};

export default ArticleDetails;
