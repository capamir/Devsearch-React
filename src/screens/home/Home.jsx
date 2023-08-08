import React, { useState, useEffect } from "react";
import { Hero, ProfileCard, Pagination } from "../../components";
import "./home.css";

const tempProfiles = [
  {
    id: 1,
    image: "images/dennis.jpg",
    name: "Shahriar P. Shuvo",
    intro: "FullStack Web Designer & Developer",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, ducimus inventore! Sunt, veniam veritatis? Veritatis placeat, deleniti iure tempore veniam perspiciatis, soluta cupiditate animi, exercitationem molestias nam doloremque architecto odit.",
    tags: [
      {
        id: 1,
        name: "JavaScript",
      },
      {
        id: 2,
        name: "React",
      },
      {
        id: 3,
        name: "SCSS",
      },
      {
        id: 4,
        name: "Nodejs",
      },
      {
        id: 5,
        name: "Express",
      },
      {
        id: 6,
        name: "GraphQL",
      },
    ],
  },
  {
    id: 2,
    image: "images/dennis.jpg",
    name: "Shahriar P. Shuvo",
    intro: "FullStack Web Designer & Developer",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, ducimus inventore! Sunt, veniam veritatis? Veritatis placeat, deleniti iure tempore veniam perspiciatis, soluta cupiditate animi, exercitationem molestias nam doloremque architecto odit.",
    tags: [
      {
        id: 1,
        name: "JavaScript",
      },
      {
        id: 2,
        name: "React",
      },
      {
        id: 3,
        name: "SCSS",
      },
      {
        id: 4,
        name: "Nodejs",
      },
      {
        id: 5,
        name: "Express",
      },
      {
        id: 6,
        name: "GraphQL",
      },
    ],
  },
  {
    id: 3,
    image: "images/dennis.jpg",
    name: "Shahriar P. Shuvo",
    intro: "FullStack Web Designer & Developer",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, ducimus inventore! Sunt, veniam veritatis? Veritatis placeat, deleniti iure tempore veniam perspiciatis, soluta cupiditate animi, exercitationem molestias nam doloremque architecto odit.",
    tags: [
      {
        id: 1,
        name: "JavaScript",
      },
      {
        id: 2,
        name: "React",
      },
      {
        id: 3,
        name: "SCSS",
      },
      {
        id: 4,
        name: "Nodejs",
      },
      {
        id: 5,
        name: "Express",
      },
      {
        id: 6,
        name: "GraphQL",
      },
    ],
  },
];

function Home() {
  const [profiles, setProfiles] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setProfiles(tempProfiles);
  }, []);

  return (
    <main className="home">
      <Hero search={search} onHandleSearch={setSearch} />
      <section className="devlist">
        <div className="container">
          <div className="grid grid--three">
            {profiles.map((profile) => (
              <ProfileCard profile={profile} key={profile.id} />
            ))}
          </div>
        </div>
      </section>
      <Pagination />
    </main>
  );
}

export default Home;
