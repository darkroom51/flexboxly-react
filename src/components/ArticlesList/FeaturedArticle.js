import React from "react";
import { Link } from "react-router-dom";

const FeaturedArticle = ({ article }) => {
  return (
    <div>
      <Link to={`/articles/${article.id}`}><img src="" alt={article.featuredImg} /></Link>
      <p>{article.category}</p>
      <Link to={`/articles/${article.id}`}>{article.title}</Link>
    </div>
  );
};

export default FeaturedArticle;
