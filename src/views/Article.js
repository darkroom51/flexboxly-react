import React, { useContext, useEffect } from "react";
import { AppContext } from "../context";
import Author from "../components/Author";

const Article = ({ match }) => {
  const { articles, setPage } = useContext(AppContext);
  const article = articles.filter(el => el.id === match.params.id)[0] || [];
  const {
    title,
    tldr,
    body,
    category,
    featuredImg,
    author,
    authorImg
  } = article;

  useEffect(() => setPage("article"), []);

  return (
    <div>
      <img src="" alt={featuredImg} />
      <p>{category} - someTag</p>
      <h2>{title}</h2>
      <p>{tldr}</p>
      <Author name={author} img={authorImg} />
      <p>{body}</p>
    </div>
  );
};

export default Article;
