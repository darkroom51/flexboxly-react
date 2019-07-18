import React from "react";
import FeaturedArticle from "./FeaturedArticle";
import RegularArticle from "./RegularArticle";

const ArticlesList = ({ articles }) => {
  return (
    <section>
      {articles.map((article, index) => (
        <React.Fragment key={article.id}>
          {index < 1 ? (
            <FeaturedArticle article={article} />
          ) : (
            <RegularArticle article={article} />
          )}
        </React.Fragment>
      ))}
    </section>
  );
};

export default ArticlesList;
