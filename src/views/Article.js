import React, { useContext, useEffect } from "react";
import { AppContext } from "../context";
import ArticleDetails from "../components/ArticleDetails/ArticleDetails";

const Article = ({ match }) => {
  const { articles, setPage } = useContext(AppContext);
  const article = articles.filter(el => el.id === match.params.id)[0] || [];

  useEffect(() => {
    setPage("article");
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <ArticleDetails article={article}/>
    </main>
  );
};

export default Article;
