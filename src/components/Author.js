import React from "react";

const Author = ({ name, img }) => {
  return (
    <div>
      <img src="" alt={img} />
      <p>by {name}</p>
    </div>
  );
};

export default Author;
