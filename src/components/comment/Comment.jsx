import React from "react";
import "./comment.css";

function Comment() {
  return (
    <div className="comment">
      <a href="/profile">
        <img
          className="avatar avatar--md"
          src="../../images/dennis.jpg"
          alt="user"
        />
      </a>
      <div className="comment__details">
        <a href="/profile" className="comment__author">
          Sulamita Ivanov
        </a>
        <p className="comment__info">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          alias numquam perferendis mollitia minus minima exercitationem
          possimus ab deserunt qui, soluta iusto doloribus eveniet similique
          consequuntur ratione, dignissimos ut magni laborum quo.
        </p>
      </div>
    </div>
  );
}

export default Comment;
