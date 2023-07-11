import React from "react";
import { Link } from "react-router-dom";
import { SocialLink, TagLg as Tag, Skill, ProjectCard } from "../../components";
import "./profile.css";

function Profile() {
  return (
    <main className="profile ">
      <div className="container">
        <div className="layout">
          <div className="column column--1of3">
            <div className="card text-center">
              <div className="card__body dev">
                <img
                  className="avatar avatar--xl"
                  src="images/dennis.jpg"
                  alt=""
                />
                <h2 className="dev__name">Dennis Ivanov</h2>
                <p className="dev__title">
                  Expirance FullStack Developer, Youtuber and Instructor
                </p>
                <p className="dev__location">Based in Florida, USA</p>
                <ul className="dev__social">
                  <SocialLink />
                  <SocialLink />
                  <SocialLink />
                  <SocialLink />
                </ul>
                <Link to="/message" className="btn btn--sub btn--lg">
                  Send Message{" "}
                </Link>
              </div>
            </div>
          </div>
          <div className="column column--2of3">
            <div className="devInfo">
              <h3 className="devInfo__title">About Me</h3>
              <p className="devInfo__about">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex
                illum ipsum iusto consequatur. Totam, dolorum fugiat, debitis
                facere illo nostrum nesciunt maxime, deserunt enim voluptatibus
                modi natus velit voluptatum. Dicta eritatis exercitationem ut
                quos a placeat obcaecati? Architecto illum!
                <br />
                Amet consectetur adipisicing elit. Veritatis exercitationem ut
                quos a placeat obcaecati? Architecto illum, atque delectus nemo
                dolorem inventore ab facilis? Dolor placeat vel delectus ipsam
                ullam.
              </p>
            </div>
            <div className="devInfo">
              <h3 className="devInfo__title">Skills</h3>
              <div className="devInfo__skills">
                <Skill />
                <Skill />
                <Skill />

                <h3 className="devInfo__subtitle">Other Skills</h3>
                <div className="devInfo__otherSkills">
                  <Tag tagName={"Figma"} />
                  <Tag tagName={"Vuejs"} />
                  <Tag tagName={"REST API"} />
                  <Tag tagName={"GraphQL"} />
                  <Tag tagName={"TypeScript"} />
                  <Tag tagName={"Webpack"} />
                  <Tag tagName={"NextJS"} />
                  <Tag tagName={"Postgres"} />
                  <Tag tagName={"MongoDB"} />
                </div>
              </div>
            </div>
            <div className="devInfo">
              <h3 className="devInfo__title">Projects</h3>
              <div className="grid grid--two">
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Profile;
