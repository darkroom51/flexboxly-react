import React, { useContext, useEffect } from "react";
import { AppContext } from "../context";
import ArticlesList from "../components/ArticlesList/ArticlesList";
import Tags from "../components/Tags";

const Home = () => {
  const { articles, setPage } = useContext(AppContext);

  useEffect(() => setPage("home"), []);

  return (
    <main>
      <Tags />
      <ArticlesList articles={articles} />
    </main>
  );
};

export default Home;
