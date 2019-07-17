import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context";

const Home = () => {
  const { articles } = useContext(AppContext);

  return (
    <div>
      HOME PAGE
      {articles.map(el => (
        <div key={el.id}>
          <Link to={`/articles/${el.id}`}>{el.title}</Link>
        </div>
      ))}
    </div>
  );
};

export default Home;
