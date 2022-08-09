import React, { useEffect, useState } from "react";
import Logos from "./Logos";

export default function Project({ project, type }) {
  const [className, setClassName] = useState("");

  useEffect(() => {
    setClassName("load");
  }, [className]);

  return (
    <a
      className={"project-tile-container fade-in-fast " + className}
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <section className="project-tile" id={project.id}>
        <h3 className="project-title-container">
          {project.h3}
          <span className="logos-span">
            <Logos logos={project.logos} />
          </span>
        </h3>

        <div className="project-metadata-container">
          <p>
            {type} {` `} Project
          </p>
          <p>{project.date}</p>
        </div>

        <div className="img-container">
          <img className="project-image" src={project.src} alt={project.alt} />
          <div className="overlay">
            <p className="hidden-text">{project.p}</p>
          </div>
        </div>
      </section>
    </a>
  );
}
