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
  comment: [
    {
      id: 1,
      userId: 1,
      image: "../../images/dennis.jpg",
      name: "Sulamita Ivanov",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit alias numquam perferendis mollitia minus minima exercitationem possimus ab deserunt qui, soluta iusto doloribus eveniet similique consequuntur ratione, dignissimos ut magni laborum quo",
    },
  ],
};

function Project() {
  const [project, setProject] = useState({});
  const [comment, setComment] = useState("");

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
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                  ></textarea>
                </div>
                <input
                  className="btn btn--sub btn--lg"
                  type="submit"
                  value="Comments"
                />
              </form>
              <div className="commentList">
                {project.comment?.map((comment) => (
                  <Comment comment={comment} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function Comment({ comment }) {
  return (
    <div className="comment">
      <Link to={`/profile/${comment.userId}`}>
        <img className="avatar avatar--md" src={comment.image} alt="user" />
      </Link>
      <div className="comment__details">
        <Link to={`/profile/${comment.userId}`} className="comment__author">
          {comment.name}
        </Link>
        <p className="comment__info">{comment.comment}</p>
      </div>
    </div>
  );
}

export default Project;
