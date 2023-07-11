import React from "react";
import { Link } from "react-router-dom";
import "./projectCard.css";

function ProjectCard() {
  return (
    <div className="column">
      <div className="card project">
        <Link to="/project" className="project">
          <img
            className="project__thumbnail"
            src="images/project-a.png"
            alt="project thumbnail"
          />
          <div className="card__body">
            <h3 className="project__title">DevSearch UI Design</h3>
            <p>
              <Link className="project__author" to="/profile">
                By Shahriar P. Shuvo
              </Link>
            </p>
            <p className="project--rating">
              <span style={{ fontWeight: "bold" }}>92%</span> Postitive Feedback
              (62 Votes)
            </p>
            <div className="project__tags">
              <span className="tag tag--pill tag--main">
                <small>NextJS</small>
              </span>
              <span className="tag tag--pill tag--main">
                <small>GraphQL</small>
              </span>
              <span className="tag tag--pill tag--main">
                <small>TypeScript</small>
              </span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default ProjectCard;
