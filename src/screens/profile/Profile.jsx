import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SocialLink, TagLg as Tag, Skill, ProjectCard } from "../../components";
import "./profile.css";

const tempProfile = {
  id: 1,
  image: "images/dennis.jpg",
  name: "Dennis Ivanov",
  intro: "Expirance FullStack Developer, Youtuber and Instructor",
  address: "Florida, USA",
  description:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex illum ipsum iusto consequatur. Totam, dolorum fugiat, debitis facere illo nostrum nesciunt maxime, deserunt enim voluptatibus modi natus velit voluptatum. Dicta eritatis exercitationem ut quos a placeat obcaecati? Architecto illum!",
  skills: [
    {
      id: 1,
      title: "JavaScript",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae neque voluptatum ut? Quaerat, ea cumque! Dolorum provident esse molestias commodi odit sapiente quod quasi corrupti obcaecati? Nobis ex temporibus quaerat!",
    },
    {
      id: 2,
      title: "JavaScript",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae neque voluptatum ut? Quaerat, ea cumque! Dolorum provident esse molestias commodi odit sapiente quod quasi corrupti obcaecati? Nobis ex temporibus quaerat!",
    },
  ],
  otherSkills: [
    {
      id: 1,
      name: "Vuejs",
    },
    {
      id: 2,
      name: "Figma",
    },
    {
      id: 3,
      name: "REST API",
    },
    {
      id: 4,
      name: "GraphQL",
    },
    {
      id: 5,
      name: "TypeScript",
    },
    {
      id: 6,
      name: "Postgres",
    },
  ],
  projects: [
    {
      id: 1,
      title: "DevSearch UI Design",
      author: "Shahriar P. Shuvo",
      image: "images/project-a.png",
      vote_total: 62,
      vote_ratio: 92,
      tags: [
        {
          id: 1,
          name: "NextJS",
        },
        {
          id: 2,
          name: "GraphQL",
        },
        {
          id: 3,
          name: "TypeScript",
        },
      ],
    },
    {
      id: 1,
      title: "DevSearch UI Design",
      author: "Shahriar P. Shuvo",
      image: "images/project-a.png",
      vote_total: 62,
      vote_ratio: 92,
      tags: [
        {
          id: 1,
          name: "NextJS",
        },
        {
          id: 2,
          name: "GraphQL",
        },
        {
          id: 3,
          name: "TypeScript",
        },
      ],
    },
  ],
};

function Profile({ match }) {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    setProfile(tempProfile);
  }, []);
  return (
    <main className="profile ">
      <div className="container">
        <div className="layout">
          <div className="column column--1of3">
            <div className="card text-center">
              <div className="card__body dev">
                <img className="avatar avatar--xl" src={profile.image} alt="" />
                <h2 className="dev__name">{profile.name}</h2>
                <p className="dev__title">{profile.intro}</p>
                <p className="dev__location">Based in {profile.address}</p>
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
              <p className="devInfo__about">{profile.description}</p>
            </div>
            <div className="devInfo">
              <h3 className="devInfo__title">Skills</h3>
              <div className="devInfo__skills">
                {profile.skills?.map((skill) => (
                  <Skill key={skill.id} skill={skill} />
                ))}

                <h3 className="devInfo__subtitle">Other Skills</h3>
                <div className="devInfo__otherSkills">
                  {profile.otherSkills?.map((skill) => (
                    <Tag key={skill.id} tagName={skill.name} />
                  ))}
                </div>
              </div>
            </div>
            <div className="devInfo">
              <h3 className="devInfo__title">Projects</h3>
              <div className="grid grid--two">
                {profile.projects?.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Profile;
