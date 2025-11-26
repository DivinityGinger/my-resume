import React from 'react';

const Experience = () => {
  const experiences = [
    {
      role: 'Finance + Data Intern',
      company: 'Dashlabs AI',
      period: 'September 2025 – November 2025',
      description: [
        'Collaborated cross-functionally with Finance and Data teams to implement data validation protocols, improving record integrity by 40%',
        'Developed Python automation scripts for financial data tracking, reducing manual verification time by 70%',
        'Led the OCR Form 2307 Bill Detection and Real-Time Ledger Project, achieving 95% text recognition accuracy'
      ]
    },
    {
      role: 'Accounts & Operations Coordinator',
      company: 'Orson Exhaust Cleaning Services',
      period: 'April 2018 – April 2025',
      description: [
        'Managed end-to-end scheduling of exhaust cleaning services for multiple fast-food branches',
        'Prepared and sent invoices to clients while maintaining accurate documentation',
        'Monitored accounts receivable and conducted timely follow-ups for pending collections'
      ]
    }
  ];

  return (
    <section id="experience" style={{ minHeight: '100vh', padding: '6rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h2 style={{ fontSize: '2.5rem', color: '#fff', marginBottom: '3rem', fontWeight: '700' }}>Experience</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
        {experiences.map((exp, index) => (
          <div key={index} style={{
            background: 'rgba(30, 41, 59, 0.5)',
            backdropFilter: 'blur(10px)',
            padding: '2rem',
            borderRadius: '12px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            transition: 'all 0.3s ease'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1rem', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <h3 style={{ fontSize: '1.5rem', color: '#60a5fa', marginBottom: '0.5rem', fontWeight: '600' }}>{exp.role}</h3>
                <h4 style={{ fontSize: '1.1rem', color: '#cbd5e1', fontWeight: '500' }}>{exp.company}</h4>
              </div>
              <span style={{ color: '#94a3b8', fontSize: '0.95rem' }}>{exp.period}</span>
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {exp.description.map((item, i) => (
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

export default Experience;
