import React from "react";
import { Link } from "react-router-dom";

const RegularArticle = ({ article }) => {
  return (
    <div>
      <p>{article.category}</p>
      <Link to={`/articles/${article.id}`}>{article.title}</Link>
      <img src="" alt={article.featuredImg} />
    </div>
  );
};

export default RegularArticle;
