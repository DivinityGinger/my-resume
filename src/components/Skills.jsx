// src/components/Skills.jsx
import React from 'react';

const skillCategories = [
  {
    category: 'Languages',
    skills: ['Python', 'JavaScript', 'TypeScript', 'C++', 'C#', 'PHP', 'SQL']
  },
  {
    category: 'Web Development',
    skills: ['React.js', 'Node.js', 'Express.js', 'Next.js', 'Flask', 'FastAPI']
  },
  {
    category: 'Data Science & Machine Learning',
    skills: ['Pandas', 'NumPy', 'Scikit-learn', 'TensorFlow', 'Keras', 'OpenCV']
  },
  {
    category: 'Databases',
    skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Firebase', 'SQLite']
  },
  {
    category: 'Tools & Platforms',
    skills: ['Docker', 'AWS', 'Git', 'GitHub Actions', 'Jira', 'Power BI']
  },
  {
    category: 'Finance & Automation',
    skills: ['Excel VBA', 'Google Sheets API', 'OCR Automation', 'Ledger Processing', 'Financial Analysis']
  }
];

const Skills = () => {
  return (
    <section id="skills" style={{ minHeight: '100vh', padding: '6rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h2 style={{ fontSize: '2.5rem', color: '#fff', marginBottom: '3rem', fontWeight: '700' }}>Skills</h2>
      
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', marginBottom: '2rem' }}>
        {skillCategories.slice(0, 3).map((category, index) => (
          <div key={index} style={{
            flex: '1 1 calc(33% - 1rem)',
            background: 'rgba(30, 41, 59, 0.5)',
            backdropFilter: 'blur(10px)',
            padding: '2rem',
            borderRadius: '12px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            transition: 'all 0.3s ease'
          }}>
            <h3 style={{ fontSize: '1.5rem', color: '#60a5fa', marginBottom: '1rem', fontWeight: '600' }}>{category.category}</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {category.skills.map((skill, i) => (
                <li key={i} style={{ color: '#cbd5e1', marginBottom: '0.5rem', paddingLeft: '1.5rem', position: 'relative', lineHeight: '1.6' }}>
                  <span style={{ position: 'absolute', left: 0, color: '#60a5fa' }}>▹</span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
        {skillCategories.slice(3, 6).map((category, index) => (
          <div key={index} style={{
            flex: '1 1 calc(33% - 1rem)',
            background: 'rgba(30, 41, 59, 0.5)',
            backdropFilter: 'blur(10px)',
            padding: '2rem',
            borderRadius: '12px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            transition: 'all 0.3s ease'
          }}>
            <h3 style={{ fontSize: '1.5rem', color: '#60a5fa', marginBottom: '1rem', fontWeight: '600' }}>{category.category}</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {category.skills.map((skill, i) => (
                <li key={i} style={{ color: '#cbd5e1', marginBottom: '0.5rem', paddingLeft: '1.5rem', position: 'relative', lineHeight: '1.6' }}>
                  <span style={{ position: 'absolute', left: 0, color: '#60a5fa' }}>▹</span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
