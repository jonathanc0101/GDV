import React from "react";
import Project from "./Project";

import { webProjects } from "./data";
import FadeIn from "../effects/FadeIn";

function ProjectList({ projects, type }) {
  return (
    <>
      {projects.map((project, index) => {
        return <Project key={index} project={project} type={type}></Project>;
      })}
    </>
  );
}

export default function Projects() {
  return (
    <FadeIn id="article-section">
      <div className="d-flex flex-row flex-wrap all-projects">
        <ProjectList
          projects={webProjects}
          id="projects"
          type="Web"
        ></ProjectList>
      </div>
    </FadeIn>
  );
}
