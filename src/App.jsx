import React from "react";
import Header from "./components/Header";
import Home from "./components/home";
import About from "./components/about";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Project from "./components/project";
import Certificate from "./components/certificate";

function App() {
  return (
    <>
      <Header />
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="projects">
        <Project />
      </div>
      <div id="certificates">
        <Certificate />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </>
  );
}

export default App;
