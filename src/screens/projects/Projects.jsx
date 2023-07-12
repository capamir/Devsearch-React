import React from "react";
import { Hero, Pagination, ProjectCard } from "../../components";
import "./projects.css";

function Project() {
  return (
    <main className="projects">
      <Hero />
      <section className="projectsList">
        <div className="container">
          <div className="grid grid--three">
            <ProjectCard />
          </div>
        </div>
      </section>

      <Pagination />
    </main>
  );
}

export default Project;
