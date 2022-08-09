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
          <h2>Hello👋</h2>
          <p>
            My name is Jonathan C. I'm a CS student in the UNPSJB (currently in
            my 4th year).
          </p>

          <p>
            I've worked in a broad range of IT related topics; from installing
            surveillance systems, to designing and implementing programs for the
            government, automated irrigation systems, and also didactic
            simulators.
          </p>
        </div>
      </section>
      <div className="quote-container">
        <p className="text">“Good artists borrow, great artists steal.”</p>
        <p className="author">-Pablo Picasso (maybe)</p>
      </div>
    </div>
  );
}
