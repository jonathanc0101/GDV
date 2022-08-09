import React from "react";
import Skills from "../components/Skills";

export default function HomeScreen() {
  return (
    <>
      {" "}
      <div id="welcome-section">
        <div className="text-section">
          <h1>Welcome to my portfolio</h1>
          <p>These are the tools that I use:</p>
        </div>
        <Skills />
      </div>
    </>
  );
}
