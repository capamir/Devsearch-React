import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TagLg as Tag } from "../../components";
import "./project.css";

const tempProject = {
  id: 1,
  author: "Md. Shahriar Parvez",
  title: "Portfolio Landing Page for a Coding Mentor",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima harum maxime debitis amet voluptates esse a perferendis tempora, natus pariatur obcaecati odit quisquam fugit deserunt.",
  vote_total: 18,
  vote_ratio: 36,
  tags: [
    {
      id: 1,
      name: "Figma",
    },
    {
      id: 1,
      name: "Vuejs",
    },
    {
      id: 1,
      name: "GraphQL",
    },
    {
      id: 1,
      name: "TypeScript",
    },
    {
      id: 1,
      name: "Postgres",
    },
  ],
};

function Project() {
  const [project, setProject] = useState({});

  useEffect(() => {
    setProject(tempProject);
  }, []);
  return (
    <main className="singleProject my-md">
      <div className="container">
        <div className="layout">
          <div className="column column--1of3">
            <h3 className="singleProject__subtitle">Tools & Stacks</h3>
            <div className="singleProject__toolStack">
              {project.tags?.map((tag) => (
                <Tag key={tag.id} tagName={tag.name} />
              ))}
            </div>
            <Link className="singleProject__liveLink" to="/" target="_blank">
              <i className="im im-external-link"></i>Source Code
            </Link>
          </div>
          <div className="column column--2of3">
            <img
              className="singleProject__preview"
              src="images/project-a.png"
              alt="portfolio thumbnail"
            />
            <Link to="/profile" className="singleProject__developer">
              {project.author}
            </Link>
            <h2 className="singleProject__title">{project.title}</h2>
            <h3 className="singleProject__subtitle">About the Project</h3>
            <div className="singleProject__info">{project.description}</div>

            <div className="comments">
              <h3 className="singleProject__subtitle">Feedback</h3>
              <h5 className="project--rating">
                {project.vote_ratio}% Postitive Feedback ({project.vote_total}{" "}
                Votes)
              </h5>

              <form className="form" action="#" method="POST">
                <div className="form__field">
                  <label htmlFor="formInput#textarea">Comments: </label>
                  <textarea
                    className="input input--textarea"
                    name="message"
                    id="formInput#textarea"
                    placeholder="Write your comments here..."
                  ></textarea>
                </div>
                <input
                  className="btn btn--sub btn--lg"
                  type="submit"
                  value="Comments"
                />
              </form>
              <div className="commentList">
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
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Reprehenderit alias numquam perferendis mollitia minus
                      minima exercitationem possimus ab deserunt qui, soluta
                      iusto doloribus eveniet similique consequuntur ratione,
                      dignissimos ut magni laborum quo.
                    </p>
                  </div>
                </div>
                <div className="comment">
                  <a href="profile.html">
                    <img
                      className="avatar avatar--md"
                      src="../../images/dennis.jpg"
                      alt="user"
                    />
                  </a>
                  <div className="comment__details">
                    <a href="profile.html" className="comment__author">
                      Dennis Ivanov
                    </a>
                    <p className="comment__info">
                      Consectetur adipisicing elit. Reprehenderit alias numquam
                      perferendis mollitia minus minima exercitationem possimus
                      ab deserunt qui, ratione, dignissimos ut magni laborum
                      quo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Project;
