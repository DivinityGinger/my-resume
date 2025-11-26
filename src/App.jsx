import React, { useState, useEffect } from 'react';

// Header Component
const Header = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      background: isScrolled ? 'rgba(15, 23, 42, 0.95)' : 'transparent',
      backdropFilter: isScrolled ? 'blur(10px)' : 'none',
      transition: 'all 0.3s ease',
      borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.1)' : 'none'
    }}>
      <nav style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '1.5rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{
          fontSize: '1.5rem',
          fontWeight: '700',
          color: '#fff',
          letterSpacing: '1px'
        }}>
          TR
        </div>
        <ul style={{
          display: 'flex',
          gap: '2rem',
          listStyle: 'none',
          margin: 0,
          padding: 0
        }}>
          {['About', 'Experience', 'Projects', 'Skills', 'Contact'].map(item => (
            <li key={item}>
              <button
                onClick={() => scrollToSection(item.toLowerCase())}
                style={{
                  background: 'none',
                  border: 'none',
                  color: activeSection === item.toLowerCase() ? '#60a5fa' : '#94a3b8',
                  cursor: 'pointer',
                  fontSize: '0.95rem',
                  fontWeight: '500',
                  transition: 'color 0.3s ease',
                  padding: '0.5rem 0'
                }}
                onMouseEnter={(e) => e.target.style.color = '#60a5fa'}
                onMouseLeave={(e) => e.target.style.color = activeSection === item.toLowerCase() ? '#60a5fa' : '#94a3b8'}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

// About/Hero Section
const About = () => {
  return (
    <section id="about" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      padding: '2rem'
    }}>
      <div style={{
        maxWidth: '800px',
        textAlign: 'center',
        zIndex: 2
      }}>
        <h1 style={{
          fontSize: '4rem',
          fontWeight: '700',
          color: '#fff',
          marginBottom: '1rem',
          lineHeight: '1.2'
        }}>
          Themis Dione C. Rañola
        </h1>
        <h2 style={{
          fontSize: '1.8rem',
          color: '#60a5fa',
          marginBottom: '1.5rem',
          fontWeight: '400'
        }}>
          Computer Science Student & Data Automation Specialist
        </h2>
        <p style={{
          fontSize: '1.1rem',
          color: '#cbd5e1',
          lineHeight: '1.8',
          marginBottom: '2rem'
        }}>
          Aspiring Computer Scientist specializing in data automation, financial data processing, 
          and software development. I build intelligent systems that improve workflow efficiency, 
          accuracy, and decision-making.
        </p>
        <div style={{
          display: 'flex',
          gap: '1rem',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
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
    </section>
  );
};

// Experience Section
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
    <section id="experience" style={{
      minHeight: '100vh',
      padding: '6rem 2rem',
      maxWidth: '1200px',
      margin: '0 auto'
    }}>
      <h2 style={{
        fontSize: '2.5rem',
        color: '#fff',
        marginBottom: '3rem',
        fontWeight: '700'
      }}>
        Experience
      </h2>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '3rem'
      }}>
        {experiences.map((exp, index) => (
          <div key={index} style={{
            background: 'rgba(30, 41, 59, 0.5)',
            backdropFilter: 'blur(10px)',
            padding: '2rem',
            borderRadius: '12px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.borderColor = 'rgba(96, 165, 250, 0.5)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'start',
              marginBottom: '1rem',
              flexWrap: 'wrap',
              gap: '1rem'
            }}>
              <div>
                <h3 style={{
                  fontSize: '1.5rem',
                  color: '#60a5fa',
                  marginBottom: '0.5rem',
                  fontWeight: '600'
                }}>
                  {exp.role}
                </h3>
                <h4 style={{
                  fontSize: '1.1rem',
                  color: '#cbd5e1',
                  fontWeight: '500'
                }}>
                  {exp.company}
                </h4>
              </div>
              <span style={{
                color: '#94a3b8',
                fontSize: '0.95rem'
              }}>
                {exp.period}
              </span>
            </div>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}>
              {exp.description.map((item, i) => (
                <li key={i} style={{
                  color: '#cbd5e1',
                  marginBottom: '0.75rem',
                  paddingLeft: '1.5rem',
                  position: 'relative',
                  lineHeight: '1.6'
                }}>
                  <span style={{
                    position: 'absolute',
                    left: 0,
                    color: '#60a5fa'
                  }}>▹</span>
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

// Projects Section
const Projects = () => {
  const projects = [
    {
      title: 'OCR Form 2307 Bill Detection',
      description: 'Developed an OCR-based system to extract and compare Form 2307 and billing document details with Google Sheets ledger data, achieving 95% accuracy.',
      tech: ['Python', 'Tesseract OCR', 'EasyOCR', 'Google Sheets API']
    },
    {
      title: 'Literacy DAPAT',
      description: 'Built a web application for World Vision\'s Brigada Pagbasa program enabling digital literacy assessment with role-based access and automated data visualization.',
      tech: ['React', 'Node.js', 'MySQL', 'Firebase']
    },
    {
      title: 'AI Life Coaching Application',
      description: 'Developed an AI-powered goal management platform with MFA, AES-256 encryption, and GDPR/HIPAA compliance for secure personal productivity tracking.',
      tech: ['Python', 'FastAPI', 'TensorFlow', 'PostgreSQL']
    },
    {
      title: 'Digital Medical Prescription App',
      description: 'Designed a web-based platform allowing doctors to issue digital prescriptions securely with QR code sharing for instant verified patient data access.',
      tech: ['React', 'Vite', 'Firebase', 'Tailwind CSS', 'Node.js']
    }
  ];

  return (
    <section id="projects" style={{
      minHeight: '100vh',
      padding: '6rem 2rem',
      maxWidth: '1200px',
      margin: '0 auto'
    }}>
      <h2 style={{
        fontSize: '2.5rem',
        color: '#fff',
        marginBottom: '3rem',
        fontWeight: '700'
      }}>
        Projects
      </h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem'
      }}>
        {projects.map((project, index) => (
          <div key={index} style={{
            background: 'rgba(30, 41, 59, 0.5)',
            backdropFilter: 'blur(10px)',
            padding: '2rem',
            borderRadius: '12px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            transition: 'all 0.3s ease',
            display: 'flex',
            flexDirection: 'column'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.borderColor = 'rgba(96, 165, 250, 0.5)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
          }}>
            <h3 style={{
              fontSize: '1.3rem',
              color: '#60a5fa',
              marginBottom: '1rem',
              fontWeight: '600'
            }}>
              {project.title}
            </h3>
            <p style={{
              color: '#cbd5e1',
              lineHeight: '1.6',
              marginBottom: '1.5rem',
              flex: 1
            }}>
              {project.description}
            </p>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.5rem'
            }}>
              {project.tech.map((tech, i) => (
                <span key={i} style={{
                  padding: '0.3rem 0.8rem',
                  background: 'rgba(96, 165, 250, 0.1)',
                  color: '#60a5fa',
                  borderRadius: '6px',
                  fontSize: '0.85rem'
                }}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// Skills Section
const Skills = () => {
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
      category: 'Data Science & ML',
      skills: ['Pandas', 'NumPy', 'Scikit-learn', 'TensorFlow', 'Keras', 'OpenCV']
    },
    {
      category: 'Databases',
      skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Firebase', 'SQLite']
    },
    {
      category: 'Tools & Platforms',
      skills: ['Docker', 'AWS', 'Git', 'GitHub Actions', 'Jira', 'Power BI']
    }
  ];

  return (
    <section id="skills" style={{
      minHeight: '100vh',
      padding: '6rem 2rem',
      maxWidth: '1200px',
      margin: '0 auto'
    }}>
      <h2 style={{
        fontSize: '2.5rem',
        color: '#fff',
        marginBottom: '3rem',
        fontWeight: '700'
      }}>
        Skills & Technologies
      </h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '2rem'
      }}>
        {skillCategories.map((cat, index) => (
          <div key={index} style={{
            background: 'rgba(30, 41, 59, 0.5)',
            backdropFilter: 'blur(10px)',
            padding: '2rem',
            borderRadius: '12px',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <h3 style={{
              fontSize: '1.2rem',
              color: '#60a5fa',
              marginBottom: '1.5rem',
              fontWeight: '600'
            }}>
              {cat.category}
            </h3>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.5rem'
            }}>
              {cat.skills.map((skill, i) => (
                <span key={i} style={{
                  padding: '0.4rem 0.9rem',
                  background: 'rgba(96, 165, 250, 0.1)',
                  color: '#cbd5e1',
                  borderRadius: '6px',
                  fontSize: '0.9rem'
                }}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// Contact Section
const Contact = () => {
  return (
    <section id="contact" style={{
      minHeight: '100vh',
      padding: '6rem 2rem',
      maxWidth: '800px',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center'
    }}>
      <h2 style={{
        fontSize: '2.5rem',
        color: '#fff',
        marginBottom: '1.5rem',
        fontWeight: '700'
      }}>
        Get In Touch
      </h2>
      <p style={{
        fontSize: '1.1rem',
        color: '#cbd5e1',
        lineHeight: '1.8',
        marginBottom: '2rem'
      }}>
        I'm currently looking for new opportunities and collaborations. 
        Whether you have a question or just want to say hi, feel free to reach out!
      </p>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        marginBottom: '2rem'
      }}>
        <a href="mailto:tdcranola@gmail.com" style={{
          color: '#60a5fa',
          textDecoration: 'none',
          fontSize: '1.1rem',
          transition: 'color 0.3s ease'
        }}
        onMouseEnter={(e) => e.target.style.color = '#3b82f6'}
        onMouseLeave={(e) => e.target.style.color = '#60a5fa'}>
          tdcranola@gmail.com
        </a>
        <a href="tel:+639952521702" style={{
          color: '#60a5fa',
          textDecoration: 'none',
          fontSize: '1.1rem',
          transition: 'color 0.3s ease'
        }}
        onMouseEnter={(e) => e.target.style.color = '#3b82f6'}
        onMouseLeave={(e) => e.target.style.color = '#60a5fa'}>
          +63 995-252-1702
        </a>
      </div>
      <a href="mailto:tdcranola@gmail.com" style={{
        padding: '1rem 2.5rem',
        background: '#60a5fa',
        color: '#0f172a',
        textDecoration: 'none',
        borderRadius: '8px',
        fontWeight: '600',
        fontSize: '1.1rem',
        transition: 'all 0.3s ease'
      }}
      onMouseEnter={(e) => e.target.style.background = '#3b82f6'}
      onMouseLeave={(e) => e.target.style.background = '#60a5fa'}>
        Send a Message
      </a>
    </section>
  );
};

// Main App
function App() {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'projects', 'skills', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{
      background: '#0f172a',
      minHeight: '100vh',
      color: '#fff',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Video Background - Replace this with your Aries video */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(30, 41, 59, 0.8) 100%)',
          zIndex: 1
        }} />
        {/* Replace the div below with: <video autoPlay loop muted style={{...}}>
          <source src="path-to-your-aries-video.mp4" type="video/mp4" />
        </video> */}
        <div style={{
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          opacity: 0.1
        }} />
      </div>

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 2 }}>
        <Header activeSection={activeSection} />
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