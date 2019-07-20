import React, { useContext, useEffect } from "react";
import { AppContext } from "../context";
import ArticlesList from "../components/ArticlesList/ArticlesList";
import Tags from "../components/Tags";
import StyledMain from "../components/common/StyledMain";

const Home = () => {
  const { articles, setPage } = useContext(AppContext);

  useEffect(() => setPage("home"), []);

  return (
    <StyledMain>
      <Tags />
      <ArticlesList articles={articles} />
    </StyledMain>
  );
};

export default Home;
