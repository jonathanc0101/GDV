import FadeIn from "../effects/FadeIn";
import Logos from "./Logos";

export default function Project({ project, type }) {

  return (
    <FadeIn>    
    <a
      className={"project-tile-container"}
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
          <p className="project-metadata-text">{project.date}</p>
        </div>

        <div className="img-container">
          <img className="project-image" src={project.src} alt={project.alt} />
          <div className="overlay">
            <p className="hidden-text">{project.p}</p>
          </div>
        </div>
      </section>
    </a>
    </FadeIn>
  );
}
