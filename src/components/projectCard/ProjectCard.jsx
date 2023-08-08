import React from "react";
import { Link } from "react-router-dom";
import { TagMin as Tag } from "../../components";
import "./projectCard.css";

function ProjectCard({ project }) {
  return (
    <div className="column">
      <div className="card project">
        <Link to={`/project/${project.id}`} className="project">
          <img
            className="project__thumbnail"
            src={project.image}
            alt={project.title}
          />
          <div className="card__body">
            <h3 className="project__title">{project.title}</h3>
            <p>
              <Link className="project__author" to="/profile">
                By {project.author}
              </Link>
            </p>
            <p className="project--rating">
              <span style={{ fontWeight: "bold" }}>{project.vote_ratio}%</span>{" "}
              Postitive Feedback ({project.vote_total} Votes)
            </p>
            <div className="project__tags">
              {project.tags?.map((tag) => (
                <Tag tagName={tag.name} key={tag.id} />
              ))}
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default ProjectCard;
