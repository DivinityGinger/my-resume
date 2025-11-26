// src/components/Header.jsx
import React from "react";

const Header = ({ activeSection }) => {
  const sections = [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "certifications", label: "Certifications" },
    { id: "contact", label: "Contact" },
  ];

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        background: "rgba(49, 1, 58, 0.9)",
        backdropFilter: "blur(10px)",
        zIndex: 100,
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        padding: "0.75rem 0rem", // bigger top/bottom padding
        minHeight: "20px", // ensures header is always tall enough
      }}
    >
      {/* Navigation */}
      <nav
        style={{
          display: "flex",
          gap: "0.5rem", // space between buttons
        }}
      >
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => handleScroll(section.id)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: activeSection === section.id ? "#60a5fa" : "#cbd5e1",
              fontWeight: activeSection === section.id ? "600" : "500",
              transition: "color 0.3s ease",
              fontSize: "0.95rem",
              padding: "0 0.5rem",
              whiteSpace: "nowrap",
            }}
          >
            {section.label}
          </button>
        ))}
      </nav>
    </header>
  );
};

export default Header;
