import React from "react";

import { logosUrls } from "./data";

export default function Logos({ logos }) {
  if (!logos) {
    return null;
  }

  return (
    <div className="logos">
      {logos.map((logo, index) => {
        return <img key={index} alt={logo} src={logosUrls[logo]} />;
      })}
    </div>
  );
}
