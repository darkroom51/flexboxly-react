import React from "react";
import FeaturedArticle from "./FeaturedArticle";
import RegularArticle from "./RegularArticle";

const ArticlesList = ({ articles }) => {
  return (
    <div>
      {articles.map((article, index) => (
        <div key={article.id}>
          {index < 1 ? (
            <FeaturedArticle article={article} />
          ) : (
            <RegularArticle article={article} />
          )}
        </div>
      ))}
    </div>
  );
};

export default ArticlesList;
