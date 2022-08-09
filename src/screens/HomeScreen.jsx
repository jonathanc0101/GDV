import React, { useEffect, useState } from "react";
import Skills from "../components/Skills";

export default function HomeScreen() {

  const [className, setClassName] = useState("");

  useEffect(() => {
    setClassName("load");
  }, [className]);

  return (
      <> 
        {" "}
        <div id="welcome-section" className={"fade-in-fast " + className}>
          <div className="text-section">
            <h1>Les damos la bienvenida a GDV!</h1>
            <p>Somos el grupo de desarrollo de videojuegos de la UNPSJB</p>
          </div>

          <div className="venite-a-la-uni-container">
              
              <section>
      <div className="text-section">
        <h2> Venite a la Uni 2022 </h2>
        <p>
          En GDV hacemos videojuegos, somos un taller de la facultad de ingeniería de la UNPSJB (Universidad Nacional Patagónica San Juan Bosco).
          </p>

          <p>
          Quienes formamos parte de GDV normalmente pertenecemos a las carreras de Licenciatura en informática o Analista programador universitario, pero no nos limitamos a eso, ya que al hacer videojuegos necesitamos de otras habilidades artísticas como por ejemplo la música, el dibujo, etc.
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, dicta explicabo eaque ullam quibusdam nulla adipisci ipsa impedit nostrum fugiat corporis non quaerat accusamus deserunt, ea facilis quos quas! Incidunt.
        </p>
      </div>
    </section>

          </div>
        </div>
      </>
    );
}
