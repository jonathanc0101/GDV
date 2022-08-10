import FadeIn from "../effects/FadeIn";

export default function HomeScreen() {
  return (
    <>
      {" "}
      <FadeIn id="welcome-section">
        <div className="text-section">
          <h1>Les damos la bienvenida a GDV!</h1>
          <p>Somos el grupo de desarrollo de videojuegos de la UNPSJB</p>
        </div>

        <FadeIn>
            <section className="project-tile">
              <div className="img-container">
                <img
                  className="project-image"
                  src={
                    "https://raw.githubusercontent.com/jonathanc0101/gdv/gdv/images/jona gritando.jpeg"
                  }
                  alt={"Foto obligatoria de un miembro apasionado por el desarrollo de videojuegos."}
                />
                <div className="overlay">
                  <p className="hidden-text">
                  Foto obligatoria de un miembro apasionado por el desarrollo de videojuegos.
                  </p>
                </div>
              </div>
            </section>
        </FadeIn>

        <div className="venite-a-la-uni-container">
          <section>
            <div className="text-section">
              <h2> Venite a la Uni 2022 </h2>
              <p>
                En GDV hacemos videojuegos, somos un taller de la facultad de
                ingeniería de la UNPSJB (Universidad Nacional Patagónica San
                Juan Bosco).
              </p>

              <p>
                Quienes formamos parte de GDV normalmente pertenecemos a las
                carreras de Licenciatura en informática o Analista programador
                universitario, pero no nos limitamos a eso, ya que al hacer
                videojuegos necesitamos de otras habilidades artísticas como por
                ejemplo la música, el dibujo, etc.
              </p>

              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed,
                dicta explicabo eaque ullam quibusdam nulla adipisci ipsa
                impedit nostrum fugiat corporis non quaerat accusamus deserunt,
                ea facilis quos quas! Incidunt.
              </p>
            </div>
          </section>
        </div>

        <Game></Game>
        
      </FadeIn>
    </>
  );
}
