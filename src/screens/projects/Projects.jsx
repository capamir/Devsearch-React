import React, { useEffect, useState } from "react";
import { Hero, Pagination, ProjectCard } from "../../components";
import "./projects.css";

const tempProjects = [
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
];

function Projects() {
  const [search, setSearch] = useState("");
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(tempProjects);
  }, []);

  return (
    <main className="projects">
      <Hero search={search} onHandleSearch={setSearch} />
      <section className="projectsList">
        <div className="container">
          <div className="grid grid--three">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      <Pagination />
    </main>
  );
}

export default Projects;
