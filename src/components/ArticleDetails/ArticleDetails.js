import React from "react";
import styled from "styled-components";
import Author from "./Author";
import StyledListCategory from "../common/StyledListCategory";
import StyledArticleHeading from "../common/StyledArticleHeading";
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

  const StyledArticleTLDR = styled(StyledParagraph)`
    color: ${({ theme }) => theme.mainGrey};
    @media ${({ theme }) => theme.mq.small} {
      width: 70%;
    }
  `;

  const StyledArticleBody = styled(StyledParagraph)`
    &:first-letter {
      float: left;
      font-size: 5em;
      line-height: 0.7em;
      font-weight: 700;
      padding: 0.15em 0.1em 0 0;
    }
    @media ${({ theme }) => theme.mq.small} {
      columns: 2 auto;
      column-gap: 6vh;
    }
  `;

  const StyledImageContainer = styled.div`
    margin: 0 -2rem;
    poistion: relative;
    @media ${({ theme }) => theme.mq.small} {
      margin: 3rem 0 5rem 0;
    }
  `;

  const StyledImage = styled.img`
    width: 100%;
    cursor: pointer;
    @media ${({ theme }) => theme.mq.small} {
      height: 40vh;
      object-fit: cover;
    }
  `;

  const StyledMark = styled.span`
    display: inline-block;
    margin: 0 0.7rem;
    color: ${({theme})=>theme.grey9};
    &:after {
      content: "¬";
    }
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
        {category} <StyledMark /> {mockupTag}
      </StyledListCategory>
      <StyledArticleHeading>{title}</StyledArticleHeading>
      <StyledArticleTLDR>{tldr}</StyledArticleTLDR>
      <Author name={author} img={authorImg} />
      <StyledArticleBody>{body}</StyledArticleBody>
    </article>
  );
};

export default ArticleDetails;
