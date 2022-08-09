import React, { useEffect, useState } from "react";

export default function WhoAmIScreen() {
  const [className, setClassName] = useState("");

  useEffect(() => {
    setClassName("load");
  }, [className]);

  return (
    <div id="who-am-i" className={"fade-in-fast " + className}>
      <section>
        <div className="text-section">
          <h2>Hola👋</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam accusamus quo neque provident ullam? Vitae quae modi rerum voluptate odit.
          </p>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit dolores eaque nemo possimus sapiente maiores dicta modi facere non veniam deleniti, animi reiciendis voluptatibus. Assumenda dolore fugiat repudiandae autem placeat.
          </p>
        </div>
      </section>
      <div className="quote-container">
        <p className="text">"Los buenos artistas piden prestado, los grandes artistas roban.”</p>
        <p className="author">-Pablo Picasso (Quizá)</p>
      </div>
    </div>
  );
}
