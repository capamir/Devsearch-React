import React from "react";
import "./pagination.css";

function Pagination() {
  return (
    <div className="pagination">
      <ul className="container">
        <li>
          <a href="/" className="btn btn--disabled">
            &#10094; Prev
          </a>
        </li>
        <li>
          <a href="/" className="btn btn--sub">
            01
          </a>
        </li>
        <li>
          <a href="/" className="btn">
            02
          </a>
        </li>
        <li>
          <a href="/" className="btn">
            03
          </a>
        </li>
        <li>
          <a href="/" className="btn">
            04
          </a>
        </li>
        <li>
          <a href="/" className="btn">
            05
          </a>
        </li>
        <li>
          <a href="/" className="btn">
            06
          </a>
        </li>
        <li>
          <a href="/" className="btn">
            07
          </a>
        </li>
        <li>
          <a href="/" className="btn">
            08
          </a>
        </li>
        <li>
          <a href="/" className="btn">
            09
          </a>
        </li>
        <li>
          <a href="/" className="btn">
            10
          </a>
        </li>
        <li>
          <a href="/" className="btn">
            Next &#10095;
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Pagination;
