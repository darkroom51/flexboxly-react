import React, { useContext, useEffect } from "react";
import { AppContext } from "../context";
import ArticleDetails from "../components/ArticleDetails/ArticleDetails";
import StyledMain from "../components/common/StyledMain";

const Article = ({ match }) => {
  const { articles, setPage } = useContext(AppContext);
  const article = articles.filter(el => el.id === match.params.id)[0] || [];

  useEffect(() => {
    setPage("article");
    window.scrollTo(0, 0);
  }, []);

  return (
    <StyledMain>
      <ArticleDetails article={article}/>
    </StyledMain>
  );
};

export default Article;
