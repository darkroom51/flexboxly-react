import React from "react";
import styled from "styled-components";
import FeaturedArticle from "./FeaturedArticle";
import RegularArticle from "./RegularArticle";

const StyledSection = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const ArticlesList = ({ articles }) => {
  return (
    <StyledSection>
      {articles.map((article, index) => (
        <React.Fragment key={article.id}>
          {index < 1 ? (
            <FeaturedArticle article={article} />
          ) : (
            <RegularArticle article={article} />
          )}
        </React.Fragment>
      ))}
    </StyledSection>
  );
};

export default ArticlesList;
