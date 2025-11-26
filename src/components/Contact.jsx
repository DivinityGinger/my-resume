// src/components/Contact.jsx
import React from 'react';

const contacts = [
  { method: 'Email', link: 'mailto:themis.rañola@example.com', label: 'Send Email' },
  { method: 'LinkedIn', link: 'https://linkedin.com/in/themisrañola', label: 'View LinkedIn' },
  { method: 'GitHub', link: 'https://github.com/divinityginger', label: 'View GitHub' },
  { method: 'Phone', link: 'tel:+639123456789', label: 'Call Me' }
];

const Contact = () => {
  return (
    <section id="contact" style={{ minHeight: '100vh', padding: '6rem 2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h2 style={{ fontSize: '2.5rem', color: '#fff', marginBottom: '3rem', fontWeight: '700' }}>Contact</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {contacts.map((contact, index) => (
          <div key={index} style={{
            background: 'rgba(30, 41, 59, 0.5)',
            backdropFilter: 'blur(10px)',
            padding: '1.5rem 2rem',
            borderRadius: '12px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            transition: 'all 0.3s ease',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <span style={{ fontSize: '1.2rem', color: '#60a5fa', fontWeight: '600' }}>{contact.method}</span>
            <a 
              href={contact.link} 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                backgroundColor: '#60a5fa',
                color: '#fff',
                padding: '0.5rem 1rem',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: '500'
              }}
            >
              {contact.label}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Contact;
