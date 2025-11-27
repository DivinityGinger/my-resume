// src/components/Certifications.jsx
import React from "react";

// Import images from assets folder
import pythonCert from "../assets/certificates/Introduction to Data Science in Python.png";
import googleCert from "../assets/certificates/Introduction to Data Analytics.png";
import aiCert from "../assets/certificates/Introduction to Artificial Intelligence.png";
import tfCert from "../assets/certificates/TensorFlow for CNNs-Learn and Practice CNNs.png";

const certifications = [
  { image: pythonCert },
  { image: googleCert },
  { image: aiCert },
  { image: tfCert },
];

const Certifications = () => {
  return (
    <section
      id="certifications"
      style={{
        minHeight: "80vh",
        padding: "6rem 2rem",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      <h2
        style={{
          fontSize: "2.5rem",
          color: "#fff",
          marginBottom: "3rem",
          fontWeight: "700",
          textAlign: "center",
        }}
      >
        Certifications
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)", // 2 columns
          gridTemplateRows: "repeat(2, 1fr)",   // 2 rows
          gap: "2rem",
          alignItems: "stretch", // make all boxes equal height
          marginBottom: "2rem",
        }}
      >
        {certifications.map((cert, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              background: "rgba(30, 41, 59, 0.5)",
              backdropFilter: "blur(10px)",
              padding: "2rem",
              borderRadius: "12px",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              transition: "all 0.3s ease",
              cursor: "pointer",
            }}
          >
            <img
              src={cert.image}
              alt="Certificate"
              loading="lazy"
              style={{
                maxWidth: "100%",
                maxHeight: "100%", // ensures it fits inside box
                borderRadius: "8px",
              }}
            />
          </div>
        ))}
      </div>

      <div style={{ textAlign: "center" }}>
        <a
          href="https://drive.google.com/drive/folders/1euLazMB-3G7qLXC_78LeRwkVvTAWmbSr?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            padding: "0.75rem 1.5rem",
            backgroundColor: "#60a5fa",
            color: "#fff",
            borderRadius: "8px",
            fontWeight: "600",
            textDecoration: "none",
            transition: "all 0.3s ease",
          }}
        >
          View All Certificates
        </a>
      </div>
    </section>
  );
};

export default Certifications;
