import React from "react";

import Project from "./Project";

import { desktopProjects } from "./data";
import { webProjects } from "./data";

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
    <div id="article-section">
      <div className="d-flex flex-row flex-wrap all-projects">
        <ProjectList
          projects={webProjects}
          id="projects"
          type="Web"
        ></ProjectList>
        <ProjectList
          projects={desktopProjects}
          id="desktop-projects"
          type="Desktop"
        ></ProjectList>
      </div>
    </div>
  );
}
