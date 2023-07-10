import React from "react";
import "./tag.css";

function TagLg({ tagName }) {
  return (
    <span className="tag tag--pill tag--sub tag--lg">
      <small>{tagName}</small>
    </span>
  );
}

export default TagLg;
