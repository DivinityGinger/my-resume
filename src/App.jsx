import React from "react";
import VideoBackground from "./components/VideoBackground";
import Header from "./components/Header";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div>
      <VideoBackground />

      <div style={{ position: "relative", zIndex: 5 }}>
        <Header />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </div>
  );
};

export default App;
