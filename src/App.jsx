import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import VideoBackground from "./components/VideoBackground";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "experience", "projects", "skills", "contact"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      <VideoBackground />
      <Header activeSection={activeSection} />
      <div style={{ position: "relative", zIndex: 2 }}>
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </div>
  );
}

export default App;
