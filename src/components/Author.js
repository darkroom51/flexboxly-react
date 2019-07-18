import React from "react";

const Author = ({ name, img }) => {
  return (
    <div>
      <img 
        src={img ? require(`../assets/images/${img}`) : null} 
        alt={img} 
      />
      <p>by {name}</p>
    </div>
  );
};

export default Author;
