import React from "react";
import { Link } from "react-router-dom";

const ArticlesList = ({ articles }) => {
  return (
    <div>
      {articles.map(el => (
        <div key={el.id}>
          <p>{el.category}</p>
          <Link to={`/articles/${el.id}`}>{el.title}</Link>
          <img src="" alt={el.featuredImg} />
        </div>
      ))}
    </div>
  );
};

export default ArticlesList;
