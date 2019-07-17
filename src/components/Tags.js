import React from "react";

const tagsMockup = [
  "#TechDesign",
  "#Healthcare Revolution",
  "#Future of JavaScript"
];

const Tags = () => {
  return (
      <ul>
        {tagsMockup.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
  );
};

export default Tags;
