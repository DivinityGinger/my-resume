// src/components/Certifications.jsx
import React from 'react';

const certifications = [
  {
    title: 'Python for Data Science',
    image: '/certificates/python_datascience.png' // replace with actual image path
  },
  {
    title: 'Google Data Analytics',
    image: '/certificates/google_data_analytics.png'
  },
  {
    title: 'React Developer Certification',
    image: '/certificates/react_dev_cert.png'
  }
];

const Certifications = () => {
  return (
    <section
      id="certifications"
      style={{
        minHeight: '80vh',
        padding: '6rem 2rem',
        maxWidth: '1200px',
        margin: '0 auto'
      }}
    >
      <h2
        style={{
          fontSize: '2.5rem',
          color: '#fff',
          marginBottom: '3rem',
          fontWeight: '700'
        }}
      >
        Certifications
      </h2>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '2rem',
          justifyContent: 'center',
          marginBottom: '2rem'
        }}
      >
        {certifications.map((cert, index) => (
          <div
            key={index}
            style={{
              flex: '1 1 calc(33% - 1rem)',
              background: 'rgba(30, 41, 59, 0.5)',
              backdropFilter: 'blur(10px)',
              padding: '2rem',
              borderRadius: '12px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              textAlign: 'center',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
          >
            <img
              src={cert.image}
              alt={cert.title}
              loading="lazy"
              style={{
                maxWidth: '100%',
                borderRadius: '8px',
                marginBottom: '1rem'
              }}
            />
            <h3
              style={{
                fontSize: '1.2rem',
                color: '#60a5fa',
                fontWeight: '600'
              }}
            >
              {cert.title}
            </h3>
          </div>
        ))}
      </div>

      <div style={{ textAlign: 'center' }}>
        <a
          href="https://drive.google.com/drive/folders/1euLazMB-3G7qLXC_78LeRwkVvTAWmbSr?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            padding: '0.75rem 1.5rem',
            backgroundColor: '#60a5fa',
            color: '#fff',
            borderRadius: '8px',
            fontWeight: '600',
            textDecoration: 'none',
            transition: 'all 0.3s ease'
          }}
        >
          View All Certificates
        </a>
      </div>
    </section>
  );
};

export default Certifications;
