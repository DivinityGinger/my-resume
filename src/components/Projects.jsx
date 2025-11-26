// src/components/Projects.jsx
import React from 'react';

const projects = [
  {
    title: 'OCR Form 2307 Bill Detection and Real-Time Ledger Updates/Comparison',
    company: 'Dashlabs AI (OJT Project, 2025)',
    link: '', // Example link
    description: [
      'Developed an OCR-based system to extract and compare Form 2307 and billing document details (TIN, supplier name, invoice number, total amount) with Google Sheets ledger data.',
      'Automated financial data validation, reducing manual encoding and verification time by up to 70%.',
      'Achieved 95% accuracy in key field recognition using Python, Tesseract, and EasyOCR.',
      'Technologies: Python, Tesseract OCR, EasyOCR, Google Sheets API'
    ]
  },
  {
    title: 'Literacy Diagnostic and Proficiency Assessment Tool (Literacy DAPAT)',
    company: 'World Vision – Brigada Pagbasa Program',
    link: '',
    description: [
      'Built a web application for digital literacy assessment for learners.',
      'Platform features role-based access control, student progress tracking, and automated data visualization.',
      'Technologies: React, Node.js, MySQL, Firebase, etc.'
    ]
  },
  {
    title: 'AI Life Coaching Application (2025)',
    company: '',
    link: '',
    description: [
      'Developed an AI-powered goal management and life coaching platform designed to enhance personal productivity and mental wellness.',
      'Integrated multi-factor authentication (MFA), AES-256 encryption, and ensured GDPR/HIPAA compliance for secure data handling.',
      'Technologies: Python, FastAPI, TensorFlow, PostgreSQL'
    ]
  },
  {
    title: 'Digital Medical Prescription App',
    company: '',
    link: 'https://project-digital-medical-prescription-platform-822.magicpatterns.app',
    description: [
      'Designed and developed a web-based platform allowing doctors to issue digital prescriptions securely.',
      'Stores and shares medical records via QR code, enabling hospitals and pharmacies to instantly access verified patient data.',
      'Technologies: React, Vite, Firebase, Tailwind CSS, Node.js'
    ]
  },
  {
    title: 'Object Detection Final Project – RF-DETR Model Using CIFAR Dataset',
    company: '',
    link: '',
    description: [
      'Adapted and trained the RF-DETR model for object detection tasks using the CIFAR-10 dataset.',
      'Implemented precision-recall analysis, confusion matrix visualization, and model evaluation curves.',
      'Technologies: Python, PyTorch, Matplotlib, NumPy, Google Colab'
    ]
  },
  {
    title: 'Japanese Study App',
    company: '',
    link: 'https://divinityginger.github.io/japanese-study-app/',
    description: [
      'Developed an interactive Japanese learning web application featuring flashcards, grammar guides, and chat-based practice.',
      'Includes structured review sections, categorized grammar particles, and responsive layouts for desktop and mobile.',
      'Technologies: React, Vite, DaisyUI, Local Storage API'
    ]
  },
  {
    title: 'Mapúa Blackboard UI Recreation',
    company: '',
    link: '',
    description: [
      'Recreated the Mapúa Blackboard user interface with a focus on component-based design and responsive layout.',
      'Included course navigation panels, sample announcements, and mock class content to simulate the original Blackboard experience.',
      'Technologies: React, DaisyUI, Tailwind CSS'
    ]
  }
];

const Projects = () => {
  return (
    <section id="projects" style={{ minHeight: '100vh', padding: '6rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h2 style={{ fontSize: '2.5rem', color: '#fff', marginBottom: '3rem', fontWeight: '700' }}>Projects</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
        {projects.map((project, index) => (
          <div key={index} style={{
            background: 'rgba(30, 41, 59, 0.5)',
            backdropFilter: 'blur(10px)',
            padding: '2rem',
            borderRadius: '12px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            transition: 'all 0.3s ease'
          }}>
            <div style={{ marginBottom: '1rem' }}>
              <h3 style={{ fontSize: '1.5rem', color: '#60a5fa', marginBottom: '0.5rem', fontWeight: '600' }}>{project.title}</h3>
              {project.company && <h4 style={{ fontSize: '1.1rem', color: '#cbd5e1', fontWeight: '500', marginBottom: '0.5rem' }}>{project.company}</h4>}
              {project.link && (
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-block',
                    marginTop: '0.5rem',
                    padding: '0.5rem 1rem',
                    backgroundColor: '#60a5fa',
                    color: '#fff',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    fontWeight: '500'
                  }}
                >
                  View Project
                </a>
              )}
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {project.description.map((item, i) => (
                <li key={i} style={{ color: '#cbd5e1', marginBottom: '0.75rem', paddingLeft: '1.5rem', position: 'relative', lineHeight: '1.6' }}>
                  <span style={{ position: 'absolute', left: 0, color: '#60a5fa' }}>▹</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
