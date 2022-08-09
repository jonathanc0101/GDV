import React from "react";

import { skills } from "./data";
import Skill from "./Skill";

export default function Skills() {
  return (
    <div className="d-flex flex-row flex-wrap skills">
      {skills.map((skill, index) => {
        return <Skill key={index} skill={skill} />;
      })}
    </div>
  );
}
