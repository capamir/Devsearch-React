import React from "react";
import "./tag.css";

function TagMin({ tagName }) {
  return (
    <span className="tag tag--pill tag--main">
      <small>{tagName}</small>
    </span>
  );
}

export default TagMin;
