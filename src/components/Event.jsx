import React, { useEffect, useState } from "react";

export default function Event({ event }) {

  return (
    <a
      className={"event-tile-container"}
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <section className="event-tile" id={project.id}>
        <h3 className="event-title-container">
          {event.h3}
        </h3>

        <div className="project-metadata-container">
          <p className="project-metadata-text">{project.date}</p>
        </div>

        <div className="img-container">
          <img className="event-image" src={project.src} alt={project.alt} />
          <div className="overlay">
            <p className="hidden-text">{project.p}</p>
          </div>
        </div>
      </section>
    </a>
  );
}
