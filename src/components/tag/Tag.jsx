import React from "react";
import "./tag.css";

function Tag({ tagName }) {
  return (
    <span className="tag tag--pill tag--main">
      <small>{tagName}</small>
    </span>
  );
}

export default Tag;
