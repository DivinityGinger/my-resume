import React from 'react';
import profileImage from '../assets/profile.png'; // replace with your image path

const About = () => {
  return (
    <section
      id="about"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        padding: '2rem',
        zIndex: 2,
      }}
    >
      {/* Text container */}
      <div style={{ maxWidth: '800px', textAlign: 'center', position: 'relative', zIndex: 2 }}>
        <h1 style={{ fontSize: '4rem', fontWeight: '700', color: '#fff', marginBottom: '1rem', lineHeight: '1.2' }}>
          Themis Dione C. Rañola
        </h1>
        <h2 style={{ fontSize: '1.8rem', color: '#60a5fa', marginBottom: '1.5rem', fontWeight: '400' }}>
          Computer Science, Specializing in Data Science | Junior Finance Analyst | 
          Data Automation | Financial Data Processing | Python Development
        </h2>
        <p style={{ fontSize: '1.1rem', color: '#cbd5e1', lineHeight: '1.8', marginBottom: '2rem' }}>
          Ambitious in designing and implementing systems for financial data processing and automation, helping 
          teams work smarter, reduce manual tasks, and make faster, accurate decisions.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="mailto:tdcranola@gmail.com" style={{
            padding: '0.75rem 2rem',
            background: '#60a5fa',
            color: '#0f172a',
            textDecoration: 'none',
            borderRadius: '8px',
            fontWeight: '600',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => e.target.style.background = '#3b82f6'}
          onMouseLeave={(e) => e.target.style.background = '#60a5fa'}>
            Get In Touch
          </a>
          <a href="https://linkedin.com/in/themisranola" target="_blank" rel="noopener noreferrer" style={{
            padding: '0.75rem 2rem',
            background: 'transparent',
            color: '#60a5fa',
            textDecoration: 'none',
            borderRadius: '8px',
            fontWeight: '600',
            border: '2px solid #60a5fa',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.target.style.background = '#60a5fa';
            e.target.style.color = '#0f172a';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'transparent';
            e.target.style.color = '#60a5fa';
          }}>
            LinkedIn Profile
          </a>
        </div>
      </div>

      {/* Image container (fully rounded) */}
      <div style={{
        position: 'absolute',
        right: '-6rem',
        top: '50%',
        transform: 'translateY(-50%)',
        width: '300px',
        height: '300px',
        zIndex: 1
      }}>
        <img
          src={profileImage}
          alt="Themis Dione C. Rañola"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '50%', // fully rounded (circle)
          }}
        />
      </div>
    </section>
  );
};

export default About;
